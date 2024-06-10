type Book = {
  title: string;
  author: string;
  publishedYear: number;
};

function isRecentBook(book: Book): boolean {
  return new Date().getFullYear() - book.publishedYear <= 5;
}

console.log(
  isRecentBook({
    title: "Harry Potter",
    author: "JK Rowling",
    publishedYear: 1994,
  })
);
