import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProducts } from "../redux/actions";
import SingleProduct from "../components/SingleProduct";
import Model from "../components/Model";
const ShopScreen = ({ products = [],loading=true, getData }) => {
  
  useEffect(() => {
    getData();
  }, []);
  const [isOpen, setIsOpen] = useState(false)
  const open = ()=>{
    setIsOpen(true)
  }
  const close = ()=>{
    setIsOpen(false)
  }

  return (
    <div>
      <div className="container">
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
              <div className="col-lg-6">
                <h1 className="h2 text-uppercase mb-0">Shop</h1>
              </div>
              <div className="col-lg-6 text-lg-right">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Shop
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-3 order-2 order-lg-1">
                <h5 className="text-uppercase mb-4">Categories</h5>
                <div className="py-2 px-4 bg-dark text-white mb-3">
                  <strong className="small text-uppercase font-weight-bold">
                    Fashion &amp; Acc
                  </strong>
                </div>
                <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Women's T-Shirts
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Men's T-Shirts
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Dresses
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Novelty socks
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Women's sunglasses
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Men's sunglasses
                    </a>
                  </li>
                </ul>
                <div className="py-2 px-4 bg-light mb-3">
                  <strong className="small text-uppercase font-weight-bold">
                    Health &amp; Beauty
                  </strong>
                </div>
                <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Shavers
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      bags
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Cosmetic
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Nail Art
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Skin Masks &amp; Peels
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Korean cosmetics
                    </a>
                  </li>
                </ul>
                <div className="py-2 px-4 bg-light mb-3">
                  <strong className="small text-uppercase font-weight-bold">
                    Electronics
                  </strong>
                </div>
                <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal mb-5">
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Electronics
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      USB Flash drives
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Headphones
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Portable speakers
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Cell Phone bluetooth headsets
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor" href="#">
                      Keyboards
                    </a>
                  </li>
                </ul>
                <h6 className="text-uppercase mb-4">Price range</h6>
                <div className="price-range pt-4 mb-5">
                  <div id="range"></div>
                  <div className="row pt-2">
                    <div className="col-6">
                      <strong className="small font-weight-bold text-uppercase">
                        From
                      </strong>
                    </div>
                    <div className="col-6 text-right">
                      <strong className="small font-weight-bold text-uppercase">
                        To
                      </strong>
                    </div>
                  </div>
                </div>
                <h6 className="text-uppercase mb-3">Show only</h6>
                <div className="custom-control custom-checkbox mb-1">
                  <input
                    className="custom-control-input"
                    id="customCheck1"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label text-small"
                    htmlFor="customCheck1"
                  >
                    Returns Accepted
                  </label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input
                    className="custom-control-input"
                    id="customCheck2"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label text-small"
                    htmlFor="customCheck2"
                  >
                    Returns Accepted
                  </label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input
                    className="custom-control-input"
                    id="customCheck3"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label text-small"
                    htmlFor="customCheck3"
                  >
                    Completed Items
                  </label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input
                    className="custom-control-input"
                    id="customCheck4"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label text-small"
                    htmlFor="customCheck4"
                  >
                    Sold Items
                  </label>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input
                    className="custom-control-input"
                    id="customCheck5"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label text-small"
                    htmlFor="customCheck5"
                  >
                    Deals &amp; Savings
                  </label>
                </div>
                <div className="custom-control custom-checkbox mb-4">
                  <input
                    className="custom-control-input"
                    id="customCheck6"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label text-small"
                    htmlFor="customCheck6"
                  >
                    Authorized Seller
                  </label>
                </div>
                <h6 className="text-uppercase mb-3">Buying format</h6>
                <div className="custom-control custom-radio">
                  <input
                    className="custom-control-input"
                    id="customRadio1"
                    type="radio"
                    name="customRadio"
                  />
                  <label
                    className="custom-control-label text-small"
                    htmlFor="customRadio1"
                  >
                    All Listings
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    className="custom-control-input"
                    id="customRadio2"
                    type="radio"
                    name="customRadio"
                  />
                  <label
                    className="custom-control-label text-small"
                    htmlFor="customRadio2"
                  >
                    Best Offer
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    className="custom-control-input"
                    id="customRadio3"
                    type="radio"
                    name="customRadio"
                  />
                  <label
                    className="custom-control-label text-small"
                    htmlFor="customRadio3"
                  >
                    Auction
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    className="custom-control-input"
                    id="customRadio4"
                    type="radio"
                    name="customRadio"
                  />
                  <label
                    className="custom-control-label text-small"
                    htmlFor="customRadio4"
                  >
                    Buy It Now
                  </label>
                </div>
              </div>
              <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
                <div className="row mb-3 align-items-center">
                  <div className="col-lg-6 mb-2 mb-lg-0">
                    <p className="text-small text-muted mb-0">
                      Showing 1–12 of 53 results
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
                      <li className="list-inline-item text-muted mr-3">
                        <a className="reset-anchor p-0" href="#">
                          <i className="fas fa-th-large"></i>
                        </a>
                      </li>
                      <li className="list-inline-item text-muted mr-3">
                        <a className="reset-anchor p-0" href="#">
                          <i className="fas fa-th"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <select
                          className="selectpicker ml-auto"
                          name="sorting"
                          data-width="200"
                          data-style="bs-select-form-control"
                          data-title="Default sorting"
                        >
                          <option value="default">Default sorting</option>
                          <option value="popularity">Popularity</option>
                          <option value="low-high">Price: Low to High</option>
                          <option value="high-low">Price: High to Low</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="row">
                  {loading ? <h1>Loading...</h1> : products.map((product) => {
                    return <SingleProduct key={product.id} {...product} />;
                  }) }
                </div>
             
                <nav >
                  <ul className="pagination justify-content-center justify-content-lg-end">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">»</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.data,
    loading: state.products.loading
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getProducts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShopScreen);
