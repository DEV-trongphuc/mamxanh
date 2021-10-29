import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EventName from "../components/EventName/EventName";
import EventImages from "./EventImgComponents/Event1";

export default function ImgContain({ IMG_LIST }) {
     const num = 27;
     const allImgList = [
          ...IMG_LIST.Tetyeuthuong,
          ...IMG_LIST.tettrungthu,
          ...IMG_LIST.noel,
          ...IMG_LIST.MemoryImg,
          ...IMG_LIST.prom,
          ...IMG_LIST.tetthieunhi,
          ...IMG_LIST.aoam,
     ];
     return (
          <Router>
               <EventName />
               <Switch>
                    <Route exact path="/Images">
                         <EventImages
                              title="HÌNH ẢNH KỶ NIỆM"
                              renderImg={allImgList}
                              num={num}
                         />
                    </Route>
                    <Route exact path="/Images/tetyeuthuong">
                         <EventImages
                              title="TẾT YÊU THƯƠNG"
                              renderImg={IMG_LIST.Tetyeuthuong}
                         />
                    </Route>
                    <Route exact path="/Images/tuyentnv">
                         <EventImages
                              title="TUYỂN TÌNH NGUYỆN VIÊN"
                              renderImg={IMG_LIST.tuyentnv}
                         />
                    </Route>
                    <Route exact path="/Images/prom">
                         <EventImages title="PROM NGIHT" renderImg={IMG_LIST.prom} />
                    </Route>
                    <Route exact path="/Images/noel">
                         <EventImages
                              title="GIÁNG SINH ẤM ÁP"
                              renderImg={IMG_LIST.noel}
                         />
                    </Route>
                    <Route exact path="/Images/tetthieunhi">
                         <EventImages
                              title="TẾT THIẾU NHI"
                              renderImg={IMG_LIST.tetthieunhi}
                         />
                    </Route>
                    <Route exact path="/Images/tettrungthu">
                         <EventImages
                              title="TẾT TRUNG THU"
                              renderImg={IMG_LIST.tettrungthu}
                         />
                    </Route>
                    <Route exact path="/Images/aoam">
                         <EventImages
                              title="ÁO ẤM MÙA ĐÔNG"
                              renderImg={IMG_LIST.aoam}
                         />
                    </Route>
               </Switch>
          </Router>
     );
}
