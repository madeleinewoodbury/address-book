import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    street: "",
    city: "",
    zipcode: ""
  };
  render() {
    return (
      <div className="container">
        <div className="card mb-3">
          <div className="card-header">Add Contact</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Name"
                  name="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="street">Street</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Street Address"
                  name="street"
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter City"
                  name="city"
                />
              </div>
              <div className="form-group">
                <label htmlFor="zipcode">Zipcode</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Zipcode"
                  name="zipcode"
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
