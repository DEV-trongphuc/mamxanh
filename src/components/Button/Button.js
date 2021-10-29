import React from "react";
import { Link } from "react-router-dom";
export default function Button({ text, onButtonClick }) {
     const handleShow = (e) => {
          if (onButtonClick) {
               onButtonClick(e);
          }
     };
     return (
          <div className="show__more">
               <Link
                    to="/Images"
                    className="show__more--btn"
                    onClick={(e) => handleShow(e)}
               >
                    {text}
               </Link>
          </div>
     );
}
