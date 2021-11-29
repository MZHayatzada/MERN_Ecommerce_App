import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import {
  addItemToCard,
  calculateEachItemTotal,
  calculateTotal,
  decreaseItemFromCart,
  getSingleProduct,
  increaseItemToCart,
} from "../redux/actions";
import SingleCartItem from "../components/SingleCartItem";
import TotalCalculationComponent from "../components/TotalCalculationComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
const CartScreen = ({
  cartItem = [],
}) => {
  const location = useLocation();

  const qty = useState(location.state.qty);
  let itemQty = location.state.qty
  let quantity = location.state.quantity;
  const { cart } = cartItem;

    let allPrices = cart.map((item)=>{
        return item.price * parseInt(item.qty)
    })

    let totalPrice = allPrices.reduce((acc,curr)=>{
        return acc+curr
    },0)

    useEffect(() => {
      totalPrice = allPrices.reduce((acc,curr)=>{
        return acc+curr
    },0)
    }, [quantity])

  return (
    <section className="container py-5">
      <h2 className="h5 text-uppercase mb-4">Shopping cart</h2>
      <div className="row">
        <div className="col-lg-8 mb-4 mb-lg-0">
          <div className="table-responsive mb-4">
            <table className="table">
              <thead className="bg-light">
                <tr>
                  <th className="border-0" scope="col">
                    <strong className="text-small text-uppercase">
                      Product
                    </strong>
                  </th>
                  <th className="border-0" scope="col">
                    <strong className="text-small text-uppercase">Price</strong>
                  </th>
                  <th className="border-0" scope="col">
                   
                    <strong className="text-small text-uppercase">
                      Quantity
                    </strong>
                  </th>
                  <th className="border-0" scope="col">
                    
                    <strong className="text-small text-uppercase">Total</strong>
                  </th>
                  <th className="border-0" scope="col">
                    {" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.length === 0 ? (
                  <h1>Cart is empthy</h1>
                ) : (
                  cart.map((item,index) => {
                    return (
                      <SingleCartItem key={index} {...item} quantity={quantity} itemQty={parseInt(item.qty)} />
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
          <div className="bg-light px-4 py-3">
            <div className="row align-items-center text-center">
              <div className="col-md-6 mb-3 mb-md-0 text-md-left">
                <a
                  className="btn btn-link p-0 text-dark btn-sm"
                  href="shop.html"
                >
                  <i className="fas fa-long-arrow-alt-left mr-2"> </i>
                  Continue shopping
                </a>
              </div>
              <div className="col-md-6 text-md-right">
                <a className="btn btn-outline-dark btn-sm" href="checkout.html">
                  Procceed to checkout
                  <i className="fas fa-long-arrow-alt-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
        <div className="card border-0 rounded-0 p-lg-4 bg-light">
          <div className="card-body">
            <h5 className="text-uppercase mb-4">Cart total</h5>
            <ul className="list-unstyled mb-0">
              <li className="d-flex align-items-center justify-content-between">
                <strong className="text-uppercase small font-weight-bold">
                  Subtotal
                </strong>
                <span className="text-muted small">$ {0} </span>
              </li>
              <li className="border-bottom my-2"></li>
              <li className="d-flex align-items-center justify-content-between mb-4">
                <strong className="text-uppercase small font-weight-bold">
                  Total
                </strong>
                <span>$ {totalPrice}</span>
              </li>
              <li>
                <form action="#">
                  <div className="form-group mb-0">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter your coupon"
                    />
                    <button
                      className="btn btn-dark btn-sm btn-block"
                      type="submit"
                    >
                    <i className="fas fa-gift mr-2"></i>Apply coupon
                    </button>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    singleProduct: state.singleProduct.data,
    cartItem: state.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: (id) => dispatch(getSingleProduct(id)),
    addItemInCart: (item, qty) => dispatch(addItemToCard(item, qty)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
