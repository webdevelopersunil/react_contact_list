import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {props.header}
        </Link>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            {/* Home button for pointing user to Homepage directly */}
            <Link to="/" className="nav-link">
              <i className="fa fa-home"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            {/* Link for adding form for new contacts */}
            <Link className="nav-link" to="/contact/add">
              <i className="fa fa-plus"></i> Add
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  header: "Contact Manager"
};

export default Header;
