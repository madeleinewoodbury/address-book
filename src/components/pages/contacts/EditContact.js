import React, { Component } from "react";
import { Consumer } from "../../../context";
import TextInputGroup from "../../layout/TextInputGroup";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    street: "",
    city: "",
    zipcode: "",
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const contact = res.data;

    this.setState({
      name: contact.name,
      street: contact.address.street,
      city: contact.address.city,
      zipcode: contact.address.zipcode
    });
  }

  // Update input value on change
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    // Get the values form the state
    const { name, street, city, zipcode } = this.state;

    // Chech for errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (street === "") {
      this.setState({ errors: { street: "Street address is required" } });
      return;
    }

    if (city === "") {
      this.setState({ errors: { city: "City is required" } });
      return;
    }

    if (zipcode === "") {
      this.setState({ errors: { zipcode: "Zipcode is required" } });
      return;
    }

    // Clear the form and state
    this.setState({
      name: "",
      street: "",
      city: "",
      zipcode: "",
      errors: {}
    });

    // Redirect to home page
    this.props.history.push("/");
  };

  render() {
    const { name, street, city, zipcode, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="container mt-5">
              <div className="card mb-3">
                <div className="card-header">Edit Contact</div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <TextInputGroup
                      label="Name"
                      name="name"
                      placeholder="Enter Name"
                      value={name}
                      onChange={this.onChange}
                      error={errors.name}
                    />
                    <TextInputGroup
                      label="Street"
                      name="street"
                      placeholder="Enter Street Address"
                      value={street}
                      onChange={this.onChange}
                      error={errors.street}
                    />
                    <TextInputGroup
                      label="City"
                      name="city"
                      placeholder="Enter City"
                      value={city}
                      onChange={this.onChange}
                      error={errors.city}
                    />
                    <TextInputGroup
                      label="Zipcode"
                      name="zipcode"
                      placeholder="Enter Zipcode"
                      value={zipcode}
                      onChange={this.onChange}
                      error={errors.zipcode}
                    />
                    <input
                      type="submit"
                      value="Update Contact"
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

export default EditContact;
