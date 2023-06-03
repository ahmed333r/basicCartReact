import { Button, Container, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteFromCart } from "../rtk/slices/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, ele) => {
    acc += ele.price * ele.quantity;
    return acc;
  }, 0);
  return (
    <Container className="py-5">
      <h1 className="py-5">Welcome to cart</h1>
      <Button
        className="m-2"
        onClick={() => dispatch(clearCart())}
        variant="primary"
      >
        Clear
      </Button>
      <h5>Total price: {totalPrice.toFixed(2)}</h5>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>price</th>
            <th>quantity</th>
            <th> Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.id}</td>
              <td>{ele.title}</td>
              <td>
                <Image
                  src={ele.image}
                  style={{ width: "40px", height: "40px" }}
                  alt="f"
                />
              </td>
              <td>{ele.price}</td>
              <th>{ele.quantity}</th>
              <td>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(deleteFromCart(ele));
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
export default Cart;
