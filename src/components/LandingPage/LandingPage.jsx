import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./LandingPage.css";
// import { CarouselProyects } from "../Carousel/Carousel";

export const LandingPage = () => {
  return (
    <>
      <Container className="container landing-page d-flex flex-column justify-content-center align-items-center">
        <div className="circle-container d-flex justify-content-center align-items-center">
          <div className="circle-image"></div>
        </div>
        <div className="content-container position-relative">
          <h1 className="landing-page-title text-center mb-2">
            Desarrollo Web Studio
          </h1>
          <h2 className="landing-page-subtitle text-center mb-0">
            Alcanza tu éxito digital
          </h2>
        </div>
      </Container>
      <Container className="container d-flex flex-column justify-content-center align-items-center bg-black">
        <div className=" d-flex flex-column justify-content-center align-items-center">
          <div className=" internetMark-title pt-4  position-relative bg-black">
            <h2 className="fontEspecial text-center mb-4 fs-1 text-white">
              Online Marketing
            </h2>
            <h3 className="internetMark-subtitle fontEspecial text-center pt-2 pb-4 mb-4 fs-4">
              Maximize SEO, Advertising and Branding to Boost Your Business.
            </h3>
          </div>
        </div>
      </Container>
      <Container className="container sectionBeneficios d-flex flex-column justify-content-center align-items-center">
        <section>
          <Card className="container position-relative d-flex  p-2 m-2 gap-2 text-black ">
            <Card.Body className="container beneficios-title myCard d-flex">
              {["lg"].map((breakpoint) => (
                <ListGroup
                  key={breakpoint}
                  horizontal={breakpoint}
                  className="beneficios-title "
                >
                  <ListGroup.Item>
                    <h2 className="beneficios-title ">Benefits</h2>
                    <p className="beneficios-description ">
                      Obtén soluciones a la medida de tus necesidades,servicios
                      a medida de cada cliente
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h2 className="beneficios-title ">Team</h2>
                    <p className="beneficios-description ">
                      Contamos con un equipo altamente capacitado y
                      experimentado en tecnologías digitales.
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h2 className="beneficios-title ">Maintenance</h2>
                    <p className="beneficios-description ">
                      Brindamos un servicio de soporte y mantenimiento continuo.
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h2 className="beneficios-title ">Grow</h2>
                    <p className="beneficios-description ">
                      Acompañamos a nuestros clientes paso a paso en tu
                      crecimiento y éxito digital.
                    </p>
                  </ListGroup.Item>
                </ListGroup>
              ))}
            </Card.Body>
          </Card>
        </section>
      </Container>
      <Container className="container d-flex flex-column justify-content-center align-items-center bg-black">
        <div className=" d-flex flex-column justify-content-center align-items-center">

          <div className=" internetMark-title pt-4  position-relative bg-black">
            <h2 className="fontEspecial text-center mb-4 fs-1 text-white">
              Our Latest Projects
            </h2>
            <h3 className="internetMark-subtitle fontEspecial text-center fs-4 ">
              Stay ahead of complex, ever-changing marketing trends with our
              expertise and cutting-edge technology solutions.
            </h3>
          </div>
        </div>
      </Container>
      <Container className="container d-flex flex-column justify-content-center align-items-center bg-black">
      {/* <CarouselProyects/> */}
      </Container>
      <Container className="container d-flex flex-column justify-content-center align-items-center bg-black">
        <div className=" d-flex flex-column justify-content-center align-items-center">
          <div className=" internetMark-title position-relative pb-3 bg-black">
          <Button className="btn-danger fs-5 knowMeStyle ">
            Conoce más!
          </Button>
          </div>
        </div>
      </Container>
      <Container className="container sectionButton d-flex flex-column justify-content-center align-items-center">
        <section>
          <Card className="container position-relative d-flex  p-2 m-2 gap-2 text-black ">
            <Card.Body className="container beneficios-title myCard d-flex">
              {["lg"].map((breakpoint) => (
                <ListGroup
                  key={breakpoint}
                  horizontal={breakpoint}
                  className="beneficios-title "
                >
                  <ListGroup.Item>
                    <h2 className="beneficios-title ">Benefits</h2>
                    <p className="beneficios-description ">
                      Obtén soluciones a la medida de tus necesidades,servicios
                      a medida de cada cliente
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h2 className="beneficios-title ">Team</h2>
                    <p className="beneficios-description ">
                      Contamos con un equipo altamente capacitado y
                      experimentado en tecnologías digitales.
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h2 className="beneficios-title ">Maintenance</h2>
                    <p className="beneficios-description ">
                      Brindamos un servicio de soporte y mantenimiento continuo.
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h2 className="beneficios-title ">Grow</h2>
                    <p className="beneficios-description ">
                      Acompañamos a nuestros clientes paso a paso en tu
                      crecimiento y éxito digital.
                    </p>
                  </ListGroup.Item>
                </ListGroup>
              ))}
            </Card.Body>
          </Card>
        </section>
      </Container>
    </>
  );
};
