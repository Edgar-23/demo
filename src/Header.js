import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="head_logo"
          src="https://media.istockphoto.com/vectors/orange-icon-vector-sign-and-symbol-isolated-on-white-background-logo-vector-id1023035174?s=170x170"
          alt=""
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className=" header_nav">
        <Link to="/login">
          <div className="header_option">
            <span className="header_option1">Hello</span>
            <span className="header_option2">Sign In</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_option1">orders</span>
          <span className="header_option2">& Policies</span>
        </div>
        <div className="header_option">
          <span className="header_option1">Your</span>
          <span className="header_option2">Punch</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon classname="header_shopping basket" />
            <span className="header_option2  header_basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
