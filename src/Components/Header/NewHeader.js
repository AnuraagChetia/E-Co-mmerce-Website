import React from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBContainer,
} from "mdb-react-ui-kit";

const NewHeader = (props) => {
  return (
    <header>
      <MDBNavbar expand="lg" light bgColor="white" className="fixed-top">
        <MDBContainer fluid>
          <MDBNavbarNav className="d-flex justify-content-center">
            <MDBNavbarItem active>
              <MDBNavbarLink aria-current="page" href="#">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#" active>
                Store
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">About</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBNavbarItem className="d-flex justify-content-end">
            <MDBNavbarLink href="#">Cart</MDBNavbarLink>
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

export default NewHeader;
