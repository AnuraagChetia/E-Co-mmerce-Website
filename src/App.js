import React from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Store from "./Components/Store/Store";
import Cart from "./Components/Cart/Cart";
import CartContextProvider from "./Store/CartContextProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Pages/About";
// import CartContext from "./Store/cart-context";
import Home from "./Pages/Home";
import TourContextProvider from "./Store/TourContextProvider";
import ContactUs from "./Pages/ContactUs";
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
  // const cartCtx = useContext(CartContext);
  const cartClickHandler = () => {
    setModalShow(true);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <CartContextProvider>
          <Header onCartClick={cartClickHandler}></Header>
          <Cart
            dummyproducts={productsArr}
            show={modalShow}
            onHide={() => {
              setModalShow(false);
            }}
          ></Cart>
          <Footer></Footer>
        </CartContextProvider>
      ),
      children: [
        {
          path: "/",
          element: (
            <>
              <Store
                products={productsArr}
                onCartClick={cartClickHandler}
              ></Store>
            </>
          ),
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/home",
          element: (
            <TourContextProvider>
              <Home></Home>
            </TourContextProvider>
          ),
        },
        { path: "/contactUs", element: <ContactUs></ContactUs> },
      ],
    },
  ]);
  // return (
  //   <>
  //     <CartContextProvider>
  // <Cart
  //   dummyproducts={productsArr}
  //   show={modalShow}
  //   onHide={() => {
  //     setModalShow(false);
  //   }}
  // ></Cart>;
  // <Header
  //   onCartClick={() => {
  //     setModalShow(true);
  //   }}
  // ></Header>
  //       <Store products={productsArr}></Store>
  //       <Footer></Footer>
  //     </CartContextProvider>
  //   </>
  // );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
