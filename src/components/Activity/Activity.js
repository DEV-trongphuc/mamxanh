import React from "react";
import Heading from "../Heading/Heading";
import "./Activity.scss";
export default function Activity({ ActivityLIST, title, sub, id }) {
     console.log(title);
     return (
          <>
               <div id={id}>
                    <Heading sub={sub} title={title} />

                    <div className="ac__container">
                         {ActivityLIST.map((img, index) => {
                              return (
                                   <div className="ac__box">
                                        <div className="ac__box--img">
                                             <p className="ac__box--description">
                                                  {img.description}.
                                             </p>
                                             <img
                                                  className={
                                                       !img.description && "hide"
                                                  }
                                                  src={img.link}
                                                  alt="x"
                                             />
                                        </div>
                                        <h3 className="ac__box--title">
                                             {img.title}
                                        </h3>
                                   </div>
                              );
                         })}
                    </div>
               </div>
          </>
     );
}
