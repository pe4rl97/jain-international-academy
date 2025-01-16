import { Button, Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap"
import './navbar.scss'

const NavBar = () => {
    return (
        <Container className="pt-3">
            <Navbar expand='md' bg="light" variant="light" className="rounded navbar-dark bg-transparent">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <span className="fw-bold text-white h5">JIPS</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        {/* <Offcanvas.Title id="offcanvasNavbarLabel">
                            Offcanvas
                        </Offcanvas.Title> */}
                    </Offcanvas.Header>
                        <Offcanvas.Body className="ms-4">
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#home" className="me-2">HOME</Nav.Link>
                                <Nav.Link href="#about-us" className="me-2">ABOUT US</Nav.Link>
                                <Nav.Link href="#gallery" className="me-2">GALLERY</Nav.Link>
                                <NavDropdown title="CERTIFICATES" id="offcanvasNavbarDropdown" className="me-2 rounded-0">
                                    <NavDropdown.Item href="#" className="mb-2">Certificate of Registration</NavDropdown.Item>
                                    <NavDropdown.Item href="#" className="mb-2">Building Safety Certicate</NavDropdown.Item>
                                    <NavDropdown.Item href="#" className="mb-2">Land Certificate</NavDropdown.Item>
                                    <NavDropdown.Item href="#" className="mb-2">Mandatory Disclosure Details</NavDropdown.Item>
                                    <NavDropdown.Item href="#" className="mb-2">No Objection Certificate</NavDropdown.Item>
                                    <NavDropdown.Item href="#" className="mb-2">Recognition Certificate</NavDropdown.Item>
                                    <NavDropdown.Item href="#" className="mb-2">Water and Sanitation Certificate</NavDropdown.Item>
                                    <NavDropdown.Item href="#" className="mb-2">Water Sample Test</NavDropdown.Item>
                                    <NavDropdown.Item href="#" className="mb-2">Self Declaration</NavDropdown.Item>
                                    <NavDropdown.Item href="#" className="mb-2">School Management Committee</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#contact-us" className="me-2">CONTACT US</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </Container>
    )
}

export default NavBar