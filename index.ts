import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import connectDB from './src/config/db';
// import routes from './routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Load environment variables from a .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Set up routes
// app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
