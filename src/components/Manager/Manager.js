import React from "react";
import LoadImg from "../LoadImg/LoadImg";
import "./Manager.scss";
import { useEffect } from "react";
import { handleOnload, handleReLoad } from "../Functions";
export default function Manager({ Info, title, sub, team, none }) {
     useEffect(() => {
          return () => {
               const imgloading = document.querySelectorAll(".ma__img img");
               imgloading.forEach((item) => {
                    item.style.opacity = "0";
               });
               handleReLoad();
          };
     }, [Info]);
     return (
          <div id="hosting">
               <div className="ma__container">
                    {Info.map((userInfo, index) => (
                         <div key={index} className="ma__box">
                              <div className="ma__img">
                                   <img
                                        loading="lazy"
                                        onLoad={(e) => handleOnload(e, index)}
                                        src={userInfo.link}
                                        alt="aaaaa"
                                   />
                                   <LoadImg />
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
               <div className={none ? "ma__full__team none" : "ma__full__team"}>
                    <img src={team} alt="" />
               </div>
          </div>
     );
}
