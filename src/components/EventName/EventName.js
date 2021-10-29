import React from "react";
import { Link } from "react-router-dom";
import "./EventName.scss";
import Text from "../TEXT";
export default function EventName() {
     return (
          <div>
               <div className="e__event">
                    {Text.event.map((e) => (
                         <Link
                              to={e.id}
                              onClick={() => (document.title = e.title)}
                              key={e.id}
                              className="e__event__container"
                         >
                              <Link to={e.id} className="e__event-name">
                                   {e.title}
                              </Link>
                         </Link>
                    ))}
               </div>
          </div>
     );
}
