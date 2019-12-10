import express from "express";
import exphbs from "express-handlebars";
import path from "path";

// Imported routes
import IndexRoutes from "./routes";
import BooksRoutes from "./routes/books";

// initializations
const app = express();

// settings
app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    extname: ".hbs",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    helpers: require("./lib/helpers"),
    defaultLayout: "main"
  })
);
app.set("view engine", ".hbs");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/", IndexRoutes);
app.use("/books", BooksRoutes); //not .get bc we're importing an object instead a single route

// static files
app.use(express.static(path.join(__dirname, "public")));

// runserver
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
