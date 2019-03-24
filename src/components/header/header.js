import React from "react";
import "./header.css";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <h1 className="header_caption">
          <Link to='/' className='main'>
            Star DB
        </Link>
        </h1>
        <div className="header_links">
          <span>
            <Link to="/people/">People</Link>
          </span>
          <span>
            <Link to="/planets/">Planets</Link>
          </span>
          <span>
            <Link to="/starships/">Starships</Link>
          </span>
          <span>
            <Link to="/login">Login</Link>
          </span>
          <span>
            <Link to="/secret">Secret</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
