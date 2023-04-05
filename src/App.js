import React, { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Store from "./Components/Store/Store";
import Cart from "./Components/Cart/Cart";
const productsArr = [
  {
    title: "Colors",
    price: 100,
    quantity: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    quantity: 4,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    quantity: 2,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    quantity: 3,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Cart
        dummyproducts={productsArr}
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
      ></Cart>
      <Header
        onCartClick={() => {
          setModalShow(true);
        }}
      ></Header>
      <Store products={productsArr}></Store>
      <Footer></Footer>
    </>
  );
}

export default App;
