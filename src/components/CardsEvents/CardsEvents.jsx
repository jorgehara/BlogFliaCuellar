import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "./CardsEvents.css";
import MinisterioElimBa from "/images/MinisterioElimBa.jpg";
import imageOne from "/images/imageOne.png";
import imageTwo from "/images/imageTwo.jpeg";
import imageNine from "/images/imageNine.png";
import { Container } from "react-bootstrap";

const images = [
  {
    id: 1,
    src: MinisterioElimBa,
    title: "Pequeños Exploradores",
    description: "Reuniones los sábados de 5 a 7pm",
  },
  {
    id: 2,
    src: imageOne,
    title: "Grupo de Running",
    description: "Salidas los domingos a las 6am",
  },
  {
    id: 3,
    src: imageTwo,
    title: "Taller de Pintura",
    description: "Todos los miércoles a las 3pm",
  },
  {
    id: 4,
    src: imageNine,
    title: "Image 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

export const CardsEvents = () => {
  const [hoveredImage, setHoveredImage] = useState(0);

  return (
    <>
      <Container className="d-flex flex-directions-column">
        <Row xs={12} md={12} className="g-3">
          {images.map((image, index) => (
            <Card
              key={index}
              className="border-0 card-image"
              style={{ width: 282, height: 250 }}
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(0)}
            >
              {image.title}
              <Card.Img variant="top" src={image.src} >
              </Card.Img>
              <div className="card-overlay">
                {hoveredImage === index && (
                  <>
                    <Card.Title className="text-white">
                      {image.title}
                    </Card.Title>
                    <Card.Text className="text-white">
                      {image.description}
                    </Card.Text>
                  </>
                )}
              </div>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
};
