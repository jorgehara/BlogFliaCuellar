import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./HomeInit.css";
import Navs from "../Navs/Navs";
import CentralCard from "../CentralCard/CentralCard";
import { Texts } from "../Texts/Texts";

export const HomeInit = () => {
  return (
    <>
      <Container>

        <Row>
          <Col xl={11} xs={11} sm={11}>
            <Navs />
          </Col>

            <Row>
              <Col xl={11} xs={11} sm={11}>
                <CentralCard />
              </Col>
            </Row>

            <Row>
              <Col xl={11} xs={11} sm={11}>
                <Texts />
              </Col>
            </Row>


        </Row>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Container>
    </>
  );
};
