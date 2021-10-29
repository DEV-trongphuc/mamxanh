import React from "react";
import Heading from "../Heading/Heading";
import "./Manager.scss";
export default function Manager({ Info, title, sub }) {
     console.log("Mana Render");
     return (
          <div id="hosting">
               <Heading title={title} sub={sub} />
               <div className="ma__container">
                    {Info.map((userInfo, index) => (
                         <div key={index} className="ma__box">
                              <div className="ma__img">
                                   <img src={userInfo.link} alt="aaaaa" />
                              </div>
                              <div className="ma__content">
                                   <h4 className="ma__name">{userInfo.name}</h4>
                                   <p className="ma__position">
                                        {userInfo.position}
                                   </p>
                                   <a
                                        href={userInfo.linkFB}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="ma__icon"
                                   >
                                        <i className="fab fa-facebook"></i>
                                   </a>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
}
