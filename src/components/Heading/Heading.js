import React from "react";
import "./Heading.scss";
export default function Heading({ title, sub, color }) {
     return (
          <div className="heading-center">
               <div>
                    <h2
                         style={color ? { color: `${color}` } : {}}
                         className="heading"
                    >
                         <span
                              style={color ? { backgroundColor: `${color}` } : {}}
                         ></span>
                         {title}
                    </h2>
               </div>
               <div className="sub" style={color ? { color: `${color}` } : {}}>
                    {sub}
               </div>
          </div>
     );
}
