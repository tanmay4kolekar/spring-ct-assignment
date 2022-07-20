import React, { Component } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import Add from "../Add/Add";
import Table from "../Table/Table";
import "./Sidebar.css";
class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div className="row sidebar h-100">
        <BrowserRouter>
          <div className="col-sm-3 mt-5">
            <Link to="/">
              <span className="text-primary my-3"> Add</span>
            </Link>{" "}
            <br />{" "}
            <Link to="/view">
              <span className="text-primary my-3">View</span>
            </Link>
          </div>
          <Routes>
            <Route exact path="/" element={<Add />}></Route>
            <Route exact path="/view" element={<Table />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default Sidebar;
