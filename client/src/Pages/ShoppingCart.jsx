import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCart } from "../contexts/CartProvider";
import { useState, useEffect } from "react";
import { Link } from "react-router";


function ShoppingCart() {
  const {
    cartstate,
    incrementFromCart,
    decrementFromCart,
    removeFromCart,
  } = useCart();

  const [total, setTotal] = useState(0);
  const [shipping] = useState(500);

  // Calculate total
  useEffect(() => {
    const cartTotal = cartstate.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(cartTotal);
  }, [cartstate]);

  return (
    <div className="container py-4">
      <h3 className="mb-4 fw-bold text-center text-md-start">
        Shopping Cart
      </h3>

      {/* CART ITEMS */}
      <div className="card shadow-sm border-0 mb-3">
        {cartstate.length > 0 ? (
          cartstate.map((item) => (
            <div
              className="card-body d-flex flex-column flex-md-row align-items-md-center"
              key={item.id}
            >
              {/* IMAGE */}
              <img
                src={item.image?.secure_url}
                alt={item.name}
                className="rounded cart-img mb-3 mb-md-0"
              />

              {/* PRODUCT INFO */}
              <div className="ms-md-3 flex-grow-1 text-center text-md-start">
                <h5 className="mb-1">{item.name}</h5>

                <p className="text-muted mb-2">
                  Rs {item.price} × {item.quantity} ={" "}
                  <strong>Rs {item.price * item.quantity}</strong>
                </p>

                {/* QUANTITY BUTTONS */}
                <div className="d-flex justify-content-center justify-content-md-start align-items-center">
                  <button
                    className="btn btn-outline-dark btn-sm"
                    onClick={() => decrementFromCart(item.productId)}
                  >
                    −
                  </button>

                  <span className="mx-3 fw-bold">{item.quantity}</span>

                  <button
                    className="btn btn-dark btn-sm"
                    onClick={() => incrementFromCart(item.productId)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* REMOVE BUTTON */}
              <button
                className="btn btn-danger btn-sm mt-3 mt-md-0 ms-md-2 align-self-md-start"
                onClick={() => removeFromCart(item.productId)}
              >
                <i className="bi bi-trash"></i>
              </button>
            </div>
          ))
        ) : (
          <div className="card-body text-center text-muted">
            Your cart is empty 🛒
          </div>
        )}
      </div>

      {/* CART SUMMARY */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h5 className="fw-bold mb-3">Cart Summary</h5>

          <div className="d-flex justify-content-between mb-2">
            <span>Subtotal</span>
            <span>Rs {total}</span>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <span>Shipping</span>
            <span>Rs {shipping}</span>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <span>Tax</span>
            <span>Rs 0</span>
          </div>

          <hr />

          <div className="d-flex justify-content-between fw-bold">
            <span>Total</span>
            <span>Rs {total + shipping}</span>
          </div>
        </div>
      </div>

      {/* CHECKOUT */}
      <div className="mt-4">
        <h4 className="fw-bold text-center text-md-start">
          Total: Rs {total + shipping}
        </h4>

        <Link
          className="btn btn-dark mt-3 px-4 py-2 w-100"
          to="/checkout"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCart;
