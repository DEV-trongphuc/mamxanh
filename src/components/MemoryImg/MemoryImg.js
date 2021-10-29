import React, { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import "./MemoryImg.scss";
export default function MemoryImg({ title, sub, id, MemoryImg, num }) {
     var i = 0;
     const [numImg, setNumImg] = useState(num || 9);
     useEffect(() => {
          setNumImg(num || 9);
          const moreBtn = document.querySelector(".show__more--btn");
          moreBtn.innerText = "Xem thêm ảnh";
     }, [num]);
     const newMemoryImg = [...MemoryImg].reverse();
     const EventImg = newMemoryImg.splice(0, numImg);

     const handleShowMore = () => {
          setNumImg(numImg + 9);
          const moreBtn = document.querySelector(".show__more--btn");
          if (newMemoryImg.length === 0) {
               moreBtn.innerText = "Hết rồi kiếm hình đi gòi up !!!";
          }
     };

     const handleNextImg = () => {
          i++;
          if (i >= EventImg.length - 1) {
               i = 0;
          }
          const imgShow = document.querySelector(".me__full--show-item");
          imgShow && imgShow.setAttribute("src", EventImg[i].link);
     };
     const handlePrevImg = () => {
          i--;
          if (i <= 0) {
               i = EventImg.length - 1;
          }
          const imgShow = document.querySelector(".me__full--show-item");
          imgShow && imgShow.setAttribute("src", EventImg[i].link);
     };
     const handleImageClose = () => {
          const showContainer = document.querySelector(".me__full--show");
          showContainer && (showContainer.style.display = "none");
     };
     const handleImageClick = (item, index) => {
          const imgShow = document.querySelector(".me__full--show-item");
          const showContainer = document.querySelector(".me__full--show");
          imgShow.setAttribute("src", item.link);
          showContainer.style.display = "flex";
          i = index;
     };
     const keyDown = (e) => {
          e.preventDefault();
          switch (e.keyCode) {
               case 39:
                    handleNextImg();
                    break;
               case 40:
                    handleNextImg();
                    break;

               case 37:
                    handlePrevImg();
                    break;
               case 38:
                    handlePrevImg();
                    break;
               case 27:
                    handleImageClose();
                    break;
               default:
                    break;
          }
     };
     useEffect(() => {
          window.addEventListener("keydown", (e) => keyDown(e));
          return () => {
               window.removeEventListener("keydown", (e) => keyDown(e));
          };
     });
     return (
          <div id={id} className="me__full">
               <Heading sub={sub} id={id} title={title} />

               <div className="me__container">
                    {EventImg.map((item, index) => (
                         <div
                              key={index}
                              onClick={(e) => handleImageClick(item, index)}
                              className="me__box"
                         >
                              <img
                                   loading="lazy"
                                   src={item.link}
                                   alt="Lỗi link ha gì goy coi hình khác đi"
                              />
                         </div>
                    ))}
               </div>
               <div className="show__more">
                    <button
                         className="show__more--btn"
                         onClick={() => handleShowMore()}
                    >
                         Xem thêm ảnh
                    </button>
               </div>

               {/* SHOW IMG ON CLICK AND NEXT || PREV */}
               <div className="me__full--show">
                    <div
                         onClick={(e) => handleImageClose(e)}
                         className="me__full--overlay"
                    ></div>
                    <spam
                         onClick={(e) => handleImageClose(e)}
                         className="me__full--close"
                    >
                         <i className="fas fa-times-circle"></i>
                    </spam>

                    <img className="me__full--show-item" src="" alt="a" />
                    <button onClick={handlePrevImg} className="prev__img">
                         <i className="fas fa-chevron-circle-left"></i>
                    </button>
                    <button
                         // onKeyDown={(e) => handleKeyDown(e)}
                         onClick={handleNextImg}
                         className="next__img"
                    >
                         <i className="fas fa-chevron-circle-right"></i>
                    </button>
               </div>
          </div>
     );
}
