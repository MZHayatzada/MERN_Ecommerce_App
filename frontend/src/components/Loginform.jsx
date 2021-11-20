import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import {login_user} from '../redux/actions'
const Loginform = ({userLogin}) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [login, setLogin] = useState(false);

  const loginHandler =  (e) => {
    e.preventDefault()
    userLogin(user.email,user.password)
  };

  const history = useHistory();

  useEffect(() => {
    if (login) {
      history.push("/");
    }
  }, [history, login]);

  return (
    <div className="container-sm form">
      <div className="heading">
      <h1>Login</h1>
      </div>
      <form onSubmit={loginHandler}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={user.password}
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Login
        </button>
      </form>
      <Link to="/register"> <p className="mt-3">Create Account </p> </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch)=>{
  return {
    userLogin:(email,password)=>dispatch(login_user(email,password))
  }
}

const mapStateToProps = (state)=>{
  // console.log(state.user.data.username);
  let username = ''
  return {
    // username:state.user.data.username
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Loginform);
