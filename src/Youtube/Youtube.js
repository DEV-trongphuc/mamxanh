import React from "react";
import "./Youtube.scss";
export default function Youtube() {
     return (
          <div id="youtube">
               <div className="youtube">
                    <img
                         className="youtube_img1"
                         src="https://github.com/dattrantiet/Images/blob/main/M%E1%BA%A7m%20Xanh/M%E1%BA%A6M%20XANH%20(LOGO)%20TRON%20NHO.png?raw=true"
                         alt="a"
                    />
                    <img
                         className="youtube_img2"
                         src="https://github.com/dattrantiet/Images/blob/main/M%E1%BA%A7m%20Xanh/M%E1%BA%A6M%20XANH%20(LOGO)%20TRON%20NHO.png?raw=true"
                         alt="a"
                    />
                    <iframe
                         src="https://www.youtube.com/embed/OEI7_qXwtiU"
                         title="YouTube video player"
                         frameborder="0"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         allowfullscreen
                    ></iframe>
               </div>
          </div>
     );
}
