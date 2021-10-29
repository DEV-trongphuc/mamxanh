import React from "react";
import Heading from "../Heading/Heading";
import "./Hosting.scss";
export default function Hosting({ Info, title, sub }) {
     return (
          <div id="hosting">
               <Heading title={title} sub={sub} />
               <div className="host__container">
                    {Info.map((userInfo, index) => (
                         <div key={index} className="host__box">
                              <div className="host__img">
                                   <img src={userInfo.link} alt="aaaaa" />
                              </div>
                              <div className="host__content">
                                   <h4 className="host__name">{userInfo.name}</h4>
                                   <p className="host__position">
                                        {userInfo.position}
                                   </p>
                                   <a
                                        href={userInfo.linkFB}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="host__icon"
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
