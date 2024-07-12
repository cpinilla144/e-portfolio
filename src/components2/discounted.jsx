import react from "react";
import {books} from '../data'

const discounted = () => {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            discount <span className="purple">Books</span>
          </h2>
          <div className="books">
            {books
            .filter (book => book.saleprice > 0) 
            .slice(0,8)
            .map((book) => (
            <Book book={book} key={book.id} />
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default discounted;
