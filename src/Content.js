import React from "react";
import contentCss from "./Content.module.css";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";

function Content() 
{
  const navigate = useNavigate();
  const navigateToSignUp = () => 
  {
    // navigate to /contacts
    navigate("/SignUp");
  };
  return (
    <main className={contentCss.main}>
      <figure className="position-relative">
        <img
          className={contentCss.img}
          src={require("./imges/1.jpg")}
          alt="Landing page image"
        ></img>
        <figcaption className={contentCss.figcaption}>
          Make your brain sharper <br></br> with this Brain Games!
          <br></br>
          <button className={contentCss.startbutton} onClick={navigateToSignUp}>
            Get Started!
          </button>
        </figcaption>
      </figure>
      <Container className={contentCss.webinfo} fluid>
        <Row className={contentCss.row}>
          <h2 className={contentCss.centerh2}>
            You know you've got to exercise your brain just like your muscles.{" "}
          </h2>
        </Row>
        <Row className={contentCss.row}>
          <Col md={{ span: 3, offset: 3 }}>
            <h4> About this website</h4>
            <Row className={contentCss.row}>
              {" "}
              We dedicated this website to change the view of the world about
              video games, and to help you train and develop your brain on a
              unique way that you dont face in your daily basis.{" "}
            </Row>
          </Col>
          <Col md={{ span: 3, offset: 1 }}>
            <h4> Who is it for?</h4>
            <Row className={contentCss.row}>
              Free Mathmatics games for adults and children, suitable for every
              age group from school kids to adults and even elderly people.
            </Row>
          </Col>
        </Row>
        <Row className={contentCss.row}>
          <Col md={{ span: 3, offset: 3 }}>
            <h4> Train the skills that matter to you most</h4>
            <Row className={contentCss.row}>
              {" "}
              Memory,Quick reflexes,Fast thinking and more. BrainRush offers you
              the best tools to target this skills.
            </Row>
          </Col>
          <Col md={{ span: 3, offset: 1 }}>
            <h4> Scientific studies , made fun</h4>
            <Row className={contentCss.row}>
              BrainRush took the best studies and turned it into a fun
              interactive games.
            </Row>
          </Col>
        </Row>
      </Container>

      <Container className={contentCss.botcontainerh1}>
        <h1>a Video of the games come here.</h1>
      </Container>
      <Container className={contentCss.botcontainerh1}>
        <h1>You heard enough! Lets get started.</h1>
      </Container>
      <Container className={contentCss.botcontainerh1}>
        <Button className={contentCss.loginbutton1} onClick={navigateToSignUp}>
          Get Started!
        </Button>
      </Container>

      <p className={contentCss.quote}>
        {" "}
        Some people say video games rot your brain, but i think they work
        different <br></br>
        muscles that maybe you don't normally use. <br></br>
        Ezra Koenig.
      </p>
    </main>
  );
}

export default Content;
