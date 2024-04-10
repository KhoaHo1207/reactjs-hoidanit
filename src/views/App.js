import "../App.css";
import ListToDo from "../Todos/ListToDo";
import "./App.scss";
import Navigation from "./Navigation/Navigation";
import logo from "./logo.svg";
import React from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "../Examples/Form";
import { publicUrl } from "../routes/Route";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          {publicUrl.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
        {/* <Form /> */}
        {/* <ListToDo /> */}
      </header>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
}

export default App;
