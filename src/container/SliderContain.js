import React from "react";
import MainSlider from "../components/MainSlider/MainSlider";
import { useEffect } from "react";
export default function SliderContain() {
     useEffect(() => {
          const BackBtn = document.querySelector(".header__back");
          BackBtn && BackBtn.classList.add("none");
          return () => {
               const BackBtnN = document.querySelector(".header__back.none");
               BackBtnN && BackBtnN.classList.remove("none");
          };
     }, []);

     return (
          <>
               <MainSlider title="ĐỘI TÌNH NGUYỆN MẦM XANH" />
          </>
     );
}
