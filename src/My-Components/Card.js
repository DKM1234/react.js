import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

function NavTabsExample() {
  return (
    <Card className="my-4 border border-primary">
      <Card.Header>
        <Nav className="justify-content-center">
          <h5 className="text-center">Mindtrail Technologies Pvt Ltd</h5>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title style={{ marginTop: "17px" }}>
          {" "}
          <MdPhone style={{ color: "green" }} /> &nbsp; &nbsp;Phone:
        </Card.Title>
        <Card.Text>+91 8770059117</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Title style={{ marginTop: "16px" }}>
          <MdEmail style={{ color: "green" }} /> &nbsp; &nbsp;E Mail:
        </Card.Title>
        <Card.Text>Dinesh.kumar.fullstack@gmail.com</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Title>
          <MdLocationOn style={{ color: "green" }} /> &nbsp; Address
        </Card.Title>
        <Card.Text>
          <b>Mindtrail Technologies Pvt Ltd</b>
          <br></br>Plot No-97, 60 Feet Rd, beside CGR International School,
          <br></br> Ayyappa Society, Mega Hills, Madhapur, <br></br>Hyderabad,
          Telangana 500081
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NavTabsExample;
