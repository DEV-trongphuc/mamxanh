import React from "react";
import { NavLink } from "react-router-dom";
import "./EventName.scss";
import Text from "../TEXT";
export default function EventName() {
     return (
          <div>
               <div className="e__event">
                    {Text.event.map((e) => (
                         <NavLink
                              to={e.id}
                              onClick={() => (document.title = e.title)}
                              key={e.id}
                              className="e__event__container"
                              exact
                              activeClassName="activeEvent"
                         >
                              {/* <NavLink to={e.id} className="e__event-name"> */}
                              {e.title}
                              {/* </NavLink> */}
                         </NavLink>
                    ))}
               </div>
          </div>
     );
}
