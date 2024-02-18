// Node.js WebSocket サーバー
import * as fs from 'fs';
import * as https from 'https';
import * as WebSocket from 'ws';

const server = https.createServer({
  cert: fs.readFileSync('certs/install.pem'),
  key: fs.readFileSync('certs/install-key.pem'),
});

const wss = new WebSocket.Server({ server });

let clients: WebSocket[] = [];

wss.on('connection', (ws: WebSocket) => {
  console.log('Connected');
  clients.push(ws);
  ws.on('message', (message: string) => {
    const number = parseInt(message, 10);
    if (isNaN(number)) {
      console.log('Received a non-numeric message: ' + message);
      return;
    }
    console.log('Received: ' + number);
    for (const client of clients) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(number.toString());
      }
    }
  });

  ws.on('close', () => {
    clients = clients.filter((client) => client !== ws);
  });
});

server.listen(5173, '192.168.11.14', () => {
  console.log('Server started on https://192.168.11.14:5174');
});
