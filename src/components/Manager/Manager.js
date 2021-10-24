import React from "react";
import Heading from "../Heading/Heading";
import "./Manager.scss";
export default function Manager({ Info, title, sub }) {
     return (
          <div id="manager">
               <Heading title={title} sub={sub} />
               <div className="ma__container">
                    {Info.map((userInfo, index) => (
                         <div className="ma__box">
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
                                        className="ma__icon"
                                   >
                                        <i class="fab fa-facebook"></i>
                                   </a>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
}
