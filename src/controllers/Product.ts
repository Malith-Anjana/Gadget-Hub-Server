import { Request, Response } from "express";
import Product, { IProduct } from "../models/Product";
import { isBooleanObject } from "util/types";

const productController = {
  async getAllProducts(req: Request, res: Response) {
    const cat = req.query.category;
    const sort = req.query.sort;
    const search = req.query.search;

    const sortOrder =
      sort === "up" || sort === "high"
        ? "asc"
        : sort === "down" || sort === "low"
        ? "desc"
        : "";
    const sortBy = sort === "up" || sort == "down" ? "rating" : "price";

    const sortOptions: any = {};
    let category: any = {};
    let searchQuery: any = {};

    search && (searchQuery = { title: { $regex: search, $options: "i" } });

    sort && (sortOptions[sortBy] = sortOrder === "asc" ? 1 : -1);
    cat && (category = { category: cat && cat });

    let products: IProduct[] = [];
    if (category || sortOrder || search)
      products = await Product.find({...category, ...searchQuery}).sort(sortOptions);
    else products = await Product.find();
    res.status(200).json({ results: products, count: products.length });
  },

  async create(req: Request, res: Response) {
    const user = await Product.create(req.body);
    res.status(201).json(user);
  },

  async show(req: Request, res: Response) {
    const user = await Product.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "Product not found" });
    } else {
      res.json(user);
    }
  },

  async update(req: Request, res: Response) {
    const user = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      res.status(404).json({ message: "Product not found" });
    } else {
      res.json(user);
    }
  },

  async destroy(req: Request, res: Response) {
    const user = await Product.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).json({ message: "Product not found" });
    } else {
      res.json({ message: "Product deleted successfully" });
    }
  },
};

export default productController;
