const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function insertRecords(databaseType) {
  console.log(`Inserting 1000 records in ${databaseType}...`);

  const start = Date.now();

  for (let i = 0; i < 1000; i++) {
    const nodeId = 1;
    const temperature = Math.random() * 100; // Random temperature value

    await prisma.log.create({
      data: {
        logged_at: new Date(),
        temperature: temperature,
        nodeId: nodeId,
      },
    });
  }

  const end = Date.now();
  console.log(`Inserted 1000 records in ${databaseType} in ${end - start} ms`);
}

async function main() {
  try {
    await insertRecords('TimescaleDB');
    await insertRecords('PostgreSQL');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
