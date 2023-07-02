import productController from "../controllers/Product";
import express from 'express';

const router = express.Router();

router.get('/products', productController.getAllProducts);
router.post('/products', productController.create);
router.get('/products/:id', productController.show);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.destroy);

export default router;
