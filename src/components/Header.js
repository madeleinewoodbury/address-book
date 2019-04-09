import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-2">
      <div className="container">
        <a href="/" className="navbar-brand">
          <i className="far fa-address-book" /> Address Book
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
    </nav>
  );
};

export default Header;
