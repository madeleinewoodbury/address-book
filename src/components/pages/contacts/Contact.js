import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../../context";
import axios from "axios";

class Contact extends Component {
  state = {
    // Contact info hidden as default
    showContactInfo: false
  };

  onShowClick = e => {
    // Toggle the showContactInfo value
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = async (id, dispatch) => {
    // Make delete request
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  render() {
    const { id, name, street, city, zipcode } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body bg-dark mb-3">
              <h4 className="text-white">
                {name}
                <i
                  className="fas fa-sort-down ml-2"
                  style={{ cursor: "pointer" }}
                  onClick={this.onShowClick}
                />
                <i
                  className="fas fa-user-times"
                  style={{ cursor: "pointer", float: "right" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item lead">Street: {street}</li>
                  <li className="list-group-item lead">City: {city}</li>
                  <li className="list-group-item lead">Zipcode: {zipcode}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
