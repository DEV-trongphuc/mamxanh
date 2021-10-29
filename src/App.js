import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Remember from "./components/Remember/Remember";
import Text from "./components/TEXT";
import ActivityContainer from "./container/ActivityContainer";
import GotoTop from "./container/GotoTop";
import HostingContain from "./container/HostingContain";
import ImgContain from "./container/ImgContain";
import InfoContain from "./container/InfoContain";
import SliderContain from "./container/SliderContain";
import IMG_LIST from "./components/LINK__IMG";
import Loading from "./components/Loading/Loading";
import { useState } from "react";
import Youtube from "./Youtube/Youtube";
import $ from "jquery";
function App() {
     console.log(
          "%c 🍔Web được xây dựng bằng React JS bởi | Huỳnh Trọng Phúc 🍓 TNV F12 🍓 ĐỘI TÌNH NGUYÊN MẦM XANH ️🏀️⚽",
          "color: green; padding:30px; font-size:18px; font-weight:700; line-height: 1.8",
     );
     const [load, setload] = useState(true);

     document.addEventListener("DOMContentLoaded", function () {
          setload(false);
     });

     return (
          <Router>
               {load && <Loading />}
               <div className="App">
                    <Header navList={Text.navList} />
                    <Switch>
                         <Route exact path="/mamxanh">
                              <SliderContain />
                              <Youtube />
                              <ActivityContainer />
                         </Route>
                         <Route path="/Info" component={InfoContain} />
                         <Route path="/host" component={HostingContain} />
                         <Route path="/Images">
                              <ImgContain IMG_LIST={IMG_LIST} />
                         </Route>
                         <Route path="/contact"></Route>
                         <Route exact path=":sometring">
                              <SliderContain />
                              <ActivityContainer />
                         </Route>
                    </Switch>

                    <Contact title="LIÊN HỆ" sub="Trường đại học Ngân Hàng TP.HCM" />
                    <Remember />
                    <GotoTop />
               </div>
          </Router>
     );
}

export default App;
