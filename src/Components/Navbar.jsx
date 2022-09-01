import React from "react";
import { Link } from "react-router-dom";
function Navbar1() {
  return (
    <>
      <div className="d-flex justify-content-evenly bg-danger p-3" >
        <Link to="/">
          <div className="text-black"  style={{textDecoration:"none"}}>Home</div>
        </Link>
        <Link to="/students">
          <div className="text-black"  style={{textDecoration:"none"}} >Students</div>
        </Link>
        <Link to="/contactus">
          <div className="text-black" style={{textDecoration:"none"}}>Contact Us</div>
        </Link>
      </div>
    </>
  );
}

export default Navbar1;