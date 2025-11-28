import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCart } from "../contexts/CartProvider";
import { useState, useEffect } from "react";

function ShoppingCart() {
  const { cartstate, incrementFromCart, decrementFromCart, removeFromCart } = useCart();
  const [total, setTotal] = useState(0);
  console.log("sdhfsd",cartstate);
  

  // Calculate total whenever cartstate changes
  useEffect(() => {
    const cartTotal = cartstate.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(cartTotal);
  }, [cartstate]);

  return (
    <div className="container py-4">

      <h3 className="mb-4 fw-bold">Shopping Cart</h3>

      {/* Cart Item */}
      <div className="card shadow-sm border-0 mb-3">
        {cartstate?.length > 0 &&
          cartstate.map((item) => (
            <div className="card-body d-flex align-items-center" key={item.id}>
              <img
                src={item.image?.secure_url}
                alt=""
                className="rounded"
                style={{ width: "90px", height: "90px", objectFit: "cover" }}
              />

              <div className="ms-3 flex-grow-1">
                <h5 className="mb-1">{item.name}</h5>
                <p className="text-muted mb-2">
                  Rs {item.price} x {item.quantity} = Rs {item.price * item.quantity}
                </p>

                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-outline-dark btn-sm"
                    onClick={() => decrementFromCart(item._id)}
                  >
                    -
                  </button>
                  <span className="mx-3">{item.quantity}</span>
                  <button
                    className="btn btn-dark btn-sm"
                    onClick={() => incrementFromCart(item._id)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="btn btn-danger btn-sm ms-2"
                onClick={() => removeFromCart(item._id)}
              >
                <i className="bi bi-trash"></i>
              </button>
            </div>
          ))}
      </div>

      {/* Cart Summary Section */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h5 className="fw-bold mb-3">Cart Summary</h5>

          <div className="d-flex justify-content-between mb-2">
            <span>Subtotal</span>
            <span>Rs {total}</span>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <span>Shipping</span>
            <span>Rs 0</span>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <span>Tax</span>
            <span>Rs 0</span>
          </div>

          <hr />

          <div className="d-flex justify-content-between fw-bold">
            <span>Total</span>
            <span>Rs {total}</span>
          </div>
        </div>
      </div>

      {/* Total + Checkout */}
      <div className="mt-4">
        <h4 className="fw-bold">Total: Rs {total}</h4>
        <button className="btn btn-dark mt-3 px-4 py-2 w-100">
          Proceed to Checkout
        </button>
      </div>

    </div>
  );
}

export default ShoppingCart;
