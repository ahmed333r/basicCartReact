import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../rtk/slices/productsSlice";
import { addToCart } from "../rtk/slices/cartSlice";

function Products() {
  const state = useSelector((state) => state.product);
  console.log(state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Container className="py-5">
      <Row className="py-5">
        {state.map((ele) => (
          <Col key={ele.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ height: "300px" }}
                variant="top"
                src={ele.image}
              />
              <Card.Body>
                <Card.Title>{ele.title}</Card.Title>
                <Card.Text>{ele.description}</Card.Text>
                <Card.Text>$ {ele.price}</Card.Text>
                <Button
                  onClick={() => {
                    dispatch(addToCart(ele));
                  }}
                  variant="primary"
                >
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Products;
