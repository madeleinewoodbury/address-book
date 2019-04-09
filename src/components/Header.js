import React from "react";

const Header = () => {
  return (
    <navbar className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-2">
      <div className="container">
        <a href="/" className="navbar-brand">
          <i class="far fa-address-book" /> Address Book
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">
              <i className="fas fa-home" /> Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <i className="fas fa-user-plus" /> Add
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <i className="fas fa-question" /> About
            </a>
          </li>
        </ul>
      </div>
    </navbar>
  );
};

export default Header;
