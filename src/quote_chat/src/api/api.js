import axios from "axios";
import { BACKEND_HOST } from "../config/config";

const Api = axios.create({
  baseURL: `${BACKEND_HOST}/api/quote_api`,
});

export const getChats = () => Api.get("/chats");
export const createChat = (data) => Api.post("/chats", data);
export const updateChat = (id, data) => Api.patch(`/chats/${id}`, data);
export const deleteChat = (id) => Api.delete(`/chats/${id}`);

export const getMessages = (chatId) => Api.get(`/messages/${chatId}/messages`);
export const sendMessage = (chatId, data) =>
  Api.post(`/messages/${chatId}/messages`, data);

export const getAutoSenderState = () => Api.get("/auto-messages/auto-sender");
export const toggleAutoSender = (enabled) =>
  Api.post("/auto-messages/auto-sender", { enabled });
