import React, { Fragment } from "react";
// import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Header = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav as="ul" accessKeyclassName="me-auto" defaultActiveKey="/home">
            <Nav.Item as="li">
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="#features">Store</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="#pricing">About</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="#pricing">Cart</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <h1
        style={{
          backgroundColor: "#777",
          textAlign: "center",
          padding: "40px",
          fontSize: "100px",
          color: "white",
          fontWeight: "bold",
        }}
      >
        The Generics
      </h1>
    </>
  );
};
export default Header;
