import { io } from "socket.io-client";
import { BACKEND_HOST } from "../config/config";

const SOCKET_URL = `${BACKEND_HOST}`;
const socket = io(SOCKET_URL, {
  autoConnect: false,
});

export default socket;
