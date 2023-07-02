import { Schema, model } from "mongoose";

export interface ICategories {
  categories: string[];
}

const productSchema = new Schema<ICategories>({
  categories: [{type:String, required:true}]
},
{timestamps:true})

const Categories = model<ICategories>('categories', productSchema);

export default Categories;