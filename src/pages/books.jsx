import react, { useState } from "react";
import book from "../components/ui/book";

const books = ({ books: initialbooks }) => {
  const { books, setbooks } = useState(initialbooks);
};

function filterbooks(filter) {
  console.log(filter);
  if (filter === "LOW_TO_HIGH") {
    setbooks(
      books
        .slice()
        .sort(
          (a, b) =>
            (a.saleprice || a.originalprice) - (b.saleprice || b.originalprice)
        )
    );
  }
  if (filter === "HIGHT TO LOW") {
    setbooks(
      books
        .slice()
        .sort(
          (a, b) =>
            (b.saleprice || b.originalprice) - (a.saleprice || a.originalprice)
        )
    );
  }
  if (filter === "RATING") {
    setbooks(books.slice().sort((a, b) => b.rating - a.rating));
  }
  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  all books
                </h2>
                <select
                  id="filter"
                  defaultvalue="DEFAULT"
                  onChange={(event) => filterbooks(event.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    sort
                  </option>
                  <option value="LOW_TO_HIGH">price, low to high</option>
                  <option value="HIGH_TO_LOW">price, high to low</option>
                  <option value="RATING">rating</option>
                </select>
              </div>
              <div className="books">
                {books.map((book) => (
                  <Book book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default books;
