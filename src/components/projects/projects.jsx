import React from 'react'
import { projectsArr } from "../../data.js"
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import colorSharp2 from "../../assets/img/color-sharp2.png"
import ProjectCard from './projectCard.jsx'
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import "./projects.css"
import Contact from '../contact/contact.jsx'
import About from '../about/about.jsx'

const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <Tab.Container id='projects-tabs' defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Contact</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Experience</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <h2>Projects List:</h2>
                        <p>Here are examples of projects I've built that showcase my knowledge</p>
                        <Row>
                          {
                            projectsArr.map((project) => {
                              return (
                                <ProjectCard
                                  key={project.id}
                                  project={project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Contact />
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <About />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img alt='background' src={colorSharp2} className='background-image-right' />
    </section>
  )
}

export default Projects