import mongoose, { mongo } from "mongoose";
import { mongodb } from "./keys";

mongoose
  .connect(mongodb.URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(db => console.log("DB connected"))
  .catch(err => console.log(err));
