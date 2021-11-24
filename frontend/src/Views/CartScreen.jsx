import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { addItemToCard, getSingleProduct } from "../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const CartScreen = ({
  getProduct,
  singleProduct = [],
  addItemInCart,
  cartItem = [],
}) => {
  const history = useHistory();
  const location = useLocation();
  let id = location.pathname.split("/")[2];

  useEffect(() => {
    getProduct(id);
  }, [id, cartItem]);
  useEffect(() => {
    if (Object.keys(singleProduct).length !== 0) {
      addItemInCart(singleProduct);
    }
  }, []);
  let quantity = location.state.singleProductQty
  const [qty, setQty] = useState(location.state.qty);
  const { cart } = cartItem;

  const increaseQty = () => {
    let num = parseInt(quantity);
    setQty((prev) => {
      return qty > num - 1 ? (prev = num) : prev + 1;
    });
  };
  const decreaseQty = () => {
    setQty((prev)=>{
      if(qty<2){
        return 1
      }
      prev-=1
      return prev
    })
  };
  return (
    <section className="py-5">
      <h2 className="h5 text-uppercase mb-4">Shopping cart</h2>
      <div className="row">
        <div className="col-lg-8 mb-4 mb-lg-0">
          <div className="table-responsive mb-4">
            <table className="table">
              <thead className="bg-light">
                <tr>
                  <th className="border-0" scope="col">
                    {" "}
                    <strong className="text-small text-uppercase">
                      Product
                    </strong>
                  </th>
                  <th className="border-0" scope="col">
                    {" "}
                    <strong className="text-small text-uppercase">Price</strong>
                  </th>
                  <th className="border-0" scope="col">
                    {" "}
                    <strong className="text-small text-uppercase">
                      Quantity
                    </strong>
                  </th>
                  <th className="border-0" scope="col">
                    {" "}
                    <strong className="text-small text-uppercase">Total</strong>
                  </th>
                  <th className="border-0" scope="col">
                    {" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItem.length === 0 ? (
                  <h1>Cart is empthy</h1>
                ) : (
                  cart.map((item) => {
                    const { id, name, image, price } = item;

                    return (
                      <tr>
                        <th className="pl-0 border-0">
                          <div className="media align-items-center">
                            <a className="d-block animsition-link">
                              <img src={image} width="70" />
                            </a>
                            <div className="media-body ml-3">
                              <strong className="h6">
                                <a className="reset-anchor animsition-link">
                                  {name}
                                </a>
                              </strong>
                            </div>
                          </div>
                        </th>
                        <td className="align-middle border-0">
                          <p className="mb-0 small">${price}</p>
                        </td>
                        <td className="align-middle border-0">
                          <div className="border d-flex align-items-center justify-content-between px-3">
                            <span className="small text-uppercase text-gray headings-font-family">
                              Quantity
                            </span>
                            <div className="quantity">
                              <button className="inc-btn p-0" onClick={decreaseQty}>
                                <FontAwesomeIcon
                                  icon={faCaretLeft}
                                ></FontAwesomeIcon>
                              </button>
                              <input
                                className="form-control form-control-sm border-0 shadow-0 p-0"
                                value={qty}
                              />
                              <button className="inc-btn p-0" onClick={increaseQty}>
                                <FontAwesomeIcon
                                  icon={faCaretRight}
                                ></FontAwesomeIcon>
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle border-0">
                          <p className="mb-0 small">${parseInt(price) * qty}</p>
                        </td>
                        <td className="align-middle border-0">
                          <a className="reset-anchor" href="#">
                            <i className="fas fa-trash-alt small text-muted"></i>
                          </a>
                        </td>
                      </tr>
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
                  <span className="text-muted small">$250</span>
                </li>
                <li className="border-bottom my-2"></li>
                <li className="d-flex align-items-center justify-content-between mb-4">
                  <strong className="text-uppercase small font-weight-bold">
                    Total
                  </strong>
                  <span>$250</span>
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
                        {" "}
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
    addItemInCart: (item) => dispatch(addItemToCard(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
