import React from "react";
import Heading from "../Heading/Heading";
import "./MemoryImg.scss";
export default function MemoryImg({ title, sub, id, MemoryImg }) {
     return (
          <div id={id}>
               <Heading sub={sub} id={id} title={title} />
               <div className="me__container">
                    {MemoryImg.map((item, index) => (
                         <div className="me__box">
                              <img src={item.link} alt="a" />
                         </div>
                    ))}
               </div>
          </div>
     );
}
