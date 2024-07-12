import { fontAwesomeIcon } from "@fortawesome/react-fontawesome";
import react from "react";

const highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            why choose <span className="purple">library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<fontAwesomeIcon icon="bolt" />}
              title="easy and quickly"
              para="get access to the book you purchased online instantly."
            />
            <Highlight
              icon={<fontAwesomeIcon icon="book-open" />}
              title="10,000+ books"
              para="Library has books in all your favourite categories."
            />{" "}
            <Highlight
              icon={<fontAwesomeIcon icon="tags" />}
              title="affordable"
              para=" Get your hands on popular books for as little as $10."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
