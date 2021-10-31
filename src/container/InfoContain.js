import React from "react";
import Manager from "../components/Manager/Manager";
import IMG_LIST from "../components/LINK__IMG";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Heading from "../components/Heading/Heading";
import YearInfo from "../components/YearInfo/YearInfo";
export default function InfoContain() {
     return (
          <Router>
               <div className="info__container" style={{ paddingTop: 70 }}>
                    <Heading title="BAN CHỦ NHIỆM" />
                    <YearInfo />
                    <Switch>
                         <Route exact path="/info">
                              <Manager none={true} Info={IMG_LIST.managerInfo} />
                         </Route>
                         <Route exact path="/info/f12">
                              <Manager
                                   team={IMG_LIST.team[0].t2020}
                                   Info={IMG_LIST.managerInfoF12}
                              />
                         </Route>
                         <Route exact path="/info/f11">
                              <Manager Info={IMG_LIST.managerInfoF11} />
                         </Route>
                    </Switch>
               </div>
          </Router>
     );
}
