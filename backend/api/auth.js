const { runMiddleware, corsMiddleware, helmetMiddleware } = require('./utils/middleware');
const connectDB = require('./utils/db');
const User = require('../models/User');

export default async function handler(req, res) {
  await runMiddleware(req, res, corsMiddleware);
  await runMiddleware(req, res, helmetMiddleware);
  await connectDB();

  const { method } = req;

  switch (method) {
    case 'POST':
      if (req.url.endsWith('/login')) {
        return handleLogin(req, res);
      } else if (req.url.endsWith('/signup')) {
        return handleSignup(req, res);
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      return res.status(405).json({ success: false, error: `Method ${method} Not Allowed` });
  }
}

async function handleLogin(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
}

async function handleSignup(req, res) {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });

    res.status(201).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ success: false, error: 'Email already exists' });
    }
    res.status(500).json({ success: false, error: 'Server Error' });
  }
}