import React from "react";
import Activity from "../components/Activity/Activity";
import Button from "../components/Button/Button";
import IMG_LIST from "../components/LINK__IMG";

export default function ActivityContainer() {
     const onButtonClick = (e) => {
          const activityImg = document.querySelectorAll(".header__list--item");
          const itemActived = document.querySelector(".header__list--item.active");
          itemActived && itemActived.classList.remove("active");
          activityImg[activityImg.length - 2].classList.add("active");
          window.scroll(0, 0);
     };
     return (
          <div>
               <Activity
                    ActivityLIST={IMG_LIST.activityImg}
                    title="HOẠT ĐỘNG CHÍNH"
                    id="activity"
                    sub="Hoạt động hàng năm"
               />
               <Button
                    to="/Images"
                    text="Xem hình ảnh hoạt động"
                    onButtonClick={onButtonClick}
               />
               <div style={{ paddingBottom: 50 }}>
                    <Activity
                         ActivityLIST={IMG_LIST.activityClub}
                         title="SINH HOẠT ĐỘI"
                         id="activityClub"
                         sub="Kết nối yêu thương - Ươm mầm mơ ước"
                    />
               </div>
          </div>
     );
}
