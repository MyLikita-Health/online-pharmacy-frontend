import React, { useState } from "react"

// import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
import "./cart.css"
import { useSelector } from "react-redux";
export default function Cart() {
  // const productData = [
  //   {
  //     id: 1,
  //     image: "https://i.imgur.com/pHQ3xT3.jpg",
  //     name: "Coke - Diet, 355 Ml",
  //     price: 120,
  //     qty: 1,
  //   },
  //   {
  //     id: 2,
  //     image: "https://i.imgur.com/ba3tvGm.jpg",
  //     name: "Pork - Hock And Feet Attached",
  //     price: 150,
  //     qty: 1,
  //   },
  //   {
  //     id: 3,
  //     image: "https://i.imgur.com/1GrakTl.jpg",
  //     name: "Veal - Jambu",
  //     price: 135,
  //     qty: 1,
  //   },
  //   {
  //     id: 4,
  //     image: "https://i.imgur.com/1GrakTl.jpg",
  //     name: "Almonds Ground Blanched",
  //     price: 110,
  //     qty: 1,
  //   },
  //   {
  //     id: 5,
  //     image: "https://i.imgur.com/1GrakTl.jpg",
  //     name: "Passion Fruit",
  //     price: 80,
  //     qty: 1,
  //   },
  // ];
  const cart = useSelector(
    (state) => state.cart.getCart
  );

  const [products, SetProducts] = useState(cart);
  const increaseQuantity = (i) => {
    SetProducts((preValue) =>
      preValue.map((data, o) => {
        if (i === o) {
          return {
            ...data,
            qty: data.qty + 1,
          };
        }
        return data;
      })
    );
  };

  // -----Decrement Event------
  const decreaseQuantity = (i) => {
    SetProducts((preValue) =>
      preValue.map((data, o) => {
        if (i === o) {
          if (data.qty > 1) {
            return { ...data, qty: data.qty - 1 };
          } else {
            return data;
          }
        }
        return data;
      })
    );
  };

  // -----Remove Event------
  const removeFromCart = (i) => {
    if (window.confirm("Are you sure you want to remove into your cart?")) {
      SetProducts((prevCart) =>
        prevCart.filter((item, o) => {
          return i !== o;
        })
      );
    } else {
      // alert('No');
    }
  };
  // const emptycart = () => {
  //   if (window.confirm("Remove all items into your cart?")) {
  //     SetProducts([]);
  //   } else {
  //     // alert('No');
  //   }
  // };

  // ------Total Product Incart and Total Price of cart
  // const cartTotalQty = products.reduce((acc, data) => acc + data.qty, 0);
  const cartTotalAmount = products.reduce(
    (acc, data) => acc + data.price * data.qty,
    0
  );
  return (
    <div className="container-fluid">
      {/* {JSON.stringify(products)} */}
      <div className="row">
        <aside className="col-lg-9">
          <div className="card">
            <div className="table-responsive">
              <table className="table table-borderless table-shopping-cart">
                <thead className="text-muted">
                  <tr className="small text-uppercase">
                    <th scope="col">Product</th>
                    <th scope="col" width="120">Quantity</th>
                    <th scope="col" width="120">Price</th>
                    <th scope="col" className="text-right d-none d-md-block" width="200"></th>
                  </tr>
                </thead>
                <tbody>
                {products.map((i,index)=>(
                  <tr>
                    <td>
                      <figure className="itemside align-items-center">
                        <div className="aside"><img src={i.img} className="img-sm" alt="drug " /></div>
                        <figcaption className="info"> <span className="title text-dark" data-abc="true">{i.itemName}</span>
                          <p className="text-muted small">Shop: L <br /> Company: {i.store_name}</p>
                        </figcaption>
                      </figure>
                    </td>
                    <td className="d-flex justify-content-between">
                    <button
                              className="prdct-qty-btn"
                              type="button"
                              onClick={() => decreaseQuantity(index)}
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                            <input
                              type="text"
                              name="qty"
                              className="qty-input-box"
                              value={i.qty}
                              disabled
                            />
                            <button
                              className="prdct-qty-btn"
                              type="button"
                              onClick={() => increaseQuantity(index)}
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                       </td>
                    <td>
                      <div className="price-wrap"> <var className="price">${i.price}</var> <small className="text-muted"> $9.20 each </small> </div>
                    </td>
                    <td className="text-right d-none d-md-block"> <span className="btn btn-light" > <i className="fa fa-heart"></i></span> <button className="btn btn-light" onClick={() => removeFromCart(index)}> Remove</button> </td>
                  </tr>))}

  {/* <tr>
                    <td>
                      <figure className="itemside align-items-center">
                        <div className="aside"><img src={drug} className="img-sm" /></div>
                        <figcaption className="info"> <a href="#" className="title text-dark" data-abc="true">{products.length}yuyuyuyuyuyuyuyu</a>
                          <p className="text-muted small">Shop: L <br /> Company: MAXTRA</p>
                        </figcaption>
                      </figure>
                    </td>
                    <td> 
                    <button
                              className="prdct-qty-btn"
                              type="button"
                              onClick={() => decreaseQuantity(index)}
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                            <input
                              type="text"
                              name="qty"
                              className="qty-input-box"
                              value={qty}
                              disabled
                            />
                            <button
                              className="prdct-qty-btn"
                              type="button"
                              onClick={() => increaseQuantity(index)}
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                       </td>
                    <td>
                      <div className="price-wrap"> <var className="price">$10.00</var> <small className="text-muted"> $9.20 each </small> </div>
                    </td>
                    <td className="text-right d-none d-md-block"> <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light" data-toggle="tooltip" data-abc="true"> <i className="fa fa-heart"></i></a> <a href="" className="btn btn-light" data-abc="true"> Remove</a> </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </aside>
        <aside className="col-lg-3 ">
         {/* <br /> */}
         <p>Total Item({products&&products.length})</p>
          <div className="card">
            <div className="card-body">
              <dl className="dlist-align">
                <dt>Total price:</dt>
                <dd className="text-right ml-3">${cartTotalAmount.toFixed(0)}</dd>
              </dl>
              <dl className="dlist-align">
                <dt>Discount:</dt>
                <dd className="text-right text-danger ml-3">- $0</dd>
              </dl>
              <dl className="dlist-align">
                <dt>Total:</dt>
                <dd className="text-right text-dark b ml-3"><strong>${cartTotalAmount.toFixed(0)}</strong></dd>
              </dl>
              <hr /> <span  className="btn btn-out btn-primary btn-square btn-main" data-abc="true"> Checkout</span> <span className="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Continue Shopping</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}