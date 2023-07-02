
import express from 'express';
import categoryController from '../controllers/Category';

const router = express.Router();

router.get('/categories', categoryController.getAllCategories );


export default router;
