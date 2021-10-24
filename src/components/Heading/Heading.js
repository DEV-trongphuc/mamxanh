import React from "react";
import "./Heading.scss";
export default function Heading({ title, sub }) {
     return (
          <div className="heading-center">
               <div>
                    <h1 className="heading">
                         <span></span>
                         {title}
                    </h1>
               </div>
               <div className="sub">
                    {sub || "Kết nối yêu thương - Ươm mầm mơ ước"}
               </div>
          </div>
     );
}
