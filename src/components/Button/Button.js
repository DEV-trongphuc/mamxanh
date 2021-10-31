import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";
export default function Button({ to, text, onButtonClick }) {
     const handleShow = (e) => {
          if (onButtonClick) {
               onButtonClick(e);
          }
     };
     return (
          <div className="show__more">
               <Link
                    to={to}
                    className="show__more--btn"
                    onClick={(e) => handleShow(e)}
               >
                    {text}
               </Link>
          </div>
     );
}
