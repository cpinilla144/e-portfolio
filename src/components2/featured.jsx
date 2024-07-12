import react from "react";
import book from "./ui/book";
import { books } from "../data";

const featured = () => {
  console.log(books);
  console.log(books.filter((book) => book.rating === 5).slice(0, 4));
  function getfivestarbooks() {}
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            featured <span className="purple">books</span>
          </h2>
          <div className="books">
            {books
              .filter((book) => book.rating === 5)
              .slice(0, 4)
              .map((book) => (
                <Book book={book} key={book.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default featured;
