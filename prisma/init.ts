import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // create first record and log all
  await prisma.blog.create({
    data: {
      title: 'Blog 1! Congrates!',
    },
  });
  const allBlogs = await prisma.blog.findMany();
  console.log(allBlogs);
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
