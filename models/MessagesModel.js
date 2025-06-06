import db from "../db/pool.js";

class MessagesModel {
  async getAllMessages() {
    const query = "SELECT * FROM messages ORDER BY added DESC";
    const { rows } = await db.query(query);
    return rows;
  }

  async getMessageById(id) {
    const query = "SELECT * FROM messages WHERE id = $1";
    const { rows } = await db.query(query, [id]);
    return rows[0];
  }

  async createMessage(message) {
    const query = "INSERT INTO messages (username, text) VALUES ($1, $2)";
    await db.query(query, [message.username, message.text]);
  }
}

export default new MessagesModel();
