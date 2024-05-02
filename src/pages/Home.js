import { Col, Container, Row } from 'reactstrap';
import backgroundImage from '../assets/background.jpeg';
import Base from '../components/Base';
import CategorySideMenu from '../components/CategorySideMenu';
import NewFeed from '../components/NewFeed';

const Home = () => {
  return (
    <Base>
      <div
        className="home-background"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
      >
        <Container className="mt-5">
          <Row>
            <Col md={2} className="pt-5">
              <CategorySideMenu />
            </Col>
            <Col md={10}>
              <NewFeed />
            </Col>
          </Row>
        </Container>
      </div>
    </Base>
  );
};

export default Home;
