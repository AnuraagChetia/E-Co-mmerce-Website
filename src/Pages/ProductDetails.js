
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
const ProductDetails = (props) => {
  const param = useParams();
  let elem;
  props.products.forEach((element) => {
    if (element.title === param.productTitle) {
      elem = element;
      return;
    }
  });
  return (
    <Container style={{ display: "block", marginBottom: "20rem" }}>
      <Row>
        <Col lg={3}>
          <Card
            style={{
              width: "20rem",
              marginTop: "20px",
              //   float: "left",
              //   display: "block",
            }}
          >
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                {elem.title}
              </Card.Title>
              <Card.Img variant="top" src={elem.imageUrl} />
              <hr></hr>
              <Row>
                <Col>
                  <Card.Text>${elem.price}</Card.Text>
                </Col>

                <Col>
                  <Button variant="primary" size="sm">
                    Add to Card
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <div style={{ marginLeft: "2rem" }}>
            <br></br>
            <h1>{elem.title}</h1>
            <h3>${elem.price}</h3>
            <div style={{ border: "2px solid red" }}>
              <h2 style={{ display: "inline-block" }}>Ratings & Reviews</h2>
              <Button
                variant="primary"
                style={{
                  display: "inline-block",
                  float: "right",
                  marginTop: "2px",
                }}
              >
                Rate Product
              </Button>
              <hr></hr>
              <p>
                <h4>Anuraag Chetia</h4>
                <p>Amazing Color !! Loved It</p>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default ProductDetails;
