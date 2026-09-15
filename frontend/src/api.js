const base = (process.env.REACT_APP_API_BASE_URL || '/api').replace(/\/$/, '');

async function request(path, options = {}) {
  const response = await fetch(`${base}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  if (!response.ok) throw new Error(`API request failed: ${response.status}`);
  if (response.status === 204) return null;
  return response.json();
}

export const postsApi = {
  list: () => request('/posts'),
  create: (payload) => request('/posts', { method: 'POST', body: JSON.stringify(payload) }),
  update: (id, payload) => request(`/posts/${id}`, { method: 'PUT', body: JSON.stringify(payload) }),
  remove: (id) => request(`/posts/${id}`, { method: 'DELETE' }),
};
