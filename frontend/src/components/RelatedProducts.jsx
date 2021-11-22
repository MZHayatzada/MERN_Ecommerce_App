import React from 'react'

const RelatedProducts = ({products}) => {
    return (
        <>
            {products.map((product) => {
                const { id, image, name, price } = product;
                return (
                  <div key={id} className="col-lg-3 col-sm-6">
                    <div className="product text-center skel-loader">
                      <div className="d-block mb-3 position-relative">
                        <a className="d-block">
                          <img
                            className="img-fluid w-100"
                            src={image}
                            alt="..."
                          />
                        </a>
                        <div className="product-overlay">
                          <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0">
                              <a
                                className="btn btn-sm btn-outline-dark"
                                href="#"
                              >
                                <i className="far fa-heart"></i>
                              </a>
                            </li>
                            <li className="list-inline-item m-0 p-0">
                              <a className="btn btn-sm btn-dark" href="#">
                                Add to cart
                              </a>
                            </li>
                            <li className="list-inline-item mr-0">
                              <a className="btn btn-sm btn-outline-dark">
                                <i className="fas fa-expand"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <h6>
                        <a>{name}</a>
                      </h6>
                      <p className="small text-muted">${price}</p>
                    </div>
                  </div>
                );
              })} 
        </>
    )
}

export default RelatedProducts
