import express from "express";
import { indexRouter } from "./routes/indexRouter.js";

const PORT = process.env.PORT || 3000;

const app = express();
app.set("views", process.cwd() + "/views");
app.set("view engine", "ejs");

app.use(express.static(process.cwd() + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
