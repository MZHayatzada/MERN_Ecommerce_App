import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Loginform from "./components/Loginform";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./components/Register";
import Footer from "./components/Footer";
import CartScreen from "./Views/CartScreen";
import HomeScreen from "./Views/HomeScreen";
import ShopScreen from "./Views/ShopScreen";
import SingleProductScreen from "./Views/SingleProductScreen";
function App() {
  return (
    <Router>
      <div className="page-holder">
        <Nav></Nav>
        <Route path="/login">
          <Loginform></Loginform>
        </Route>
        <Route path='/register'>
          <Register/>
        </Route>
        <Route path='/cart'>
          <CartScreen/>
        </Route>
        <Route exact path='/'>
          <HomeScreen/>
        </Route>
        <Route path='/shop'>
          <ShopScreen/>
        </Route>
        <Route  path={'/singleProduct/:id'}>
          <SingleProductScreen/>
        </Route>
         
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
