import React from "react";
import "./header.css";
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className="Nav">
      <div className="NavLeft"> E-COMMERCE </div>
      <div className="NavSearch">
        <input type="text" placeholder="Search"/>
      </div>

      

      <div className="NavRight">
        <ul className="NavList">   
         <li className="ListItems">
         <Link className="link"to ="/"  style={{textDecoration: 'none'}}> Home</Link>
         </li>
          <li className="ListItems"  ><Link className="link" to="/history" style={{textDecoration: 'none'}}>History</Link></li>
          <li className="ListItems"><Link className="link" to="/cart" style={{textDecoration: 'none'}}>Cart</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
