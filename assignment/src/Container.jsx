import React, { Component } from "react";

// components
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import Add from "./Add/Add";
import Table from "./Table/Table";

class Container extends Component {
  state = {
    tableData: [],
    tableHeaders: ["Id", "Name", "Education", "Hobbies", "Gender"]
  };
  handleSubmit = data => {
    this.setState({ tableData: [...this.state.tableData, data] });
  };
  render() {
    return (
      <div>
        <Header />
        {/**
            Sidebar component commented because respective components were adding inside of the sidebar component.
            Routing added to the side bar
        */}
        {/*<Sidebar />*/}
        <Add handleSubmit={this.handleSubmit} />
        <Table
          className="mt-3"
          tableData={this.state.tableData}
          tableHeaders={this.state.tableHeaders}
        />
        <Footer />
      </div>
    );
  }
}

export default Container;
