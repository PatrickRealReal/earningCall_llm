import {useEffect, useState} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {BrowserRouter as Router} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (window.scrollY > 0 && window.scrollY < 800) {
        setActiveLink('home')
      } else if (window.scrollY > 800 && window.scrollY < 1500) {
        setActiveLink('Data')
      } else if (window.scrollY > 1500 && window.scrollY < 2000) {
        setActiveLink('Experiment')
      } else if (window.scrollY > 2000) {
        setActiveLink('contact')
      }
    }


    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link href="#home"
                          className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                          onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#data"
                          className={activeLink === 'Data' ? 'active navbar-link' : 'navbar-link'}
                          onClick={() => onUpdateActiveLink('Data')}>Label Distribution</Nav.Link>
                <Nav.Link href="#projects"
                          className={activeLink === 'Experiment' ? 'active navbar-link' : 'navbar-link'}
                          onClick={() => onUpdateActiveLink('Experiment')}>Experiment</Nav.Link>
                <Nav.Link href="#contact"
                          className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
                          onClick={() => onUpdateActiveLink('Contact')}>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Router>
  )
}
