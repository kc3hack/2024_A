// Node.js WebSocket サーバー
import * as fs from 'fs';
import * as https from 'https';
import * as socketIO from 'socket.io';

const server = https.createServer({
  cert: fs.readFileSync('certs/install.pem'),
  key: fs.readFileSync('certs/install-key.pem'),
});

const io = new socketIO.Server(server, {
  cors: {
    origin: 'https://192.168.11.14:5173',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('Connected');
  socket.on('message', (message: string) => {
    const number = parseInt(message, 10);
    if (isNaN(number)) {
      console.log('Received a non-numeric message: ' + message);
      return;
    }
    console.log('Received: ' + number);
    io.emit('message', number.toString());
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(5174, '192.168.11.14', () => {
  console.log('Server started on https://192.168.11.14:5173');
});
