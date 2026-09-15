import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

export const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok', service: 'knowhub-api' }));

app.get('/posts', async (_req, res, next) => {
  try { res.json(await prisma.post.findMany({ orderBy: { createdAt: 'desc' } })); } catch (e) { next(e); }
});

app.post('/posts', async (req, res, next) => {
  try {
    const { title, content } = req.body ?? {};
    if (!title?.trim() || !content?.trim()) return res.status(400).json({ error: 'title and content are required' });
    const post = await prisma.post.create({ data: { title: title.trim(), content: content.trim() } });
    res.status(201).json(post);
  } catch (e) { next(e); }
});

app.put('/posts/:id', async (req, res, next) => {
  try {
    const { title, content } = req.body ?? {};
    if (!title?.trim() || !content?.trim()) return res.status(400).json({ error: 'title and content are required' });
    res.json(await prisma.post.update({ where: { id: req.params.id }, data: { title: title.trim(), content: content.trim() } }));
  } catch (e) { next(e); }
});

app.delete('/posts/:id', async (req, res, next) => {
  try { await prisma.post.delete({ where: { id: req.params.id } }); res.status(204).send(); } catch (e) { next(e); }
});

app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'internal server error' });
});
