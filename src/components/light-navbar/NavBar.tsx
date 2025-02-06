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
import { useCallback, useEffect, useState } from "react"
import logo from '../../assets/logo-transparentbg.png'

const NavBar = () => {
    const [scrolledTransparent, setScrolledTransparent] = useState(false);
    const [scrolledTransparentHalf, setScrolledTransparentHalf] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
    
        if (scrollY > viewportHeight * 0.9) {
            setScrolledTransparent(true);
            setScrolledTransparentHalf(false);
        } else if (scrollY > viewportHeight * 0.15) {
            setScrolledTransparent(false);
            setScrolledTransparentHalf(true);
        } else {
            setScrolledTransparent(false);
            setScrolledTransparentHalf(false);
        }
    
        // Check visible section (already included in your code)
        const sections = document.querySelectorAll("section");
        let currentSection = "home"; // Default to home if no section matches
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100; // Adjust offset as needed
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id") || activeSection;
            }
        });
        setActiveSection(currentSection);
    }, [activeSection]);
    

    const handleCloseOffcanvas = () => setShowOffcanvas(false);
    const handleShowOffcanvas = () => setShowOffcanvas(true);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <Navbar
            fixed="top"
            expand="xl"
            className={`custom-navbar ${
                scrolledTransparent
                    ? 'bg-white text-dark shadow'
                    : scrolledTransparentHalf
                    ? 'blurred-bg'
                    : 'bg-transparent'
            }`}
        >
            <Container>
                <Navbar.Brand as={Link} to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span><img src={logo} height={40} className="me-3"/></span>
                    <span className={`fw-bold h5 poppins-font ${scrolledTransparent ? 'd-none': 'text-white'}`}>JIPS</span>
                    <span className={`fw-bold h5 ${scrolledTransparent ? 'text-black': 'd-none'}`}>
                        <span className="d-md-inline d-none full-header-title">Jain International Public School</span>
                        <span className="d-inline d-md-none">JIPS</span>
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShowOffcanvas}/>
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    show={showOffcanvas}
                    onHide={handleCloseOffcanvas}
                >
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                    <Offcanvas.Body className="ms-4">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link 
                            as={Link} to="/#home" 
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                                handleCloseOffcanvas();
                            }} 
                            className={`me-2 ${activeSection === "home" ? "active" : ""}`}
                        >HOME</Nav.Link>
                        <Nav.Link as={Link} to="/#about-us" onClick={handleCloseOffcanvas} className={`me-2 ${activeSection === "about-us" ? "active" : ""}`}>ABOUT US</Nav.Link>
                        <Nav.Link as={Link} to="/#gallery-images" onClick={handleCloseOffcanvas} className={`me-2 ${activeSection === "gallery-images" ? "active" : ""}`}>GALLERY</Nav.Link>
                        <NavDropdown title="FACILITY" id="offcanvasNavbarDropdow1" className="me-2 rounded-0">
                            <NavDropdown.Item as={Link} to={'/facility/art-craft'} className="mb-2" onClick={handleCloseOffcanvas}>Art & Craft</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/facility/biology-lab'} className="mb-2" onClick={handleCloseOffcanvas}>Biology Lab</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/facility/chemistry-lab'} className="mb-2" onClick={handleCloseOffcanvas}>Chemistry Lab</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/facility/computer-lab'} className="mb-2" onClick={handleCloseOffcanvas}>Computer Lab</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/facility/karate'} className="mb-2" onClick={handleCloseOffcanvas}>Karate</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/facility/library'} className="mb-2" onClick={handleCloseOffcanvas}>Library</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/facility/maths-lab'} className="mb-2" onClick={handleCloseOffcanvas}>Maths Lab</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/facility/music'} className="mb-2" onClick={handleCloseOffcanvas}>Music</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/facility/physics-lab'} className="mb-2" onClick={handleCloseOffcanvas}>Physics Lab</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/staff" onClick={handleCloseOffcanvas} className={`me-2`}>STAFF</Nav.Link>
                        <NavDropdown title="CERTIFICATES" id="offcanvasNavbarDropdown2" className="me-2 rounded-0" active={activeSection === "certificates"}>
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
                        <Nav.Link as={Link} to="/#contact-us" onClick={handleCloseOffcanvas} className={`me-2 ${activeSection === "contact-us" ? "active" : ""}`}>CONTACT US</Nav.Link>                            </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavBar