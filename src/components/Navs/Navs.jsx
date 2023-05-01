// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navs.css";
import { ButtonSubs } from "../ButtonSubs/ButtonSubs";

function Navs() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="">
          <Container fluid>
            <Navbar.Brand href="#" className="text-decoration-underline fw-bold">Ministerio ELIM</Navbar.Brand>
            <ButtonSubs className="" />

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  className=""
                >
                  <xml version="1.0"  />
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#000000"
                  >
                    <path
                      d="M16.278 17.541A7 7 0 1119 12c0 4.278-5 3.722-5 1V8.5"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M14 12v-.5a2.5 2.5 0 00-5 0v.5M14 12v.5a2.5 2.5 0 01-5 0V12"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  Nuestra Misión
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">
                Cultos
                </Nav.Link>
                <Nav.Link href="#action1">
                Apoyo Escolar
                </Nav.Link>
                <Nav.Link href="#action1">
                Taller de Coreagrafía y Baile
                </Nav.Link>
                <Nav.Link href="#action1">
                Grupo de Exploradores Adolescentes
                </Nav.Link>
                <Nav.Link href="#action1">
                Escuelita Bíblica para Niños Arca de Noe y Pequeños Exploradores
                </Nav.Link>
                <Nav.Link href="#action1">
                    <xml version="1.0"  />
                    <svg
                      width="19px"
                      height="19px"
                      strokeWidth="1.2"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="#000000"
                    >
                      <path
                        d="M2 20v-1a7 7 0 017-7v0"
                        stroke="#000000"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M15.804 12.313a1.618 1.618 0 012.392 0v0c.325.357.79.55 1.272.527v0a1.618 1.618 0 011.692 1.692v0c-.023.481.17.947.526 1.272v0c.705.642.705 1.75 0 2.392v0c-.356.325-.549.79-.526 1.272v0a1.618 1.618 0 01-1.692 1.692v0a1.618 1.618 0 00-1.272.526v0a1.618 1.618 0 01-2.392 0v0a1.618 1.618 0 00-1.272-.526v0a1.618 1.618 0 01-1.692-1.692v0a1.618 1.618 0 00-.527-1.272v0a1.618 1.618 0 010-2.392v0c.357-.325.55-.79.527-1.272v0a1.618 1.618 0 011.692-1.692v0c.481.023.947-.17 1.272-.527v0z"
                        stroke="#000000"
                        strokeWidth="1.2"
                      ></path>
                      <path
                        d="M15.364 17l1.09 1.09 2.182-2.18M9 12a4 4 0 100-8 4 4 0 000 8z"
                        stroke="#000000"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  Proyecto Local
                  </Nav.Link>
                  <NavDropdown
                    title="Conoce Más"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Divider  />
                    <NavDropdown.Item href="#action3" className="btn-subs ">
                      Campamentos
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Encuentros
                      </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Sumate a nuestro equipo
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navs;
