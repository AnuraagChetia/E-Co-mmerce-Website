import React, { useContext } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBContainer,
} from "mdb-react-ui-kit";
import CartContext from "../../Store/cart-context";
import { NavLink, Outlet } from "react-router-dom";
import classes from "./Header.module.css";
const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + 1;
  }, 0);
  return (
    <>
      <header>
        <MDBNavbar expand="lg" light bgColor="white" className="fixed-top">
          <MDBContainer fluid>
            <MDBNavbarNav className="d-flex justify-content-center">
              <MDBNavbarItem>
                <MDBNavbarLink aria-current="page" href="#">
                  <NavLink
                    to="./home"
                    className={({ isActive }) =>
                      isActive ? classes.active : classes.inActive
                    }
                  >
                    Home
                  </NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem key="store">
                <MDBNavbarLink to="/">
                  <NavLink
                    to="/"
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
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink>
                  <NavLink
                    to="./about"
                    className={({ isActive }) =>
                      isActive ? classes.active : classes.inActive
                    }
                  >
                    About
                  </NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBNavbarItem className="d-flex justify-content-end">
              {/* <MDBNavbarLink onClick={props.onCartClick}>Cart</MDBNavbarLink> */}
              <button
                type="button"
                className="btn btn-tertiary"
                data-mdb-ripple-color="light"
                onClick={props.onCartClick}
              >
                Cart {numberOfCartItems}
              </button>
            </MDBNavbarItem>
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
