import { Router } from "express";
import MessagesController from "../controllers/MessagesController.js";

export const indexRouter = Router();

indexRouter.get("/", MessagesController.getAllMessages);
indexRouter.get("/new", MessagesController.getNewMessageForm);
indexRouter.get("/detail/:id", MessagesController.getMessageDetail);
indexRouter.post("/new", MessagesController.createNewMessage);
