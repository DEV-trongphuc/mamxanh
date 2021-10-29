import React from "react";
import Heading from "../Heading/Heading";
import { useEffect } from "react";
import "./Slider.scss";
import IMG_LIST from "../LINK__IMG";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let i = 0;
export default function Slider({ title, sub }) {
     const handleActive = () => {
          $(".slider__image").style.transform = `translateX(-${i}00%)`;
          const dot = $$(".dot__item");
          const dotActive = $(".dot__item.active");
          dotActive.classList.remove("active");
          dot[i].classList.add("active");
     };
     const handleNext = () => {
          i++;
          if (i > $$(".slider__item").length - 1) {
               i = 0;
          }
          handleActive();
     };
     const handlePrev = () => {
          i--;
          if (i < 0) {
               i = $$(".slider__item").length - 1;
          }
          handleActive();
     };
     useEffect(() => {
          const a = setInterval(() => {
               const a = document.querySelector(".next__btn");
               a.click();
          }, 10000);

          return () => {
               clearInterval(a);
          };
     }, []);

     return (
          <div id="slider">
               <img
                    className="slider__background"
                    src="https://github.com/dattrantiet/Images/blob/main/M%E1%BA%A7m%20Xanh/T%E1%BA%BFt%20Y%C3%AAu%20Th%C6%B0%C6%A1ng/tetyeuthuong/IMG_0215.JPG?raw=true"
                    alt="images"
               />
               <Heading sub={sub} title={title} />
               <div className="slider__simple">
                    <div className="slider__container">
                         <div className="slider__image">
                              {IMG_LIST.sliderImg.map((img, index) => (
                                   <img
                                        key={index}
                                        className="slider__item"
                                        src={img}
                                        alt="a"
                                   />
                              ))}
                         </div>
                         <ul className="slider__dots">
                              <li className="dot__item active"></li>
                              {IMG_LIST.sliderImg
                                   .slice(0, IMG_LIST.sliderImg.length - 1)
                                   .map((img, index) => (
                                        <li key={index} className="dot__item"></li>
                                   ))}
                         </ul>
                         <div className="slider__button">
                              <button
                                   onClick={() => handlePrev()}
                                   className="prev__btn"
                              >
                                   {"<"}
                              </button>
                              <button
                                   onClick={() => handleNext()}
                                   className="next__btn"
                              >
                                   {">"}
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     );
}
