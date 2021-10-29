import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import Text from "../TEXT";
import "./Header.scss";
function Header() {
     const navList = Text.navList;
     window.addEventListener("scroll", () => {
          const headerScroll = document.querySelector(".header__scroll");
          const bH = document.body.offsetHeight;
          const wY = window.scrollY;
          if (wY < 10) {
               const head = document.querySelector(".header");
               head.classList.add("active");
          } else {
               const head = document.querySelector(".header");
               head.classList.remove("active");
          }
          let W = (wY / bH) * 100;
          if (W > 80) {
               W = 100;
          }
          headerScroll.style.width = `${W}%`;
     });

     const handleClick = (e, title) => {
          window.scroll(0, 0);
          document.title = title;
     };
     const itemActived = document.querySelector(".header__list--item.active");
     const handleBackNav = () => {
          window.history.back();
          itemActived && itemActived.classList.remove("active");
     };

     return (
          <div className="header active">
               <span className="header__scroll"></span>
               <span onClick={handleBackNav} className="header__back">
                    <i className="fas fa-chevron-circle-left"></i>{" "}
                    <span>Quay lại</span>
               </span>

               <NavLink to="/mamxanh">
                    <h1 className="header__h1">MẦM XANH</h1>{" "}
                    <img
                         className="header__fixlogo"
                         src="https://doitinhnguyenmamxanh.000webhostapp.com/img/img/logomam.png"
                         alt="Logo"
                    />
               </NavLink>

               <ul className="header__list">
                    {navList.map((item, index) => (
                         <li key={item.id}>
                              <NavLink
                                   activeClassName="active1"
                                   to={item.id}
                                   onClick={(e) => handleClick(e, item.title)}
                                   className="header__list--item"
                              >
                                   {item.title}
                              </NavLink>
                         </li>
                    ))}
               </ul>
               <div className="header__bar">
                    <i className="fas fa-bars"></i>
               </div>
          </div>
     );
}
export default memo(Header);
