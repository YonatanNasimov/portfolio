import React, { useEffect, useState } from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap';
import navIcon1 from "../../assets/img/nav-icon1.svg"
import gitHubIcon from "../../assets/img/iconmonstr-github-1.svg"
import "./navBar.css"

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scorlled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        // remove when the components is not in the dom.
        return () => window.removeEventListener("scroll", onScroll);

    }, [])

    const onUpdateActive = (_value) => {
        setActiveLink(_value)
    }
    return (
        <Navbar expand="lg" className={scorlled ? "scrolled" : "nav-phone"}>
            <Container>
                <Navbar.Brand className='logo' href="#home">
                    <h1>
                        PORTFOLIO
                    </h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home"
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActive('home')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link href="#skills"
                            className={activeLink === 'skils' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActive('skils')}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link href="#projects"
                            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActive('projects')}
                        >
                            Projects
                        </Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a target='_blank' href='https://www.linkedin.com/in/yonatan-nasimov-391681248/'>
                                <img src={navIcon1} alt='linkedin-icon' />
                            </a>
                            <a target='_blank' className='bg-light' href='https://github.com/YonatanNasimov'>
                                <img src={gitHubIcon} alt='github-icon' />
                            </a>
                        </div>
                        <button className='vvd'>
                            <span>
                                <a href='#projects'>
                                Let's Connect
                            </a></span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar