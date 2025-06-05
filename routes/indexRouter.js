import { Router } from "express";

const messages = [
  {
    id: crypto.randomUUID(),
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: crypto.randomUUID(),
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
indexRouter.get("/detail/:id", (req, res) => {
  const { id } = req.params;
  const msg = messages.find((message) => message.id === id);

  if (!msg) {
    return res.status(404).send("Message not found");
  }

  res.render("detail", { msg });
});
indexRouter.post("/new", (req, res) => {
  const { user, text } = req.body;
  messages.push({ id: crypto.randomUUID(), user, text, added: new Date() });
  res.redirect("/");
});
