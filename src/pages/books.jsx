// import React, { useState } from "react";
// import BestBooks from "../components/ui/BestBooks";

// const books = ({ books: initialbooks }) => {
//   const { books, setbooks } = useState(initialbooks);
// };

// function filterbooks(filter) {
//   console.log(filter);
//   if (filter === "LOW_TO_HIGH") {
//     setbooks(
//       books
//         .slice()
//         .sort(
//           (a, b) =>
//             (a.saleprice || a.originalprice) - (b.saleprice || b.originalprice)
//         )
//     );
//   }
//   if (filter === "HIGHT TO LOW") {
//     setbooks(
//       books
//         .slice()
//         .sort(
//           (a, b) =>
//             (b.saleprice || b.originalprice) - (a.saleprice || a.originalprice)
//         )
//     );
//   }
//   if (filter === "RATING") {
//     setbooks(books.slice().sort((a, b) => b.rating - a.rating));
//   }
//   return (
//     <div id="books__body">
//       <main id="books__main">
//         <section>
//           <div className="books__container">
//             <div className="row">
//               <div className="books__header">
//                 <h2 className="section__title books__header--title">
//                   all books
//                 </h2>
//                 <select
//                   id="filter"
//                   defaultvalue="DEFAULT"
//                   onChange={(event) => filterbooks(event.target.value)}
//                 >
//                   <option value="DEFAULT" disabled>
//                     sort
//                   </option>
//                   <option value="LOW_TO_HIGH">price, low to high</option>
//                   <option value="HIGH_TO_LOW">price, high to low</option>
//                   <option value="RATING">rating</option>
//                 </select>
//               </div>
//               <div className="books">
//                 {books.map((book) => (
//                   <BestBooks book={book} key={book.id} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
// export default books;
import React, { useState } from "react";
import BestBooks from "../components/ui/BestBooks";
import { books } from '../data';

const Books = () => {
  const [bookData, setBooks] = useState(books);

  function filterBooks(filter) {
    console.log("Filter: ", filter);
    console.log("Books: ", bookData);
  
    if (!bookData) {
      console.error("Books array is undefined");
      return;
    }
  
    if (filter === "LOW_TO_HIGH") {
      setBooks(
        bookData
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
    }
    if (filter === "HIGH_TO_LOW") {
      setBooks(
        bookData
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
      );
    }
    if (filter === "RATING") {
      setBooks(bookData.slice().sort((a, b) => b.rating - a.rating));
    }
  }
  

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={(event) => filterBooks(event.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, low to high</option>
                  <option value="HIGH_TO_LOW">Price, high to low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="books">
                {bookData?.map((book) => (
                  <BestBooks key={book.id} book={book} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
