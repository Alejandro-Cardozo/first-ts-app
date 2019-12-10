import mongoose, { Schema, model } from "mongoose";

// typescript syntax
export interface Book extends mongoose.Document {
  title: string;
  author: string;
  isbn: string;
}

const BookSchema = new Schema({
  title: String,
  author: String,
  isbn: String
});

// Defining my model as a Book gives me better understanding of my code
export default model<Book>("Book", BookSchema);
