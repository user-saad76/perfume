import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCart } from "../contexts/CartProvider";
import { useAuth } from "../contexts/authProvider";
import { usePost } from "../hooks/usePost";

// Zod schema for checkout form validation
const checkoutSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required").max(15, "Invalid phone number"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  postalCode: z.string().min(3, "Postal Code is required"),
  paymentMethod: z.literal("Cash on Delivery"), // Only Cash on Delivery
});

function Checkout() {
  const { cartstate } = useCart();
  const { user } = useAuth();

  const [shipping, setShipping] = useState(500);
  const [total, setTotal] = useState(0);
  const { postData, response, error, loading } = usePost(
    "http://localhost:5000/orders/create"
  );

  useEffect(() => {
    const cartTotal = cartstate.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(cartTotal);
  }, [cartstate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // <-- added
  } = useForm({
    resolver: zodResolver(checkoutSchema),
  });

  // ⭐ Prefill user.name and user.email when user exists
  useEffect(() => {
    if (user) {
      reset({
        fullName: user.name || "",
        email: user.email || "",
      });
    }
  }, [user, reset]);

 const onSubmit = async (data) => {
  try {
    console.log("Checkout-data",data);
    
    const orderData = {
      ...data,
      cartItems: cartstate.map(item => ({
        productId: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      shippingCost: shipping,
      totalAmount: total + shipping,
      userId: user?._id || null,
    };

    console.log("Sending Order:", orderData);

      await postData(orderData);

    alert("Order Placed Successfully!");
  } catch (err) {
    console.error(err);
    alert("Order Failed, Try Again!");
  }
};

  return (
    <div className="container py-5">
      <div className="row">
        {/* Checkout Form */}
        <div className="col-md-6">
          <h3 className="mb-4">Checkout</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Full Name */}
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                readOnly 
                type="text"
                className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                {...register("fullName")}
              />
              <div className="invalid-feedback">{errors.fullName?.message}</div>
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                readOnly 
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                {...register("email")}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>

            {/* Phone */}
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                {...register("phone")}
              />
              <div className="invalid-feedback">{errors.phone?.message}</div>
            </div>

            {/* Address */}
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className={`form-control ${errors.address ? "is-invalid" : ""}`}
                {...register("address")}
              />
              <div className="invalid-feedback">{errors.address?.message}</div>
            </div>

            {/* City */}
            <div className="mb-3">
              <label className="form-label">City</label>
              <input
                type="text"
                className={`form-control ${errors.city ? "is-invalid" : ""}`}
                {...register("city")}
              />
              <div className="invalid-feedback">{errors.city?.message}</div>
            </div>

            {/* Postal Code */}
            <div className="mb-3">
              <label className="form-label">Postal Code</label>
              <input
                type="text"
                className={`form-control ${errors.postalCode ? "is-invalid" : ""}`}
                {...register("postalCode")}
              />
              <div className="invalid-feedback">{errors.postalCode?.message}</div>
            </div>

            {/* Payment Method */}
            <div className="mb-3">
              <label className="form-label">Payment Method</label>
              <select
                className={`form-select ${errors.paymentMethod ? "is-invalid" : ""}`}
                {...register("paymentMethod")}
                defaultValue="Cash on Delivery"
              >
                <option value="Cash on Delivery">Cash on Delivery</option>
              </select>
              <div className="invalid-feedback">{errors.paymentMethod?.message}</div>
            </div>

            <button type="submit" className="btn btn-primary w-100" >
              Place Order
            </button>
          </form>
        </div>

        {/* Cart Summary */}
        <div className="col-md-6 mt-4 mt-md-0">
          <h3 className="mb-4">Cart Summary</h3>
          <div className="card p-3">
            {cartstate.map((item) => (
              <div key={item.id} className="d-flex justify-content-between mb-2">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>Rs{item.price * item.quantity + shipping}</span>
              </div>
            ))}
            <hr />
            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>Rs{total + shipping}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
