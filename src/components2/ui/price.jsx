import react from "react";
const price = ({ saleprice, originalprice }) => {
  return (
    <div className="book_price">
      {saleprice ? (
        <>
          <span className="book__price--normal">
            ${originalprice.tofixed(2)}
          </span>
          ${saleprice.tofixed(2)}
        </>
      ) : (
        <>${originalprice.tofixed(2)}</>
      )}
    </div>
  );
};

export default price;
