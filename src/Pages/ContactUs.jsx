import * as React from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";

export default function ContactUs() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2gcgrrh",
        "template_g1qob8o",
        e.target,
        "Rytg1l1cHpbdaeXp6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <React.Fragment>
      <div class="container">
        <span class="big-circle"></span>
        <img src="img/shape.png" class="square" alt="" />
        <div class="form">
          <div class="contact-info">
            <h3 class="title">Contact Us</h3>
            <p class="text">Be the star of the show with our makeup</p>

            <div class="info">
              <div class="information">
                <img src="./img/location.png" class="icon" alt="" />
                <p>Shahadara, Delhi - 110093</p>
              </div>
              <div class="information">
                <img src="./img/email.png" class="icon" alt="" />
                <p>khushujangid12@gmail.com</p>
              </div>
              <div class="information">
                <img src="./img/phone.png" class="icon" alt="" />
                <p>9663846897</p>
              </div>
            </div>

            <div class="social-media">
              <p>Connect with us :</p>
              <div class="social-icons">
                <a href="https://www.instagram.com/_khushijangid.mua_/">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <span class="circle one"></span>
            <span class="circle two"></span>

            <form autocomplete="off" onSubmit={sendEmail}>
              <h3 class="title">Contact us</h3>
              <div class="input-container">
                <input
                  type="text"
                  name="name"
                  class="input"
                  placeholder="Username"
                />
              </div>
              <div class="input-container">
                <input
                  type="email"
                  name="email"
                  class="input"
                  placeholder="Email"
                />
              </div>
              <div class="input-container">
                <input
                  type="tel"
                  name="phone"
                  class="input"
                  placeholder="Phone"
                />
              </div>
              <div class="input-container textarea">
                <textarea
                  name="message"
                  class="input"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <input type="submit" value="Send" class="btn" />
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
