import prisma from "@/server/prisma/prisma-client";

export default async function Page() {
  await prisma.todo.create({
    data: {
      title: "my todo",
      description: "This is a todo!",
    },
  });

  const todoCount = await prisma.todo.count();

  return (
    <div className="flex flex-col h-full items-center justify-center">
      <h1>Hello World</h1>

      <span>You have {todoCount} todos!</span>
    </div>
  );
}
