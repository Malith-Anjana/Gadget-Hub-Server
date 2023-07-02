import { ICategories } from './../models/Category';
import { Request, Response } from "express";
import Categories from "../models/Category";

const categoryController = {
    async getAllCategories(req: Request, res: Response) {
      const data = await Categories.findOne();
      const categories= data?.categories;
      res.status(200).json({results:categories, count: categories?.length});
    },
  
  };
  
  export default categoryController;
  