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

class MessagesController {
  getAllMessages(req, res) {
    res.render("index", { messages });
  }

  getNewMessageForm(req, res) {
    res.render("form");
  }

  getMessageDetail(req, res) {
    const { id } = req.params;
    const msg = messages.find((message) => message.id === id);

    if (!msg) {
      return res.status(404).send("Message not found");
    }

    res.render("detail", { msg });
  }

  createNewMessage(req, res) {
    const { user, text } = req.body;
    messages.push({ id: crypto.randomUUID(), user, text, added: new Date() });
    res.redirect("/");
  }
}

export default new MessagesController();
