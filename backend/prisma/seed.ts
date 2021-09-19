import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient()

async function main() {

  // Create seed data
  await prisma.notes.create({
    data: {
      title: "Note #1",
      body: "Ini note #1 body"
    }
  })

}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect()
  })