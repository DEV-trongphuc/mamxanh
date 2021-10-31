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
          const navMobile = document.querySelector(".header__list");
          const navBar = document.querySelector(".header__bar");
          const navBarClose = document.querySelector(".header__barclose");
          window.scroll(0, 0);
          document.title = title;
          navMobile.classList.toggle("active1");
          navBar.classList.remove("active1");
          navBarClose.classList.toggle("active1");
     };
     const handleBackNav = () => {
          window.history.back();
     };
     const handleNav = (e) => {
          const navMobile = document.querySelector(".header__list");
          const navBar = document.querySelector(".header__bar");
          const navBarClose = document.querySelector(".header__barclose");
          navBar.classList.toggle("active1");
          navBarClose.classList.toggle("active1");
          navMobile.classList.toggle("active1");
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

               <ul className="header__list ">
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
               <div onClick={(e) => handleNav(e)} className="header__bar">
                    <i className="fas fa-bars"></i>
               </div>
               <div className="header__barclose active1">
                    <i class="fas fa-times"></i>
               </div>
          </div>
     );
}
export default memo(Header);
