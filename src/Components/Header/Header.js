import React, { useContext } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBContainer,
} from "mdb-react-ui-kit";
import CartContext from "../../Store/cart-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <header>
      <MDBNavbar expand="lg" light bgColor="white" className="fixed-top">
        <MDBContainer fluid>
          <MDBNavbarNav className="d-flex justify-content-center">
            <MDBNavbarItem>
              <MDBNavbarLink aria-current="page" href="#">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem key="store">
              <MDBNavbarLink href="#" active>
                Store
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">About</MDBNavbarLink>
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
              Cart {cartCtx.totalItemsInCart}
            </button>
          </MDBNavbarItem>
        </MDBContainer>
      </MDBNavbar>

      <div className="p-5 text-center bg-light">
        <h1
          className="mb-10"
          style={{ paddingTop: "100px", fontWeight: "bold", fontSize: "7rem" }}
        >
          The Generics
        </h1>
      </div>
    </header>
  );
};

export default Header;
