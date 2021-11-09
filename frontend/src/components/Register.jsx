import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Register = () => {
    const [user, setUser] = useState({
      username:'',
      email:'',
      password:''
    })
    const submitHandler = async (e)=>{
      e.preventDefault();
     try {
      if(user.username && user.email && user.password){
        await axios.post('/register',{user})
        setUser({
          username:'',
          email:'',
          password:''
        })
        alert('Registered Successfully')
      } else{
        alert('Please provide info')
      }
     } catch (error) {
       alert("There was an error")
     }
    }
    return (
        <div className=" container-sm form">
         <div className="heading">
         <h1>
            Register
          </h1>
         </div>
        <form onSubmit={submitHandler}>
        <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter username"
              value={user.username}
              onChange={
                (e)=>setUser({
                  ...user,username:e.target.value
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={user.email}
              onChange={(e)=>{
                setUser({
                  ...user,email:e.target.value
                })
              }}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={user.password}
              onChange={(e)=>{
                setUser({...user,password:e.target.value})
              }}
            />
          </div>
         
          <button type="submit" className="btn btn-primary mt-3">
            Register
          </button>
        </form>
        <Link className='navigation-link mt-4' to='/login'>
              <p className='mt-3'>Go Back</p>
        </Link>
      </div>
    )
}

export default Register
