import io from 'socket.io-client';

const ENDPOINT = "http://localhost:8000";

export const socket = io(ENDPOINT).on("connection");