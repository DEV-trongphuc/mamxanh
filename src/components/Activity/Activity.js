import React from "react";
import Heading from "../Heading/Heading";
import "./Activity.scss";
import { Link } from "react-router-dom";
export default function Activity({ ActivityLIST, title, sub, id }) {
     const onButtonClick = (e) => {
          const activityImg = document.querySelectorAll(".header__list--item");
          const itemActived = document.querySelector(".header__list--item.active");
          itemActived && itemActived.classList.remove("active");
          activityImg[activityImg.length - 2].classList.add("active");
          window.scroll(0, 0);
     };

     return (
          <>
               <div id={id}>
                    <Heading sub={sub} title={title} />

                    <div className="ac__container">
                         {ActivityLIST.map((img, index) => {
                              return (
                                   <Link
                                        onClick={onButtonClick}
                                        to={img.path}
                                        key={index}
                                        className="ac__box"
                                   >
                                        <div className="ac__box--img">
                                             <p className="ac__box--description">
                                                  {img.description}.
                                             </p>
                                             <img
                                                  className={
                                                       !img.description ? "hide" : ""
                                                  }
                                                  src={img.link}
                                                  alt="x"
                                             />
                                        </div>
                                        <h3 className="ac__box--title">
                                             {img.title}
                                        </h3>
                                   </Link>
                              );
                         })}
                    </div>
               </div>
          </>
     );
}
