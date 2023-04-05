import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Store = (props) => {
  return (
    <>
      <h2 style={{ textAlign: "center", fontWeight: "bold", padding: "20px" }}>
        Music
      </h2>
      <div className="container">
        <div className="row row-cols-2 gy-5">
          {props.products.map((product) => (
            <div className="col">
              <Card className="mx-auto" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    {product.title}
                  </Card.Title>
                  <Card.Img variant="top" src={product.imageUrl} />
                  <hr></hr>
                  <Row>
                    <Col>
                      <Card.Text>${product.price}</Card.Text>
                    </Col>
                    <Col>
                      <Button variant="primary" size="sm">
                        Add to Card
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center" style={{ padding: "30px" }}>
        <Button variant="info" style={{color:'white', fontWeight:'bold'}}>See the cart</Button>
      </div>
    </>
  );
};
export default Store;
