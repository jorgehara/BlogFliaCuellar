import React from "react";
import { Card, Container } from "react-bootstrap";
import "./Texts.css";
import fliaCuellar from "/images/fliaCuellar.png"

export const Texts = () => {
  return (
    <>
      <Container>
        <Card className="text-center cardContainer">
          <Card.Header>¡Bienvenidos a la presentación del Proyecto Barrancas Dios te Ama!</Card.Header>
          <Card.Body className="cardBody">
          {/* <Card.Title className="cardTitle">Familia Cuellar</Card.Title> */}
            <Card.Text >
              ¡Cuan hermosos son los pies de los que anuncian el Evangelio del
              bien! Ro.10:15
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center ">
          <Card.Body >
          <Card.Header>
          <Card.Title className="tit-Igle">Iglesia ELIM</Card.Title>

          </Card.Header>
            <Card.Text className="fw-bold text-align-center fs-6" >
            Nuestra iglesia se dedica a trabajar con los niños más necesitados de nuestra comunidad, con el objetivo de brindarles atención y apoyo emocional y espiritual. Entendemos que muchos niños enfrentan dificultades en sus vidas, desde la falta de recursos materiales hasta la ausencia de figuras paternas o maternas. Por eso, queremos ser una fuente de esperanza y ayuda para ellos.
            </Card.Text>
          </Card.Body>
          <Card className="cardImg">
              <Card.Img variant="end" src={fliaCuellar}/>
          </Card>
        </Card>
      </Container>
    </>
  );
};
