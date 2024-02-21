// Node.js WebSocket サーバー
import * as fs from 'fs';
import * as https from 'https';
import * as socketIO from 'socket.io';
import { getIPAddresses } from './utils/get-ipaddress';

const server = https.createServer({
  cert: fs.readFileSync('../certs/kansai.local.pem'),
  key: fs.readFileSync('../certs/kansai.local-key.pem'),
});

const io = new socketIO.Server(server, {
  cors: {
    origin: 'https://192.168.11.14:5173',
    methods: ['GET', 'POST'],
    credentials: true,
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

// 動的にIPアドレスを取得します。
const ipAddresses = getIPAddresses();
if (ipAddresses.length > 0) {
  const ip = ipAddresses[0]; // 複数のIPアドレスがある場合は、最初のものを使用します。
  server.listen(5174, ip, () => {
    console.log(`Server started on https://${ip}:5174`);
  });
} else {
  console.log('No available IP address found');
}
