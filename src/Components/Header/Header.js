import React, { useContext, useState } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBadge,
  MDBNavbarToggler,
  // MDBNavbarLink,
  MDBIcon,
  MDBContainer,
  MDBCollapse,
} from "mdb-react-ui-kit";
import CartContext from "../../Store/cart-context";
import { NavLink, Outlet } from "react-router-dom";
import classes from "./Header.module.css";
// import bgImg from "../../Assets/tim-toomey-eiY4KJ62P5Q-unsplash.jpg";
const Header = (props) => {
  const [showNavRight, setShowNavRight] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + 1;
  }, 0);
  return (
    <>
      <header>
        <MDBNavbar
          expand="lg"
          light
          bgColor="white"
          className={`fixed-top ${classes.navbar}`}
        >
          <MDBContainer fluid>
            <MDBNavbarToggler
              type="button"
              data-target="#navbarRightAlignExample"
              aria-controls="navbarRightAlignExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowNavRight(!showNavRight)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>

            <MDBCollapse navbar show={showNavRight}>
              <MDBNavbarNav className="d-flex justify-content-center">
                <MDBNavbarItem id="home">
                  <NavLink
                    to="./home"
                    className={({ isActive }) =>
                      isActive ? classes.active : classes.inActive
                    }
                  >
                    Home
                  </NavLink>
                </MDBNavbarItem>
                <MDBNavbarItem id="store">
                  <NavLink
                    to="/store"
                    className={({ isActive }) =>
                      isActive ? classes.active : classes.inActive
                    }
                    // style={{
                    //   color: "rgba(0,0,0,.55)",
                    //   textDecoration: "none",
                    // }}
                  >
                    Store
                  </NavLink>
                </MDBNavbarItem>

                <MDBNavbarItem id="about">
                  <NavLink
                    to="./about"
                    className={({ isActive }) =>
                      isActive ? classes.active : classes.inActive
                    }
                  >
                    About
                  </NavLink>
                </MDBNavbarItem>
                <MDBNavbarItem id="contact">
                  <NavLink
                    to="./contactUs"
                    className={({ isActive }) =>
                      isActive ? classes.active : classes.inActive
                    }
                  >
                    Contact us
                  </NavLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
              <MDBNavbarItem className="d-flex justify-content-end" id="cart">
                {/* <MDBNavbarLink onClick={props.onCartClick}>Cart</MDBNavbarLink> */}
                <button
                  type="button"
                  className="btn btn-tertiary"
                  data-mdb-ripple-color="light"
                  onClick={props.onCartClick}
                >
                  <MDBIcon
                    fas
                    icon="shopping-cart"
                    style={{ display: "inline" }}
                  ></MDBIcon>
                  Cart
                  <MDBBadge pill color="danger" style={{ display: "inline" }}>
                    {numberOfCartItems}
                  </MDBBadge>
                </button>
              </MDBNavbarItem>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        <div className="p-5 text-center bg-light">
          <h1
            className="mb-10"
            style={{
              paddingTop: "100px",
              fontWeight: "bold",
              fontSize: "7rem",
            }}
          >
            The Generics
          </h1>
        </div>
      </header>
      <Outlet></Outlet>
    </>
  );
};

export default Header;
