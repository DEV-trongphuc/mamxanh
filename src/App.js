import "./App.scss";
import Activity from "./components/Activity/Activity";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import IMG_LIST from "./components/LINK__IMG";
import Manager from "./components/Manager/Manager";
import MemoryImg from "./components/MemoryImg/MemoryImg";
import Remember from "./components/Remember/Remember";
import Slider from "./components/Slider/Slider";
import Text from "./components/TEXT";

function App() {
     window.addEventListener("scroll", () => {
          const topBtn = document.querySelector(".btn__top");
          if (window.scrollY > 200) {
               topBtn.classList.add("show");
          } else {
               topBtn.classList.remove("show");
          }
     });
     return (
          <div className="App">
               <Header navList={Text.navList} />
               <Slider title="ĐỘI TÌNH NGUYỆN MẦM XANH" />
               <Activity
                    ActivityLIST={IMG_LIST.activityImg}
                    title="HOẠT ĐỘNG CHÍNH"
                    id="activity"
               />
               <Activity
                    ActivityLIST={IMG_LIST.activityClub}
                    title="CÁC HOẠT ĐỘNG SINH HOẠT ĐỘI"
                    id="activityClub"
               />
               <Manager
                    Info={IMG_LIST.managerInfo}
                    title="BAN CHỦ NHIỆM"
                    sub="Nhiệm kì 2021-2022"
               />
               <MemoryImg
                    title="HÌNH ẢNH KỶ NIỆM"
                    sub="Hình ảnh"
                    id="memoryImg"
                    MemoryImg={IMG_LIST.MemoryImg}
               />
               <Contact title="LIÊN HỆ" sub="Trường đại học Ngân Hàng TP.HCM" />
               <Remember />
               <div onClick={() => window.scroll(0, 0)} className="btn__top">
                    <i class="fas fa-chevron-circle-up"></i>
               </div>
          </div>
     );
}

export default App;
