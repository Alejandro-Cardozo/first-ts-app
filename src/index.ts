import express from "express";

// initializations
const app = express();

// settings
app.set("port", 4000);

// middlewares

// routes

// static files

// runserver
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
