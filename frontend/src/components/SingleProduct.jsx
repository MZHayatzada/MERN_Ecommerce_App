import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faExpand } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { addItemToCard } from '../redux/actions';
const SingleProduct = ({id,name,price,image,addItemToCardAction}) => {
    return (
        <div className="col-lg-4 col-sm-6">
        <div className="product text-center">
          <div className="mb-3 position-relative">
            <div className="badge text-white badge-"></div>
            <Link className="d-block" to={`/singleProduct/${id}`}>
              <img
                className="img-fluid w-100"
                src={image}
                alt="..."
              />
            </Link>
            <div className="product-overlay">
              <ul className="mb-0 list-inline">
                
                <li className="list-inline-item m-0 p-0">
                  <Link className="btn btn-sm btn-dark" to={`/cart/id=${id}&qty=${1}`} onClick={()=>addItemToCardAction(id,1)}>
                    Add to cart
                  </Link>
                </li>
                <li className="list-inline-item mr-0">
                  <a
                    className="btn btn-sm btn-outline-dark"
                    href="#productView"
                    data-toggle="modal"
                  >
                    <i>
                        <FontAwesomeIcon icon={faExpand}/>
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            <a className="reset-anchor" href="detail.html">
              {name}
            </a>
          </h6>
          <p className="small text-muted">${price}</p>
        </div>
      </div>
    )
}

const mapDispatchToProps = (dispatch)=>{
  return {
    addItemToCardAction:(id,qty)=>dispatch(addItemToCard(id,qty))
  }
}

export default connect(null,mapDispatchToProps)(SingleProduct)
