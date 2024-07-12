import react from "react";

const explore = () => {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2>
            explore more <span className="purple">books</span>
          </h2>
          <Link to="/books">
            <button className="btn">explore books</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default explore;
