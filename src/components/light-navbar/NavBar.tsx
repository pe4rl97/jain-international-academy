import { Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap"
import './navbar.scss'
import certificateOfRegistrationPdf from '../../assets/certificates/Certificate of Registration.pdf'
import certificateOfRegistrationImg from '../../assets/certificates/certificateOfRegistration.jpg'
import buildingSafetyCertificatePdf from '../../assets/certificates/Building Safety Certificate.pdf'
import buildingSafetyCertificateImg from '../../assets/certificates/Building Safety Certificate.jpg'
import landCertificatePdf from '../../assets/certificates/Land Certificate.pdf'
import landCertificateImg from '../../assets/certificates/LandCertificate.jpg'
import mandatoryDisclosurePdf from '../../assets/certificates/Mandatory Disclosure Details.pdf'
import mandatoryDisclosureImg from '../../assets/certificates/Mandatory Disclosure Details.jpg'
import noObjectionCertificatePdf from '../../assets/certificates/No Objection Certificate.pdf'
import noObjectionCertificateImg from '../../assets/certificates/No Objection Certificate.jpg'
import recognitionCertificatePdf from '../../assets/certificates/Recognition Certificate.pdf'
import recognitionCertificateImg from '../../assets/certificates/RecognitionCertificate.jpg'
import waterAndSanitationCertificatePdf from '../../assets/certificates/Water and Sanitation Certificate.pdf'
import waterAndSanitationCertificateImg from '../../assets/certificates/WaterAndSanitationCertificate.jpg'
import waterSampleTestPdf from '../../assets/certificates/Water Sample Test Report.pdf'
import waterSampleTestImg from '../../assets/certificates/WaterSampleTest.jpg'
import selfDeclarationPdf from '../../assets/certificates/Self Declaration.pdf'
import selfDeclarationImg from '../../assets/certificates/Self Declaration.jpg'
import schoolManagementCommitteePdf from '../../assets/certificates/School Management Committee.pdf'
import schoolManagementCommitteeImg from '../../assets/certificates/School Management Committee.jpg'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight * 0.9) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        // <Container className="pt-3">
            <Navbar 
                fixed='top'
                expand='md'
                className={`rounded ${scrolled ? 'bg-white text-dark' : 'bg-transparent'}`}
            >
            {/* <Navbar fixed='top' expand='md' bg="light" variant="light" className="rounded navbar-dark bg-transparent"> */}
                <Container>
                    <Navbar.Brand href="#">
                        <span className={`fw-bold h5 ${scrolled ? 'd-none': 'text-white'}`}>JIPS</span>
                        <span className={`fw-bold h5 ${scrolled ? 'text-black': 'd-none'}`}>Jain International Public School</span>
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
                                <Nav.Link href="/#" className="me-2">HOME</Nav.Link>
                                <Nav.Link href='#about-us' className="me-2">ABOUT US</Nav.Link>
                                <Nav.Link href="#gallery-images" className="me-2">GALLERY</Nav.Link>
                                <NavDropdown title="CERTIFICATES" id="offcanvasNavbarDropdown" className="me-2 rounded-0">
                                    <NavDropdown.Item as={Link} to={`/certificate?name=Certificate of Registration&imageLink=${certificateOfRegistrationImg}&pdfLink=${certificateOfRegistrationPdf}`} className="mb-2">Certificate of Registration</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=Building Safety Certificate&imageLink=${buildingSafetyCertificateImg}&pdfLink=${buildingSafetyCertificatePdf}`} className="mb-2">Building Safety Certificate</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=Land Certificate&imageLink=${landCertificateImg}&pdfLink=${landCertificatePdf}`} className="mb-2">Land Certificate</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=Mandatory Disclosure Details&imageLink=${mandatoryDisclosureImg}&pdfLink=${mandatoryDisclosurePdf}`} className="mb-2">Mandatory Disclosure Details</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=No Objection Certificate&imageLink=${noObjectionCertificateImg}&pdfLink=${noObjectionCertificatePdf}`} className="mb-2">No Objection Certificate</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=Recognition Certificate&imageLink=${recognitionCertificateImg}&pdfLink=${recognitionCertificatePdf}`} className="mb-2">Recognition Certificate</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=Water and Sanitation Certificates&imageLink=${waterAndSanitationCertificateImg}&pdfLink=${waterAndSanitationCertificatePdf}`} className="mb-2">Water and Sanitation Certificates</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=Water Sample Test&imageLink=${waterSampleTestImg}&pdfLink=${waterSampleTestPdf}`} className="mb-2">Water Sample Test</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=Self Declaration&imageLink=${selfDeclarationImg}&pdfLink=${selfDeclarationPdf}`} className="mb-2">Self Declaration</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=School Management Committee&imageLink=${schoolManagementCommitteeImg}&pdfLink=${schoolManagementCommitteePdf}`} className="mb-2">School Management Committee</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#contact-us" className="me-2">CONTACT US</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        // </Container>
    )
}

export default NavBar