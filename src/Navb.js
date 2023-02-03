import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navCss from "./Navb.module.css";

function Navb() 
{
  return (
    <Navbar collapseOnSelect expand="md" sticky="top" className={navCss.nav}>
      <Container className={navCss.containernav}>
        <Navbar.Brand href="http://localhost:3000">
          <img className={navCss.icon} src={require("./imges/icon.png")}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="games">
            <Nav.Link className={navCss.navLink} href="/Mathmatics">
            Mathmatics
            </Nav.Link>
            <Nav.Link className={navCss.navLink} href="/MemoryMatch">
              Memory Match
            </Nav.Link>
            <Nav.Link className={navCss.navLink} href="/QuickReflexes">
              Quick Reflexes
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link className={navCss.navLink} href="/LogIn">
              {" "}
              Login
            </Nav.Link>

            <Nav.Link className={navCss.navLink} href="/SignUp">
              {" "}
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
