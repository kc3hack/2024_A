// server.ts
import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import https from 'https';
import fs from 'fs';
const prisma = new PrismaClient();
const app = express();

// CORSを許可する
app.use(cors());

app.get('/locations', async (req, res) => {
  const locations = await prisma.location.findMany();
  res.json(locations);
});

// SSL証明書と秘密鍵の読み込み
const options = {
  cert: fs.readFileSync('../certs/kansai.local.pem'),
  key: fs.readFileSync('../certs/kansai.local-key.pem'),
};

// HTTPSサーバーの作成
https.createServer(options, app).listen(3000, () => {
  console.log(`HTTPS Server is running on https://localhost:3000`);
});
