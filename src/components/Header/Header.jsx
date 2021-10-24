import React from "react";
import "./Header.scss";

export default function Header({ navList }) {
     const handleNav = () => {
          const headerList = document.querySelector(".header__list");
          headerList.classList.toggle("active");
     };
     const handleClick = (e, index) => {
          const itemActived = document.querySelector(".header__list--item.active");
          itemActived && itemActived.classList.remove("active");
          e.target.classList.add("active");
     };
     return (
          <div id="header">
               <ul className="header__list">
                    <li className="header__list--logo">
                         <img
                              src="https://doitinhnguyenmamxanh.000webhostapp.com/img/img/logomam.png"
                              alt="Logo"
                         />
                    </li>
                    {navList.map((item, index) => (
                         <li key={item.id}>
                              <a
                                   onClick={(e) => handleClick(e)}
                                   className="header__list--item"
                                   href={item.id}
                              >
                                   {item.title}
                              </a>
                         </li>
                    ))}
               </ul>
               <div onClick={handleNav} className="header__bar">
                    <i class="fas fa-bars"></i>
               </div>
          </div>
     );
}
