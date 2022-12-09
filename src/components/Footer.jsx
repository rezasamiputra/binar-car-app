import React from "react";
import Logo from "../assets/img/logo.png";
import Insta from "../assets/img/icon_instagram.png";
import FaceBook from "../assets/img/icon_facebook.png";
import Twitch from "../assets/img/icon_twitch.png";
import Mail from "../assets/img/icon_mail.png";
import Twitter from "../assets/img/icon_twitter.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/footer.css";

const Foot = () => {
  return (
    <footer className="pt-5">
      <Row className="m-5">
        <Col lg={3} sm={12} className="pt-3">
          <ul className="p-0 fw-bold list-unstyled">
            <li className="mb-3 color-black">
              Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
            </li>
            <li className="mb-3 color-black">binarcarrental@gmail.com</li>
            <li className="mb-3 color-black">081-233-334-808</li>
          </ul>
        </Col>
        <Col lg={3} sm={12} className="pt-3">
          <ul className="p-0 list-unstyled menu">
            <li className="mb-3">
              <a href="/#ourServices">Our Services</a>
            </li>
            <li className="mb-3">
              <a href="/#whyUs">Why Us</a>
            </li>
            <li className="mb-3">
              <a href="/#testimonial">Testimonial</a>
            </li>
            <li className="mb-3">
              <a href="/#faq">FAQ</a>
            </li>
          </ul>
        </Col>
        <Col lg={3} sm={12} className="pt-3">
          <p>Connect With Us</p>
          <a href="http://facebook.com/">
            <img src={FaceBook} alt="facebook" />
          </a>

          <a href="http://instagram.com/">
            <img src={Insta} alt="instagram" />
          </a>
          <a href="http://twitter.com/">
            <img src={Twitter} alt="twitter" />
          </a>
          <a href="http://mail.com/">
            <img src={Mail} alt="Mail" />
          </a>
          <a href="http://twitch.com/">
            <img src={Twitch} alt="Twitch" />
          </a>
        </Col>
        <Col lg={3} sm={12} className="pt-3">
          <p>Copyright Binar 2022</p>
          <a href="logo">
            <img src={Logo} alt="logo" />
          </a>
        </Col>
      </Row>
    </footer>
  );
};

export default Foot;
