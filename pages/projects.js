//the Layout component gets imported and used to wrap around the page's content
import Layout from "../components/MyLayout";
import Link from "next/Link";
//Container, Row, Col, Image gets imported from React-Bootstrap. These styles/containers are used to wrap the content of the page
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Projects = () => {
  return (
    <Layout>
      <h1>My Portfolio</h1>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Link href="https://gershwen.github.io/planets-fact-site-project/">
              <Image src="/static/PlanetsSite.png" thumbnail />
            </Link>
            <h3>
              8 page website built with Semantic HTML, CSS and JavaScript using
              a Figma design
            </h3>
          </Col>
          <Col xs={6} md={4}>
            <Link href="https://gershwen.github.io/sunnyside-landing-page-project/">
              <Image src="/static/SunnySideLandingPage.png" thumbnail />
            </Link>
            <h3>
              Landing built with Semantic HTML, CSS and JavaScript using a Figma
              design
            </h3>
          </Col>
          <Col xs={6} md={4}>
            <Link href="https://github.com/Gershwen/Capstone_project_2">
              <Image src="/static/OnlineStore.png" thumbnail />
            </Link>
            <h3>Online store built using Semantic HTML, Bootstrap & jQuery.</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Link href="https://github.com/Gershwen/Full_Stack_iTunes_Search_App/tree/main/backend">
              <Image src="/static/FullStackiTunesApp.png" thumbnail />
            </Link>
            <h3>Full-Stack web App using iTunes API</h3>
          </Col>
          <Col xs={6} md={4}>
            <Link href="https://github.com/Gershwen/Minesweeper-Game">
              <Image src="/static/MinesweeperGame.png" thumbnail />
            </Link>
            <h3>Minesweeper game built with React.js</h3>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Projects;
