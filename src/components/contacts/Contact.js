import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    // Contact info hidden as default
    showContactInfo: false
  };

  onShowClick = e => {
    // Toggle the showContactInfo value
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };

  render() {
    const { name, street, city, zipcode } = this.props.contact;
    const { showContactInfo } = this.state;
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
            onClick={this.onDeleteClick}
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Street: {street}</li>
            <li className="list-group-item">City: {city}</li>
            <li className="list-group-item">Zipcode: {zipcode}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
