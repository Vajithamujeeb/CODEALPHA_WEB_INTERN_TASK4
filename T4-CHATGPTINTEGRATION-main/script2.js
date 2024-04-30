const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const { createChatGPTResponse } = require('./chatgpt');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  console.log('Client connected');
  
  ws.on('message', function incoming(message) {
    console.log('Received message:', message);

    // Forward message to ChatGPT and get response
    const response = createChatGPTResponse(message);

    // Send response back to the client
    ws.send(response);
  });
});

server.listen(3000, function listening() {
  console.log('Server started on port 3000');
});