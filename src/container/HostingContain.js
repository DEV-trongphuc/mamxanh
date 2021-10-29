import React from "react";
import Hosting from "../components/Hosting/Hosting";
import IMG_LIST from "../components/LINK__IMG";

export default function HostingContain() {
     console.log("Host Render");
     return (
          <div style={{ paddingTop: 20 }}>
               <Hosting
                    Info={IMG_LIST.hostInfo}
                    title="TẾT YÊU THƯƠNG"
                    sub="Chương trình 2021-2022"
               />
               <Hosting
                    Info={IMG_LIST.hostInfo}
                    title="TẾT THIẾU NHI"
                    sub="Chương trình 2021-2022"
               />
               <Hosting
                    Info={IMG_LIST.hostInfo}
                    title="TẾT TRUNG THU"
                    sub="Chương trình 2021-2022"
               />
          </div>
     );
}
