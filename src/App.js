import React, { useContext } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Store from "./Components/Store/Store";
import Cart from "./Components/Cart/Cart";
import CartContextProvider from "./Store/CartContextProvider";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import About from "./Pages/About";
// import CartContext from "./Store/cart-context";
import Home from "./Pages/Home";
import LoginPage from "./Pages/Login";
import TourContextProvider from "./Store/TourContextProvider";
import ContactUs from "./Pages/ContactUs";
import ProductDetails from "./Pages/ProductDetails";
import AuthContext, {
  AuthContextProvider,
} from "./Components/Store/auth-context";
// import Layout from "../../Authentication-main/Authentication-main/src/components/Layout/Layout";
import { Switch } from "@material-tailwind/react";
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
      <Header onCartClick={cartClickHandler}></Header>
      <Cart
        dummyproducts={productsArr}
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
      ></Cart>

      <Routes>
        {/* home */}
        <Route path="/" exact element={<Home></Home>}></Route>
        {/* about us */}
        <Route path="/about" element={<About></About>}></Route>
        {/* contact us */}
        <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
        {/* product title */}
        <Route
          path="/store/:productTitle"
          element={<ProductDetails products={productsArr}></ProductDetails>}
        ></Route>
        {/* store */}
        {authCtx.isLoggedIn && (
          <Route
            path="/store"
            exact
            element={
              <Store
                products={productsArr}
                onCartClick={cartClickHandler}
              ></Store>
            }
          ></Route>
        )}
        {!authCtx.isLoggedIn && (
          <Route path="/store" exact element={<LoginPage></LoginPage>}></Route>
        )}
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
