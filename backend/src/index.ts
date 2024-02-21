import { PrismaClient } from '@prisma/client';
import './server';
const prisma = new PrismaClient();

async function main() {
  const locations = await prisma.location.findMany();

  console.log(locations);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
