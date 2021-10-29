import React from "react";
// import IMG_LIST from "../../components/LINK__IMG";
import MemoryImg from "../../components/MemoryImg/MemoryImg";

export default function EventImages({
     title,
     sub = "Hình ảnh 2021",
     id = "id",
     renderImg,
     num,
}) {
     return (
          <>
               <MemoryImg
                    title={title}
                    sub={sub}
                    id={id}
                    MemoryImg={renderImg}
                    num={num}
               />
          </>
     );
}
