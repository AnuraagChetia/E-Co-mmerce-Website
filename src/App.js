import React, { useContext } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Store from "./Components/Store/Store";
import Cart from "./Components/Cart/Cart";

import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";

import Home from "./Pages/Home";
import LoginPage from "./Pages/Login";

import ContactUs from "./Pages/ContactUs";
import ProductDetails from "./Pages/ProductDetails";
import AuthContext from "./Store/auth-context";

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
  const authCtx = useContext(AuthContext);
  const cartClickHandler = () => {
    setModalShow(true);
  };
  return (
    <>
      {/* <Header onCartClick={cartClickHandler}></Header> */}
      <Cart
        dummyproducts={productsArr}
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
      ></Cart>

      <Routes>
        {/* home */}
        <Route
          path="/"
          exact
          element={
            <>
              <Header onCartClick={cartClickHandler}></Header>
              <Home></Home>
            </>
          }
        ></Route>
        {/* about us */}
        <Route
          path="/about"
          element={
            <>
              <Header onCartClick={cartClickHandler}></Header>
              <About></About>
            </>
          }
        ></Route>
        {/* contact us */}
        <Route
          path="/contactUs"
          element={
            <>
              <Header onCartClick={cartClickHandler}></Header>
              <ContactUs></ContactUs>
            </>
          }
        ></Route>
        {/* product title */}
        <Route
          path="/store/:productTitle"
          element={
            <>
              <Header onCartClick={cartClickHandler}></Header>
              <ProductDetails products={productsArr}></ProductDetails>
            </>
          }
        ></Route>
        {/* store */}
        {authCtx.isLoggedIn && (
          <Route
            path="/store"
            exact
            element={
              <>
                <Header onCartClick={cartClickHandler}></Header>
                <Store
                  products={productsArr}
                  onCartClick={cartClickHandler}
                ></Store>
              </>
            }
          ></Route>
        )}
        {!authCtx.isLoggedIn && (
          <Route
            path="/store"
            exact
            element={
              <>
                <Header onCartClick={cartClickHandler}></Header>
                <LoginPage></LoginPage>
              </>
            }
          ></Route>
        )}
        <Route
          path="/login"
          element={
            <>
              <Header onCartClick={cartClickHandler}></Header>
              <LoginPage></LoginPage>
            </>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
