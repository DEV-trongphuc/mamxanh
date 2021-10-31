import React from "react";
import "./YearInfo.scss";
import Text from "../TEXT";
import { memo } from "react";
import { Link } from "react-router-dom";
function YearInfo() {
     var i = 0;
     const yearInfo = [...Text.Year];
     const handleNext = () => {
          i++;
          if (i === yearInfo.length - 1) {
               const nextYear = document.querySelector(".year__button--next");
               nextYear.classList.add("disable");
          }
          const linkYear = document.querySelectorAll(".year__link");
          const prevYearD = document.querySelector(".year__button--prev.disable");
          const sliderYear = document.querySelector(".year__slider");
          prevYearD && prevYearD.classList.remove("disable");
          linkYear[i] && linkYear[i].click();
          sliderYear && (sliderYear.style.transform = `translateX(-${i}00%)`);
     };
     const handlePrev = () => {
          i--;
          if (i === 0) {
               const prevYear = document.querySelector(".year__button--prev");
               prevYear.classList.add("disable");
          }
          const linkYear = document.querySelectorAll(".year__link");
          linkYear[i] && linkYear[i].click();
          const nextYearD = document.querySelector(".year__button--next.disable");
          nextYearD && nextYearD.classList.remove("disable");
          const sliderYear = document.querySelector(".year__slider");
          sliderYear.style.transform = `translateX(-${i}00%)`;
     };

     return (
          <>
               <div className="year__container">
                    <div className="year__button">
                         <span
                              onClick={handlePrev}
                              className="year__button--prev disable"
                         >
                              <i class="fas fa-caret-left"></i>
                         </span>
                         <span onClick={handleNext} className="year__button--next">
                              <i class="fas fa-caret-right"></i>
                         </span>
                    </div>
                    <div className="year__slider">
                         {yearInfo.map((item, index) => (
                              <div key={index} className="year__slider__item">
                                   <p>{item.year}</p>
                                   <Link
                                        className="year__link"
                                        to={item.link}
                                   ></Link>
                              </div>
                         ))}
                    </div>
               </div>
          </>
     );
}
export default memo(YearInfo);
