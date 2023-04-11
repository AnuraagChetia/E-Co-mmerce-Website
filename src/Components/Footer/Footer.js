import React from "react";
import { MDBFooter, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
const Footer = (props) => {
  return (
    <MDBFooter bgColor="blue" className="text-center text-lg-left">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgb(86, 204, 242)", height: "5rem" }}
      >
        <section className="mb-4">
          <h1
            style={{
              color: "white",
              // display: "inline",
              float: "left",
              fontWeight: "bold",
              fontFamily: "cursive",
            }}
          >
            The Generics
          </h1>
          <div style={{ float: "right" }}>
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="youtube" />
            </MDBBtn>
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="spotify" />
            </MDBBtn>
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>
          </div>
        </section>
      </div>
    </MDBFooter>
  );
};
export default Footer;
