import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import classes from "./ContactUs.module.css";
const ContactUs = (props) => {
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const client = {
      name: event.target[0].value,
      email: event.target[1].value,
      phoneNumber: event.target[2].value,
    };
    await fetch(
      "https://movieapp-d6140-default-rtdb.asia-southeast1.firebasedatabase.app/clients.json",
      {
        method: "POST",
        body: JSON.stringify(client),
        headers: { "Content-type": "application/JSON" },
      }
    );
  };
  return (
    <Container style={{ paddingBottom: "2.2rem" }}>
      <Form onSubmit={formSubmitHandler} className={classes.contactForm}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="number" placeholder="Enter phone number" />
          <Form.Text className="text-muted">
            We'll never share your details with anyone else.
          </Form.Text>
        </Form.Group>

        <Button type="submit" className={classes.formBtn}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};
export default ContactUs;
