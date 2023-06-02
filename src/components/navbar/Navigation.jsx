import React, { useState } from "react";
import "../../styles/Navigation.css";
import {AiOutlineSearch} from 'react-icons/ai';
import {RxHamburgerMenu} from 'react-icons/rx';

const Navigation = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className= "shadow">
      <div className="nav container">
        <i
          className="bx bx-menu"
          id="menu-icon"
          onClick={() => {
            setMenuActive(!menuActive);
            setSearchActive(false);
          }}
        ><RxHamburgerMenu/></i>
        <a href="#" className="logo">
          JM<span>Seroy</span>
        </a>
        <ul className={`navbar ${menuActive ? "active" : ""}`}>
          <li>
            <a href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#motors">Contact</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#parts">Project</a>
          </li>
          <li>
            <a href="#blog">Our Blog</a>
          </li>
        </ul>
        <i
          className="bx bx-search"
          id="search-icon"
          onClick={() => {
            setSearchActive(!searchActive);
            setMenuActive(false);
          }}
        >< AiOutlineSearch /></i>
        <div className={`search-box container ${searchActive ? "active" : ""}`}>
          <input type="search" placeholder="Search here..." />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
