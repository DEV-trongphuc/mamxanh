import React from "react";
import Manager from "../components/Manager/Manager";
import IMG_LIST from "../components/LINK__IMG";
import { memo } from "react";
function InfoContain() {
     const BackBtnN = document.querySelector(".header__back.none");
     BackBtnN && BackBtnN.classList.remove("none");
     return (
          <div style={{ paddingTop: 20 }}>
               <Manager
                    Info={IMG_LIST.managerInfo}
                    title="BAN CHỦ NHIỆM"
                    sub="Nhiệm kì 2021-2022"
               />
          </div>
     );
}
export default memo(InfoContain);
