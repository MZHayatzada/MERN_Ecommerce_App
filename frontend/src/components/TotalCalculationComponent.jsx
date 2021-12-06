import { connect } from 'react-redux';
import React, { useEffect } from 'react'
import { calculateEachItemTotal, calculateTotal } from '../redux/actions';

const TotalCalculationComponent = ({cart1}) => {

    const {cart} = cart1
    let allPrices = cart.map((item)=>{
        return item.price * parseInt(item.qty)
    })

    function cal(){
    let totalPrice = allPrices.reduce((acc,curr)=>{
        return acc+curr
    },0)}

    useEffect(() => {
      cal()
    }, [cart1])
    

    return (
        <div className="col-lg-4">
        <div className="card border-0 rounded-0 p-lg-4 bg-light">
          <div className="card-body">
            <h5 className="text-uppercase mb-4">Cart total</h5>
            <ul className="list-unstyled mb-0">
              <li className="d-flex align-items-center justify-content-between">
                <strong className="text-uppercase small font-weight-bold">
                  Subtotal
                </strong>
                <span className="text-muted small">$ {totalPrice} </span>
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
    )
}

const mapStateToProps = (state)=>{
  return {
    cart1:state.cartItems
  }
}

export default connect(mapStateToProps)(TotalCalculationComponent);
