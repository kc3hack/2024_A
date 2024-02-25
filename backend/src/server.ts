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
  const { long, lat, musicID } = req.body;
  const location = await prisma.location.create({
    data: {
      long: long,
      lat: lat,
      musicID: parseInt(musicID, 10),
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

async function getReverseGeocoding(
  req: express.Request,
  res: express.Response,
) {
  try {
    const long = req.query.long;
    const lat = req.query.lat;
    const url = `https://map.yahooapis.jp/geoapi/V1/reverseGeoCoder?lat=${lat}&lon=${long}&appid=dj00aiZpPUcxOVlUZDNueTN5aSZzPWNvbnN1bWVyc2VjcmV0Jng9NDY-&output=json`;
    const response = await fetch(url);
    const data = await response.json();
    const prefectureElement = data.Feature[0].Property.AddressElement.find(
      (element: { Level: string; Name: string }) =>
        element.Level === 'prefecture',
    );

    const prefecture = prefectureElement.Name;
    res.json(prefecture);
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ error: 'An error occurred while getting all locations.' });
  }
}

app.get('/get-all-locations', getAllLocations);
app.get('/get-location/:id', getLocation);
app.post('/create-location', createLocation);
app.delete('/delete-location/:id', deleteLocation);
app.get('/get-reverse-geocoding', getReverseGeocoding);
// SSL証明書と秘密鍵の読み込み
const options = {
  cert: fs.readFileSync('../certs/kansai.local.pem'),
  key: fs.readFileSync('../certs/kansai.local-key.pem'),
};

// HTTPSサーバーの作成
https.createServer(options, app).listen(3000, '192.168.37.141', () => {
  console.log('HTTPS Server is running on https://192.168.37.141:3000');
});
