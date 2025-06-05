import { Router } from "express";

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

export const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { messages });
});
indexRouter.get("/new", (req, res) => {
  res.render("form");
});
indexRouter.post("/new", (req, res) => {
  const { user, text } = req.body;
  messages.push({ user, text, added: new Date() });
  res.redirect("/");
});
