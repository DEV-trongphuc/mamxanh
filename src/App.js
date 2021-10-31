import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import IMG_LIST from "./components/LINK__IMG";
import Remember from "./components/Remember/Remember";
import ActivityContainer from "./container/ActivityContainer";
import GotoTop from "./components/GotoTop/GotoTop";
import HostingContain from "./container/HostingContain";
import ImgContain from "./container/ImgContain";
import InfoContain from "./container/InfoContain";
import SliderContain from "./container/SliderContain";
import Youtube from "./components/Youtube/Youtube";
import Loading from "./components/Loading/Loading";
import { useState } from "react";
function App() {
     window.onbeforeunload = function (event) {};
     const [loading, setLoading] = useState(true);
     window.addEventListener("load", () => {
          setLoading(false);
     });
     console.log(
          "%c 🍔Web được xây dựng bằng React JS bởi | Huỳnh Trọng Phúc 🍓 TNV F12 🍓 ĐỘI TÌNH NGUYÊN MẦM XANH ️🏀️⚽",
          "color: green; padding:30px; font-size:18px; font-weight:700; line-height: 1.8",
     );
     return (
          <Router>
               <div className="App">
                    {loading && <Loading />}
                    <Header />
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
