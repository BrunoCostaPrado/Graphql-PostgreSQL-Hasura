import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // const Post = await prisma.user.create({
  //   data: {
  //     name: "Bruno",
  //     email: "bruno4@bruno.com",
  //     post: {
  //       create: [{ title: "Post3" }, { title: "Post4" }],
  //     },
  //   },
  // });

  // const allUsers = await prisma.user.findMany();
  // console.log(allUsers);

  const include = await prisma.user.findMany({
    include: { post: true },
  });
  console.log(include);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

/*prisma.user
  .create({
    data: { name: "Bruno2", email: "bruno2@bruno.com" },
    select: { id: true, name: true, email: true },
  })
  .then(() => {
    console.log("Created");
  });*/
