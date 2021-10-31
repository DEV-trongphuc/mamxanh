import React, { useEffect } from "react";
import IMG_LIST from "../../components/LINK__IMG";
import Heading from "../Heading/Heading";
import "./MainSlider.scss";
export default function MainSlider({ title, sub }) {
     var id = 0;

     const slider = document.querySelector(".m-slider__container");
     let isDown = false;
     let startX;
     let scrollLeft;
     if (slider) {
          slider.addEventListener("mousedown", (e) => {
               isDown = true;
               const imgItem = document.querySelector(".m-slider__images");
               imgItem && (imgItem.style.transform = `translateX(0%)`);

               startX = e.pageX - slider.offsetLeft;
               scrollLeft = slider.scrollLeft;
               console.log("erreerre", scrollLeft);
          });

          slider.addEventListener("mouseleave", () => {
               isDown = false;
               slider.classList.remove("active");
          });

          slider.addEventListener("mouseup", () => {
               isDown = false;
               slider.classList.remove("active");
          });

          slider.addEventListener("mousemove", (e) => {
               if (!isDown) return; // stop the fn from running
               e.preventDefault();
               const x = e.pageX - slider.offsetLeft;
               const walk = (x - startX) * 2;
               slider.scrollLeft = scrollLeft - walk;

               console.log("sdsd", scrollLeft);
               console.log(slider.scrollLeft);
          });

          //   touchEvents

          slider.addEventListener("touchstart", (e) => {
               isDown = true;

               startX = e.pageX - slider.offsetLeft;
               scrollLeft = slider.scrollLeft;
          });

          slider.addEventListener("touchend", () => {
               isDown = false;
               slider.classList.remove("active");
          });

          slider.addEventListener("touchcancel", () => {
               isDown = false;
               slider.classList.remove("active");
          });

          slider.addEventListener("touchmove", (e) => {
               if (!isDown) return; // stop the fn from running
               e.preventDefault();
               const x = e.pageX - slider.offsetLeft;
               const walk = (x - startX) * 2;
               slider.scrollLeft = scrollLeft - walk;
          });
     }

     const handleImg = (id) => {
          let idm = id ? id : 0;

          const dotList = document.querySelectorAll(".m-slider__dot--item");
          const dotActive = document.querySelector(".m-slider__dot--item.active");
          if (idm || idm === 0) {
               dotActive && dotActive.classList.remove("active");
               dotList[idm] && dotList[idm].classList.add("active");
               const imgItem = document.querySelector(".m-slider__images");
               imgItem && (imgItem.style.transform = `translateX(-${idm}00%)`);
          }
     };

     var numItem = IMG_LIST.sliderImg.length;

     const handleNext = () => {
          id++;
          if (id > numItem - 1) {
               id = 0;
          }
          handleImg(id);
     };

     const handlePrev = (e) => {
          id -= 1;
          if (id < 0) {
               id = numItem - 1;
          }
          handleImg(id);
     };
     const handleDot = (index) => {
          id = index;
          handleImg(id);
     };
     return (
          <div id="main-slider">
               <Heading sub={sub} title={title} />
               <span className="slider__box__container">
                    <div className="m-slider__buttons">
                         <div>
                              <span
                                   className="m-slider__button"
                                   onClick={() => handlePrev()}
                              >
                                   <i className="fas fa-chevron-circle-left"></i>
                              </span>
                         </div>
                         <div>
                              <span
                                   className="m-slider__button"
                                   onClick={() => handleNext()}
                              >
                                   <i className="fas fa-chevron-circle-right"></i>
                              </span>
                         </div>
                    </div>
                    <div className="m-slider__dot">
                         {IMG_LIST.sliderImg.map((item, index) => (
                              <span
                                   onClick={() => handleDot(index)}
                                   className="m-slider__dot--item"
                                   key={index}
                              ></span>
                         ))}
                    </div>
                    <div className="m-slider__container">
                         <div className="m-slider__images">
                              {IMG_LIST.sliderImg.map((item, index) => (
                                   <img
                                        key={index}
                                        src={item}
                                        alt={index}
                                        className="m-slider__item"
                                   />
                              ))}
                         </div>
                    </div>
               </span>
          </div>
     );
}
