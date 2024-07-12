import Footer from "./components/footer";
import react, { useState, useEffect } from "react";
import Nav from "./components/nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import books from "./pages/books";
import { books } from "./data";
import Bookinfo from "./pages/bookinfo";
import Cart from "./pages/cart";

function app() {
  const [cart, setCart] = useState([]);

  function addToCart (book) {
    setCart ([...cart,{...book, quantity: 1}]);
  }

  function changeQuantity(book, quantity){
    setCart(cart.map((item) => item.id === book.id 
        ? {
          ...item,
          quantity: +quantity,
        }
      : item
      
    )
    );
  }
  function removeItem(item) {
    setCart(cart.filter(book => book.id !==item.id))
  }

  function numberOfItems() {
    let counterc = 0;
    cart.forEach(item =>{
      counter += item.quantity
    })
    return counter;
  }

  useEffect (() => {
    console.log(cart)
  }, [cart])


  return (
    <Router>
      <div className="app">
        <Nav numberOfItems={numberOfItems()} />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => <Bookinfo books={books} addToCart={addToCart} />}
        />
        <Route 
        path="/cart"
         render={() => (
         <Cart 
         books={books} 
         cart={cart} 
         changeQuantity={changeQuantity} 
        removeItem={removeItem} />)}/>
        <Footer />
      </div>
    </Router>
  );
}

export default app;
