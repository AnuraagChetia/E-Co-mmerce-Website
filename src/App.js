import React from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Store from "./Components/Store/Store";
import Cart from "./Components/Cart/Cart";
import CartContextProvider from "./Store/CartContextProvider";
const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    amount: 1,
  },
  {
    title: "Black and white Colors",
    price: 50,
    amount: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    amount: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    amount: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <CartContextProvider>
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
      </CartContextProvider>
    </>
  );
}

export default App;
