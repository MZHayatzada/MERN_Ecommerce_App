import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
const Loginform = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [login, setLogin] = useState(false);

  const loginHandler = async (e) => {
    e.preventDefault();
   try {
    const login = await axios.post("/login", { user });
    const { data } = login;
    if (data.username) {
      setLogin(true);
    }
   } catch (error) {
     alert('Wrong email or password')
   }
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
      <Link to="/register"> <p className="mt-3">Create Account</p> </Link>
    </div>
  );
};

export default Loginform;
