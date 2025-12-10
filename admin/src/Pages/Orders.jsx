import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

function Orders() {
  const { Data, loading, error } = useFetch("http://localhost:5000/orders");

  const [orders, setOrders] = useState(Data);
  const [search, setSearch] = useState("");

  // Load API orders
  useEffect(() => {
    if (Data?.orders) {
      const mapped = Data.orders.map((o) => ({
        id: o._id,
        status: o.orderStatus,
        date: new Date(o.createdAt).toLocaleDateString(),
        payment: o.paymentMethod,
        customer: {
          name: o.fullName,
          address: `${o.address}, ${o.city}`,
          contact: o.phone,
        },
        items: o.cartItems,
        total: o.totalAmount,
      }));

      setOrders(mapped);
    }
  }, [Data]);

  // Delete Order (UI only)
  const deleteOrder = (id) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 fw-bold">Orders Details</h2>


       {/* 🔍 Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Order ID, Customer Name, or Item..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>


      {orders.map((order) => (
        <div className="card shadow-sm border-0 mb-4" key={order.id}>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="card-title mb-0">Order #{order.id}</h5>
              <span
                className={`badge ${
                  order.status === "Delivered"
                    ? "bg-success"
                    : order.status === "Pending"
                    ? "bg-warning text-dark"
                    : "bg-secondary"
                }`}
              >
                {order.status}
              </span>
            </div>

            <p className="text-muted mb-1">
              <strong>Date:</strong> {order.date}
            </p>
            <p className="text-muted mb-3">
              <strong>Payment:</strong> {order.payment}
            </p>

            <h6 className="fw-bold">Customer Info</h6>
            <p className="mb-3">
              {order.customer.name} <br />
              {order.customer.address} <br />
              Contact: {order.customer.contact}
            </p>

            <h6 className="fw-bold">Items</h6>
            <ul className="list-group mb-3">
              {order.items.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {item.name}
                  <span className="fw-bold">Rs {item.price}</span>
                </li>
              ))}
            </ul>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold mb-0">Total</h5>
              <h5 className="fw-bold mb-0 text-primary">Rs {order.total}</h5>
            </div>

            {/* Delete Button */}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteOrder(order.id)}
            >
              Delete Order
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Orders;
