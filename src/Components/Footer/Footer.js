import React from "react";
import { MDBFooter, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
const Footer = (props) => {
  return (
    <MDBFooter bgColor="blue" className="text-center text-lg-left">
      {/* <div>The Generics</div> */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgb(86, 204, 242)" }}
      >
        <section className="mb-4">
          <h1
            style={{ color: "white", display: "inline", paddingRight: "50%", fontWeight:'bold' , fontFamily:'cursive'}}
          >
            The Generics
          </h1>
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
        </section>
      </div>
    </MDBFooter>
  );
};
export default Footer;
