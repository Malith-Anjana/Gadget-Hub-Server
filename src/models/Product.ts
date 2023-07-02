import { Schema, model } from "mongoose";

export interface IProduct {
  title: string;
  price: number;
  discountPercentage: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  stock: any;
  brand: string;
  thumbnail: string;
  images: string[];
}

const productSchema = new Schema<IProduct>({
  title: {type:String, required: true, unique:true },
  price:{type:Number, required: true, unique:true },
  discountPercentage: {type:Number, required: true,},
  description: {type:String, required: true},
  category: {type:String, required: true},
  image: {type:String, required: true},
  rating: {type:Number, required: true},
  stock: {type:Number, required: true},
  brand: {type:String, required: true},
  thumbnail: {type:String, required: true},
  images: [{type:String, required:true}]
},
{timestamps:true})

const Product = model<IProduct>('product', productSchema);

export default Product;