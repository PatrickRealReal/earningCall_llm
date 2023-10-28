import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ml_model from "../assets/img/performance_ml_model.png";

export const Projects = () => {

  const projects = [
    {
      imgUrl: ml_model,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Experiment</h2>
            <p>Performance of different machine learning models, where the results are av- eraged over 5-fold cross-validation.</p>
            <Row>
              {
                projects.map((project, index) => (
                  <Col key={index} className="project-image-col">
                    <img src={project.imgUrl} alt="Project" className="project-image ml-model-image"/>
                  </Col>
                ))
              }
            </Row>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
