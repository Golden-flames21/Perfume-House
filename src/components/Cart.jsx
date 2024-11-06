import React from "react";
import { perfumes } from "../data";
import SinglePerfume from "./SinglePerfume";
function Cart({ id, title, image, rating, price, oldPrice, itemsLeft }) {
  return (
    <div
      style={{ width: "348px", height: "800px", border: "0.5px solid grey" }}
      className="container py-4 rounded-3 "
    >
      <h3 className="fw-bolder">My Cart Preview</h3>
      <div className="d-flex flex-column">
        {perfumes.slice(0, 3).map((perfume) => {
          return (
            <div className="d-flex mt-3 mb-2 gap-4 p-1">
              <div className="row">
                <img src={perfume.image} style={{ width: "150px" }} />
              </div>
              <div>
                <p className="fw-bold">{perfume.title}</p>
                <div className="d-flex gap-2 mb-4">
                  <button className="border-0 text-white">-</button>1{" "}
                  <button className="main-color-bg border-0"> + </button>
                </div>
                <div className="d-flex gap-4">
                  <p className="fw-bolder mt-1 "> #{perfume.price}</p>
                  <button
                    style={{
                      border: "0.5px solid red",
                      backgroundColor: "transparent",
                    }}
                    className="text-danger rounded-2 w-50 h-25 fw-bolder"
                  >

                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between">
          <p>Sub Total</p>
          <p>#0.00</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Delivery</p>
          <p>#0.00</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Total</p>
          <p>#0.00</p>
        </div>
      </div>
      <button
        style={{ height: "40px" }}
        className="w-100 rounded-2 main-color-bg text-white border-0"
      >
        Confirm Order{" "}
      </button>
    </div>
  );
}

export default Cart;

// import React from 'react'

// const Cart = () => {
//   return (
//     <div>
//       <h2>My Cart Preview</h2>
//       <div>

//       </div>
//     </div>
//   )
// }

// export default Cart
