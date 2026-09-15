import React, { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2, LogIn, LogOut } from 'lucide-react';
import { postsApi } from './api';

const empty = { title: '', content: '' };

function Auth({ user, onLogin, onLogout }) {
  const [email, setEmail] = useState('');
  if (user) return <div className="auth"><span>{user}</span><button onClick={onLogout}><LogOut size={15}/> Logout</button></div>;
  return <form className="auth" onSubmit={(e) => { e.preventDefault(); if (email.trim()) onLogin(email.trim()); }}><input type="email" placeholder="demo@email.com" value={email} onChange={(e)=>setEmail(e.target.value)} required/><button><LogIn size={15}/> Demo login</button></form>;
}

export default function App() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState(empty);
  const [editing, setEditing] = useState(null);
  const [status, setStatus] = useState('Loading posts…');
  const [user, setUser] = useState(() => localStorage.getItem('knowhub-demo-user'));

  async function load() {
    try { const data = await postsApi.list(); setPosts(data.data || data); setStatus(''); }
    catch (e) { setStatus(e.message); }
  }
  useEffect(() => { load(); }, []);

  async function submit(e) {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) return;
    if (editing) await postsApi.update(editing, form); else await postsApi.create(form);
    setForm(empty); setEditing(null); await load();
  }

  async function remove(id) { await postsApi.remove(id); await load(); }
  function edit(post) { setEditing(post.id); setForm({ title: post.title, content: post.content }); }
  function login(email) { localStorage.setItem('knowhub-demo-user', email); setUser(email); }
  function logout() { localStorage.removeItem('knowhub-demo-user'); setUser(null); }

  return <main>
    <header><div><h1>KnowHub</h1><p>Share questions. Grow knowledge.</p></div><Auth user={user} onLogin={login} onLogout={logout}/></header>
    <section className="card">
      <h2>{editing ? 'Edit post' : 'Create a post'}</h2>
      <form onSubmit={submit} className="editor">
        <input placeholder="Question title" value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})}/>
        <textarea placeholder="Add context…" value={form.content} onChange={(e)=>setForm({...form,content:e.target.value})}/>
        <div><button className="primary"><Plus size={16}/>{editing ? 'Save changes' : 'Publish'}</button>{editing && <button type="button" onClick={()=>{setEditing(null);setForm(empty)}}>Cancel</button>}</div>
      </form>
    </section>
    <section><h2>Community posts</h2>{status && <p className="status">{status}</p>}{posts.map(post => <article className="card" key={post.id}><h3>{post.title}</h3><p>{post.content}</p><small>{post.createdAt ? new Date(post.createdAt).toLocaleString() : ''}</small><div className="actions"><button onClick={()=>edit(post)}><Pencil size={15}/> Edit</button><button onClick={()=>remove(post.id)}><Trash2 size={15}/> Delete</button></div></article>)}</section>
  </main>;
}
