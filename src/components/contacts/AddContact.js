import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import uuid from "uuid";

class AddContact extends Component {
  state = {
    name: "",
    street: "",
    city: "",
    zipcode: ""
  };

  // Update input value on change
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    // Get the values form the state
    const { name, street, city, zipcode } = this.state;

    const newContact = {
      id: uuid(),
      name,
      street,
      city,
      zipcode
    };

    // Call the dispatch in the context
    dispatch({ type: "ADD_CONTACT", payload: newContact });

    // Clear the form and state
    this.setState({
      name: "",
      street: "",
      city: "",
      zipcode: ""
    });
  };

  render() {
    const { name, street, city, zipcode } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="container">
              <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <TextInputGroup
                      label="Name"
                      name="name"
                      placeholder="Enter Name"
                      value={name}
                      onChange={this.onChange}
                    />
                    <TextInputGroup
                      label="Street"
                      name="street"
                      placeholder="Enter Street Address"
                      value={street}
                      onChange={this.onChange}
                    />
                    <TextInputGroup
                      label="City"
                      name="city"
                      placeholder="Enter City"
                      value={city}
                      onChange={this.onChange}
                    />
                    <TextInputGroup
                      label="Zipcode"
                      name="zipcode"
                      placeholder="Enter Zipcode"
                      value={zipcode}
                      onChange={this.onChange}
                    />
                    <input
                      type="submit"
                      value="Add Contact"
                      className="btn btn-dark btn-block"
                    />
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
