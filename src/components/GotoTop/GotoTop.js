import React from "react";
import "./GotoTop.scss";
export default function GotoTop() {
     window.onload = () => {
          window.addEventListener("scroll", () => {
               const topBtn = document.querySelector(".btn__top");
               if (window.scrollY > 200) {
                    topBtn.classList.add("show");
               } else {
                    topBtn.classList.remove("show");
               }
          });
     };
     return (
          <>
               <div onClick={() => window.scroll(0, 0)} className="btn__top">
                    <i className="fas fa-chevron-circle-up"></i>
               </div>
          </>
     );
}
