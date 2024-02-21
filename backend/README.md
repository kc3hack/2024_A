# バックエンド

## サーバーの起動

APIサーバーの起動

```bash
sudo apt install mkcert
cd ..
mkcert -install
mkcert kansai.local
pnpm install
pnpm ts-node src/index.ts
```

MySQLサーバーの起動

```bash
cd Docker/docker-mysql
docker compose up 
```
