import React from "react";
import Heading from "../Heading/Heading";
import "./Contact.scss";
export default function Contact({ title, sub }) {
     // <i className="fab fa-facebook-square"></i>
     //
     return (
          <div id="contact">
               <Heading
                    className="contactHeading "
                    sub={sub}
                    title={title}
                    color="#d0ffbf"
               />

               <div className="contact__container">
                    <div className="contact__content">
                         <div className="contact__box">
                              <div>
                                   <i className="fas fa-map-marker-alt contact__icon"></i>
                                   Địa chỉ
                              </div>
                              <p className="contact__description">
                                   56 Hoàng Diệu 2, Linh Chiểu, Thủ Đức, Thành phố Hồ
                                   Chí Minh
                              </p>
                         </div>
                         <div className="contact__box">
                              <div>
                                   <i className="fab fa-facebook-square contact__icon"></i>
                                   Facebook
                              </div>
                              <p className="contact__description">
                                   <a
                                        href="https://www.facebook.com/mamxanh
tinhnguyen
 "
                                   >
                                        https://www.facebook.com/mamxanhtinhnguyen
                                   </a>
                              </p>
                         </div>
                         <div className="contact__box">
                              <div>
                                   <i className="fas fa-envelope contact__icon "></i>
                                   Email
                              </div>

                              <p className="contact__description">
                                   mamxanhtn@buh.edu.vn
                              </p>
                         </div>
                    </div>

                    <div className="contact__face">
                         <iframe
                              title="a"
                              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmamxanhtinhnguyen&tabs=timeline&width=300&height=550&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=222371259900961"
                              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                         ></iframe>
                    </div>
                    <div className="contact__map">
                         <iframe
                              title="b"
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.389674494715!2d106.7611185147192!3d10.857937492266247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175279beba125cb%3A0xeb218345176a6a90!2zNTYgSG_DoG5nIERp4buHdSAyLCBMaW5oIENoaeG7g3UsIFRo4bunIMSQ4bupYywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1635094774660!5m2!1svi!2s"
                         ></iframe>
                    </div>
               </div>
          </div>
     );
}
