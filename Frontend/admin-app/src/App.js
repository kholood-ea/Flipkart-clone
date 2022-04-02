import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Home from "../src/screens/Home";
import Signin from "../src/screens/Signin";
import Signup from "../src/screens/Signup";
import Products from "../src/screens/Products";
import Orders from "../src/screens/Orders";

import { isLoggedIn } from "./redux/actions/auth.actions";

import "./App.css";

import PrivateRoute from "../src/components/HOC/PrivateRoute";

function App() {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticate === true) {
      dispatch(isLoggedIn());
    }
  }, [auth.authenticate, dispatch]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
          </Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
