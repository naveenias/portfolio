import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function CertificatesCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.Link} target="_blank">
          Certificate Link
        </Button>
       
     
      </Card.Body>
    </Card>
  );
}
export default CertificatesCard;
