import { Request, Response } from "express";
import Product, { IProduct } from "../models/Product";

const productController = {
    async getAllProducts(req: Request, res: Response) {
      const category = req.query.category;
      console.log(category);
      
      let products:IProduct[]=[];
      if(category) products = await Product.find({category});
      else products = await Product.find();
      res.status(200).json({results:products, count: products.length});
    },
  
    async create(req: Request, res: Response) {
      const user = await Product.create(req.body);
      res.status(201).json(user);
    },
  
    async show(req: Request, res: Response) {
      const user = await Product.findById(req.params.id);
      if (!user) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.json(user);
      }
    },
  
    async update(req: Request, res: Response) {
      const user = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!user) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.json(user);
      }
    },
  
    async destroy(req: Request, res: Response) {
      const user = await Product.findByIdAndDelete(req.params.id);
      if (!user) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.json({ message: 'Product deleted successfully' });
      }
    },
  };
  
  export default productController;
  