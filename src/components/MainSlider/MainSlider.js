import React, { useEffect, useRef } from "react";
import IMG_LIST from "../../components/LINK__IMG";
import Heading from "../Heading/Heading";
import "./MainSlider.scss";
export default function MainSlider({ title, sub }) {
     let autoSlider = useRef();
     const autoNext = () => {
          autoSlider.current = setInterval(() => {
               handleNext();
          }, 10000);
     };
     autoNext();
     var id = 0;

     const handleImg = (id) => {
          let idm = id ? id : 0;
          const imgItem = document.querySelector(".m-slider__images");
          const dotList = document.querySelectorAll(".m-slider__dot--item");
          const dotActive = document.querySelector(".m-slider__dot--item.active");
          if (idm || idm === 0) {
               dotActive && dotActive.classList.remove("active");
               dotList[idm] && dotList[idm].classList.add("active");
               imgItem && (imgItem.style.transform = `translateX(-${idm}00%)`);
          }
     };

     var numItem = IMG_LIST.sliderImg.length;

     // let auto =
     // setInterval(() => {
     //      id++;
     //      if (id > imgLength.length - 1) {
     //           id = 0;
     //      }
     //      handleImg(id);
     // }, 4000);
     const handleNext = () => {
          id++;
          if (id > numItem - 1) {
               id = 0;
          }
          handleImg(id);
     };
     useEffect(() => {
          return () => {
               clearInterval(autoSlider.current);
               clearInterval(autoNext);
          };
     });
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
               {/* <div className="slider__background">
                    <img
                         src="https://github.com/dattrantiet/Images/blob/main/M%E1%BA%A7m%20Xanh/T%E1%BA%BFt%20Y%C3%AAu%20Th%C6%B0%C6%A1ng/tetyeuthuong/IMG_0215.JPG?raw=true"
                         alt="images"
                    />
               </div> */}

               <Heading sub={sub} title={title} />
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
               </div>
          </div>
     );
}
