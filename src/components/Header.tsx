import React from 'react';
import { ReactComponent as CartLogo } from '../img/cart.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="hero_area">
    <div className="bg-box">
      <img src="./img/hero-bg.jpg" alt=""/>
    </div>
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="/">
            <span>
              Feane
            </span>
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mx-auto ">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="menu.html">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="book.html">Book Table</a>
              </li>
            </ul>
            <div className="user_option">
            <a href="" className="user_link">
            <FontAwesomeIcon icon={faUser} />
                
              </a>

              <a className="cart_link cartLogo" href="#">
                <CartLogo width="20px" height="20px"  />
              </a>

              <form className="form-inline">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                <FontAwesomeIcon icon={faSearch} />

                </button>
              </form>
              <a href="" className="order_online">
                Order Online
              </a>
              </div>
          </div>
        </nav>
      </div>
    </header>
    </div>
    );
};

export default Header;