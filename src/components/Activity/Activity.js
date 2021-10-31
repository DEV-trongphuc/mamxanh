import React from "react";
import Heading from "../Heading/Heading";
import "./Activity.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Activity({ ActivityLIST, title, sub, id }) {
     // muntiple render events //
     const [pathName, setPathName] = useState(0);
     useEffect(() => {
          var boxClick = document.querySelectorAll(".ac__fullbox");
          boxClick.forEach((item, index) => {
               item.addEventListener("click", () => {
                    setPathName(index);
               });
          });
     });
     const handleNextClick = () => {
          console.log(pathName);

          const links = document.querySelectorAll(".linked");
          links[pathName] && links[pathName].click();
          handleCancle();
     };
     const handleCancle = () => {
          const acQuesActive = document.querySelector(".ac__ques.active");
          acQuesActive && acQuesActive.classList.remove("active");
          const acModal = document.querySelector(".ac__modal.active");
          acModal && acModal.classList.remove("active");
     };
     // init(Closer);

     useEffect(() => {
          return () => {
               window.scroll(0, 0);
          };
     }, []);

     const onButtonClick = (index, img) => {
          const acModal = document.querySelector(".ac__modal");
          const acQues = document.querySelector(".ac__ques");
          const activityImg = document.querySelectorAll(".header__list--item");
          const itemActived = document.querySelector(".header__list--item.active");
          const nextTitle = document.querySelector(".ac__next__title");
          nextTitle && (nextTitle.innerText = `Xem hình ảnh ${img.title}`);
          acModal && acModal.classList.add("active");
          acQues && acQues.classList.add("active");
          itemActived && itemActived.classList.remove("active");
          activityImg[activityImg.length - 2].classList.add("active");
     };

     return (
          <>
               <div id={id}>
                    <Heading sub={sub} title={title} />

                    <div className="ac__container">
                         {ActivityLIST.map((img, index) => {
                              return (
                                   <>
                                        <div key={index} className="ac__fullbox">
                                             <div className="ac__box">
                                                  <Link
                                                       className="linked"
                                                       to={img.path}
                                                  ></Link>
                                                  <div className="ac__box--img">
                                                       <p className="ac__box--description">
                                                            {img.description}.
                                                       </p>
                                                       <img src={img.link} alt="x" />
                                                  </div>

                                                  <p
                                                       onClick={() =>
                                                            onButtonClick(index, img)
                                                       }
                                                       className="ac__box--title"
                                                  >
                                                       {img.title}
                                                  </p>
                                             </div>
                                        </div>
                                   </>
                              );
                         })}
                    </div>
                    <div className="ac__modal"></div>
                    <div className="ac__ques ">
                         <div className="ac__ques__container">
                              <p className="ac__next__title">
                                   Chuyển sang xem hình ảnh
                              </p>
                              <div className="ac__ques__btns">
                                   <button
                                        onClick={handleNextClick}
                                        className="ac__ques__btn ok"
                                   >
                                        Xem ảnh
                                   </button>
                                   <button
                                        onClick={handleCancle}
                                        className="ac__ques__btn cancle"
                                   >
                                        Ở lại
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}
