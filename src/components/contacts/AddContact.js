import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    street: "",
    city: "",
    zipcode: ""
  };

  // Update input value on change
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name, street, city, zipcode } = this.state;
    return (
      <div className="container">
        <div className="card mb-3">
          <div className="card-header">Add Contact</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Name"
                  name="name"
                  value={name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="street">Street</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Street Address"
                  name="street"
                  value={street}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter City"
                  name="city"
                  value={city}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="zipcode">Zipcode</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Zipcode"
                  name="zipcode"
                  value={zipcode}
                  onChange={this.onChange}
                />
              </div>
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
  }
}

export default AddContact;
