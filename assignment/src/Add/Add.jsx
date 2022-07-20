import React, { Component } from "react";
import "./Add.css";
class Add extends Component {
  state = {
    name: "",
    educationOptions: ["FY", "SY", "TY"],
    hobbiesOptions1: ["Cricket", "Football", "Tennis", "Cards"],
    education: "FY",
    hobbies: [],
    gender: "",
    isError: false,
    errorText: ""
  };

  actionEducationChange = event => {
    this.setState({ education: event.target.value });
  };

  actionNameChange = event => {
    this.setState({ name: event.target.value });
  };

  actionChangeHobbies = event => {
    console.log("🚀 ~ file: Add.jsx ~ line 27 ~ Add ~ event", event);
    let newHobbies = null;
    let isIncluded = this.state.hobbies.includes(event);
    if (isIncluded) {
      newHobbies = this.state.hobbies.filter(hobby => hobby !== event);
    } else {
      newHobbies = [...this.state.hobbies, event];
    }
    this.setState({ hobbies: newHobbies });
  };

  actionGenderChange = gender => {
    this.setState({ gender: gender });
  };

  actionHandleSubmit = () => {
    if (this.state.name === "") {
      this.setState({ isError: true, errorText: "Please Enter Name" });
    } else if (this.state.hobbies.length === 0) {
      this.setState({ isError: true, errorText: "Please Select Your Hobby" });
    } else if (this.state.gender === "") {
      this.setState({ isError: true, errorText: "Please Select Gender" });
    } else {
      // success send data to top
      let sendData = {
        name: this.state.name,
        education: this.state.education,
        hobbies: this.state.hobbies,
        gender: this.state.gender
      };
      this.props.handleSubmit(sendData);
      this.clearState();
    }

    setTimeout(() => {
      this.setState({ isError: false, errorText: "" });
    }, 2000);
  };
  clearState = () => {
    this.setState({
      name: "",
      education: "FY",
      hobbies: [],
      gender: ""
    });
  };

  render() {
    return (
      <div className="form-container d-flex justify-content-center">
        <div className="form-group">
          <div className="inputs">
            Name:
            <input
              className="mx-2"
              type="text"
              value={this.state.name}
              onChange={this.actionNameChange}
            />
          </div>{" "}
          <div className="inputs">
            Select Your Education:
            <select className="mx-2" onChange={this.actionEducationChange}>
              {this.state.educationOptions.map((option, index) => (
                <option key={index} selected={this.state.education === option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="inputs">
            Select Hobbies:
            {this.state.hobbiesOptions1.map((hobby, index) => {
              return (
                <div key={"d" + index}>
                  <input
                    type="checkbox"
                    key={index}
                    onChange={() => this.actionChangeHobbies(hobby)}
                    name={hobby}
                    value={hobby}
                    checked={this.state.hobbies.includes(hobby)}
                  />
                  <label className="mx-2" key={"l" + index}>
                    {hobby}
                  </label>{" "}
                </div>
              );
            })}
          </div>
          <div className="inputs">
            Select your gender:
            <input
              className="mx-2"
              type="radio"
              value="Male"
              name="gender"
              checked={this.state.gender === "Male"}
              onChange={() => this.actionGenderChange("Male")}
            />
            Male
            <input
              className="mx-2"
              type="radio"
              value="Female"
              name="gender"
              checked={this.state.gender === "Female"}
              onChange={() => this.actionGenderChange("Female")}
            />
            Female
          </div>
          <div className="inputs">
            <div className="row">
              <div
                className="btn btn-sm btn-primary"
                onClick={this.actionHandleSubmit}
              >
                Submit
              </div>
            </div>
          </div>
          <div className="mt-3">
            {this.state.isError && (
              <span className="text-danger">{this.state.errorText}</span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Add;
