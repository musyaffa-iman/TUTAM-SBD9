const { runMiddleware, corsMiddleware, helmetMiddleware } = require('./utils/middleware');
const connectDB = require('./utils/db');
const Todo = require('../models/Todo');

export default async function handler(req, res) {
  await runMiddleware(req, res, corsMiddleware);
  await runMiddleware(req, res, helmetMiddleware);
  await connectDB();

  const { method } = req;
  const { userId } = req.query;

  switch (method) {
    case 'GET':
      try {
        const todos = await Todo.find({ userId });
        res.status(200).json({ success: true, data: todos });
      } catch (error) {
        res.status(500).json({ success: false, error: 'Server Error' });
      }
      break;

    case 'POST':
      try {
        const todo = await Todo.create({ ...req.body, userId });
        res.status(201).json({ success: true, data: todo });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'PUT':
      try {
        const { id } = req.query;
        const todo = await Todo.findByIdAndUpdate(
          id,
          req.body,
          { new: true, runValidators: true }
        );

        if (!todo) {
          return res.status(404).json({ success: false, error: 'Todo not found' });
        }

        res.status(200).json({ success: true, data: todo });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'DELETE':
      try {
        const { id } = req.query;
        const todo = await Todo.findByIdAndDelete(id);

        if (!todo) {
          return res.status(404).json({ success: false, error: 'Todo not found' });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).json({ success: false, error: `Method ${method} Not Allowed` });
  }
}