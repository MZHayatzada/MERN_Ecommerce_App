import "./custom.css";
import "./style.default.css";
import "./style.default.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { addItemToCard } from "../redux/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Model = ({
  id,
  open,
  close,
  name,
  image,
  price,
  longDescription,
  addItemToCardAction,
}) => {
  const [readMore, setReadMore] = useState(false);
  const history = useHistory()
  const addToCartHandler = () => {
    addItemToCardAction(id,1);
    history.push({
      pathname: `/cart/id=${id}&qty=${1}`,
    });
  };
  if (!open) return null;
  const sub = longDescription.substr(0, 140);
  if (readMore) {
    longDescription = longDescription.substr(0, longDescription.length);
  }
  

  return ReactDOM.createPortal(
    <div className="overlay-style modal-content show" id="productView">
      <div className="modal-style modal-body">
        <div className="d-flex row">
          <div className="image col-md-6">
            <img className="bg-cover bg-center w-100" src={image} alt="" />
          </div>
          <div className="details col-md-6">
            <div className="close-btn">
              <FontAwesomeIcon
                icon={faTimes}
                className="btn-close-style"
                onClick={() => close()}
              >
                x
              </FontAwesomeIcon>
            </div>
            <div className="px-5">
              <h3>{name}</h3>
              <h4>${price}</h4>
              {readMore ? <p>{longDescription}</p> : <p>{sub}</p>}
              <button
                className="btn btn-primary"
                onClick={() => setReadMore(!readMore)}
              >
                Read More...
              </button>
            <div>
            <span className="small text-uppercase text-gray headings-font-family">
                Quantity
              </span>
              <select
              className="form-select w-25"
                value={parseInt(1)}
                onChange={(e) => addItemToCardAction(id, e.target.value)}
              >
                {[...Array(1).keys()].map((x) => {
                  return (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-sm-3 pl-sm-0">
                  <button
                    className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0 px-2"
                    onClick={() => addToCartHandler()}
                  >
                    Add to cart
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

const mapStateToProps = (state)=>{
  console.log(state);
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return { addItemToCardAction: (id, qty) => dispatch(addItemToCard(id, qty)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Model);
