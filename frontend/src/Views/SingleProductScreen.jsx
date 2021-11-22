import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import RelatedProducts from "../components/RelatedProducts";
import Tabs from "../components/Tabs";
import { getSingleProduct } from "../redux/actions";

const SingleProductScreen = ({
  getSingleProductData,
  productData = { reviews: [] },
  products = [],
}) => {
  const tabs = ["Description", "Reviews"];
  const { name, price, image, condition, longDescription, category, reviews } = productData;
  const history = useHistory();
  let id = history.location.pathname.split("/")[2];

  useEffect(() => {
    getSingleProductData(id);
  }, [id]);

  return (
    <div className="page-holder bg-light">
      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6">
              <div className="row m-sm-0">
                <div className="col-sm-2 p-sm-0 order-2 order-sm-1 mt-2 mt-sm-0">
                  <div className=" d-flex flex-row flex-sm-column">
                    <div className="flex-fill mb-2 mr-2 mr-sm-0">
                      <img className="w-100" src={image} alt="..." />
                    </div>
                    <div className="flex-fill mb-2 mr-2 mr-sm-0">
                      <img className="w-100" src={image} alt="..." />
                    </div>
                    <div className="flex-fill mb-2 mr-2 mr-sm-0">
                      <img className="w-100" src={image} alt="..." />
                    </div>
                    <div className="flex-fill mb-2">
                      <img className="w-100" src={image} alt="..." />
                    </div>
                  </div>
                </div>
                <div className="col-sm-10 order-1 order-sm-2">
                  <div className="">
                    <img className="img-fluid" src={image} alt="..." />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <h1> {name} </h1>
              <p className="text-muted lead">${price}</p>
              <p className="text-small mb-4">{condition}</p>
              <div className="row align-items-stretch mb-4">
                <div className="col-sm-5 pr-sm-0">
                  <div className="border d-flex align-items-center justify-content-between py-1 px-3 bg-white border-white">
                    <span className="small text-uppercase text-gray mr-4 no-select">
                      Quantity
                    </span>
                    <div className="quantity">
                      <button className="dec-btn p-0">
                        <i className="fas fa-caret-left"></i>
                      </button>
                      <input
                        className="form-control border-0 shadow-0 p-0"
                        type="text"
                        value="1"
                      />
                      <button className="inc-btn p-0">
                        <i className="fas fa-caret-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 pl-sm-0">
                  <a
                    className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0"
                    href="cart.html"
                  >
                    Add to cart
                  </a>
                </div>
              </div>

              <ul className="list-unstyled small d-inline-block">
                <li className="px-3 py-2 mb-1 bg-white text-muted">
                  <strong className="text-uppercase text-dark">
                    Category:
                  </strong>
                  <a className="reset-anchor ml-2" href="#">
                    {" " + category}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <ul className="nav nav-tabs border-0" id="myTab">
            <Tabs
              tabs={tabs}
              longDescription={longDescription}
              reviews={reviews}
            />
          </ul>

          <div className="tab-content mb-5" id="myTabContent">
            <h2 className="h5 text-uppercase mb-4 m-3">Related products</h2>
            <div className="row">
              <RelatedProducts products={products} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productData: state.singleProduct.data,
    products: state.products.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return { getSingleProductData: (id) => dispatch(getSingleProduct(id)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductScreen);
