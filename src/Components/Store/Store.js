import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
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
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    ${product.price}
                  </Card.Subtitle>
                  <Card.Img variant="top" src={product.imageUrl} />
                  <Card.Text>Card Link</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center" style={{padding:'20px'}}>
        <Button variant="info">See the cart</Button>
      </div>
    </>
  );
};
export default Store;
