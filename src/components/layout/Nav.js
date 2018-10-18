import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = ({ branding }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">
      <h4 className="pt-2">
        <i className="fa fa-codepen" aria-hidden="true" />
        {branding}
      </h4>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav my-0 ml-auto">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">
            Home
            {' '}
            <span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/posts" className="nav-link">
            Blogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/users" className="nav-link">
            Users
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/comments" className="nav-link">
            Comments
          </NavLink>
        </li>
      </ul>
      {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form> */}
    </div>
  </nav>
);

export default Nav;
