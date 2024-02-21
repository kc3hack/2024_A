// server.ts
import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import https from 'https';
import fs from 'fs';
import bodyParser from 'body-parser';

const prisma = new PrismaClient();
const app = express();

// body-parserの設定
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORSを許可する
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE'],
    credentials: true,
  }),
);

async function getAllLocations(req: express.Request, res: express.Response) {
  const all_locations = await prisma.location.findMany();
  res.json(all_locations);
}

async function getLocation(req: express.Request, res: express.Response) {
  const id = Number(req.params.id);
  const location = await prisma.location.findUnique({
    where: { id: id },
  });
  res.json(location);
}

async function createLocation(req: express.Request, res: express.Response) {
  const { long, lat } = req.body;
  const location = await prisma.location.create({
    data: {
      long: long,
      lat: lat,
    },
  });
  res.json(location);
}

async function deleteLocation(req: express.Request, res: express.Response) {
  const id = Number(req.params.id);
  const location = await prisma.location.delete({
    where: { id: id },
  });
  res.json(location);
}

app.get('/get-all-locations', getAllLocations);
app.get('/get-location/:id', getLocation);
app.post('/create-location', createLocation);
app.delete('/delete-location/:id', deleteLocation);

// SSL証明書と秘密鍵の読み込み
const options = {
  cert: fs.readFileSync('../certs/install.pem'),
  key: fs.readFileSync('../certs/install-key.pem'),
};

// HTTPSサーバーの作成
https.createServer(options, app).listen(3000, '192.168.11.14', () => {
  console.log('HTTPS Server is running on https://192.168.11.14:3000');
});
