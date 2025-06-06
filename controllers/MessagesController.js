import MessagesModel from "../models/MessagesModel.js";

class MessagesController {
  async getAllMessages(req, res) {
    const messages = await MessagesModel.getAllMessages();
    res.render("index", { messages });
  }

  getNewMessageForm(req, res) {
    res.render("form");
  }

  async getMessageDetail(req, res) {
    const { id } = req.params;
    const msg = await MessagesModel.getMessageById(id);

    if (!msg) {
      return res.status(404).send("Message not found");
    }

    res.render("detail", { msg });
  }

  async createNewMessage(req, res) {
    const { username, text } = req.body;
    await MessagesModel.createMessage({ username, text });
    res.redirect("/");
  }
}

export default new MessagesController();
