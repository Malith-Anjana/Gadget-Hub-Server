import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import connectDB from './src/config/db';
import productRoutes from './src/routes/Product';
import categoryRoutes from './src/routes/Category';
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Load environment variables from a .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Set up routes
app.use('/api', productRoutes, categoryRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

