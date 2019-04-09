import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  render() {
    const { name, street, city, zipcode } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body bg-dark mb-3">
        <h4 className="text-white">
          {name}
          <i className="fas fa-sort-down ml-2" onClick={this.onShowClick} />
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
  contact: PropTypes.object.isRequired
};

export default Contact;
