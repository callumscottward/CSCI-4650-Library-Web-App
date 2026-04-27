import { PrismaClient, Genre } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.bookReview.deleteMany();
  await prisma.audioBookCopy.deleteMany();
  await prisma.physicalBookCopy.deleteMany();
  await prisma.book.deleteMany();
  await prisma.author.deleteMany();

  const authors = await Promise.all([
    prisma.author.create({
      data: {
        firstName: "J.R.R.",
        lastName: "Tolkien",
      },
    }),
    prisma.author.create({
      data: {
        firstName: "Jane",
        lastName: "Austen",
      },
    }),
    prisma.author.create({
      data: {
        firstName: "George",
        lastName: "Orwell",
      },
    }),
  ]);

  const books = await Promise.all([
    prisma.book.create({
      data: {
        ISBN: "9780547928227",
        title: "The Hobbit",
        pageLength: 310,
        duration: 680,
        genre: Genre.FANTASY,
        authorId: authors[0].id,
      },
    }),
    prisma.book.create({
      data: {
        ISBN: "9780141439518",
        title: "Pride and Prejudice",
        pageLength: 432,
        duration: 720,
        genre: Genre.FICTION,
        authorId: authors[1].id,
      },
    }),
    prisma.book.create({
      data: {
        ISBN: "9780451524935",
        title: "1984",
        pageLength: 328,
        duration: 660,
        genre: Genre.SCIFI,
        authorId: authors[2].id,
      },
    }),
    prisma.book.create({
      data: {
        ISBN: "9780451526342",
        title: "Animal Farm",
        pageLength: 112,
        duration: 210,
        genre: Genre.FICTION,
        authorId: authors[2].id,
      },
    }),
    prisma.book.create({
      data: {
        ISBN: "9780544003415",
        title: "The Fellowship of the Ring",
        pageLength: 423,
        duration: 1170,
        genre: Genre.FANTASY,
        authorId: authors[0].id,
      },
    }),
  ]);

  await prisma.physicalBookCopy.createMany({
    data: [
      { checkedOut: false, bookId: books[0].id },
      { checkedOut: true, bookId: books[1].id },
      { checkedOut: false, bookId: books[2].id },
      { checkedOut: false, bookId: books[3].id },
      { checkedOut: true, bookId: books[4].id },
    ],
  });

  await prisma.audioBookCopy.createMany({
    data: [
      { checkedOut: false, bookId: books[0].id },
      { checkedOut: false, bookId: books[1].id },
      { checkedOut: true, bookId: books[2].id },
      { checkedOut: false, bookId: books[3].id },
      { checkedOut: true, bookId: books[4].id },
    ],
  });

  await prisma.bookReview.createMany({
    data: [
      {
        reviewerName: "Alex",
        review: "A fun and adventurous fantasy classic.",
        rating: 5,
        bookId: books[0].id,
      },
      {
        reviewerName: "Morgan",
        review: "A thoughtful romance with memorable characters.",
        rating: 4,
        bookId: books[1].id,
      },
      {
        reviewerName: "Taylor",
        review: "Dark, powerful, and still very relevant.",
        rating: 5,
        bookId: books[2].id,
      },
      {
        reviewerName: "Jordan",
        review: "Short but meaningful political satire.",
        rating: 4,
        bookId: books[3].id,
      },
      {
        reviewerName: "Casey",
        review: "A strong start to an epic fantasy journey.",
        rating: 5,
        bookId: books[4].id,
      },
    ],
  });

  console.log("Database seeded successfully.");
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
  