import React from "react";
import footerCss from "./Footer.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { SiFacebook, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";

function Footer() {
  return (
    <footer className="footer footer-transparent">
      <Container className={footerCss.footer} fluid>
        <Row className="rows">
          <Col md={{ span: 1, offset: 2 }}>
            <img className={footerCss.icon} src={require("./imges/icon.png")}></img>
          </Col>
          <Col md={{ span: 1, offset: 0 }}>
            <h4>BrainRush</h4>
          </Col>
          <Col md={{ span: 3, offset: 1 }}>
            <span className="small">
              {" "}
              &copy;BrainRush, {new Date().getFullYear()}. all Rights Reserved.{" "}
            </span>
          </Col>
          <Col md={{ span: 3, offset: 0 }}>
            <SiFacebook /> <SiInstagram /> <SiLinkedin /> <SiTwitter />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
