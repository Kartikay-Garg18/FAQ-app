import express from 'express';
import userRouter from './routes/faq.route.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/faqs', userRouter);

export default app;