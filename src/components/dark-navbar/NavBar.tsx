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
import logo from '../../assets/logo.jpg'
import { useCallback, useEffect, useState } from "react"

const NavBar = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        if (window.scrollY > window.innerHeight * 0.35) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const handleCloseOffcanvas = () => setShowOffcanvas(false);
    const handleShowOffcanvas = () => setShowOffcanvas(true);
    return (
        <>
            <Navbar fixed="top" expand='lg' className={`bg-white ${scrolled ? '' : 'navbar-shadow-0'} `}>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <span><img src={logo} height={40} className="me-3"/></span>
                        <span className="fw-bold h5 poppins-font">JIPS</span>
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
                                <Nav.Link as={Link} to="/" className="me-2 dark">HOME</Nav.Link>
                                <Nav.Link as={Link} to="/#about-us" className="me-2 dark">ABOUT US</Nav.Link>
                                <Nav.Link as={Link} to="/#gallery-images" className="me-2 dark">GALLERY</Nav.Link>
                                <NavDropdown title="CERTIFICATES" id="offcanvasNavbarDropdownDark" className="me-2 rounded-0 text-dark">
                                    <NavDropdown.Item as={Link} to={`/certificate?name=Certificate of Registration&imageLink=${certificateOfRegistrationImg}&pdfLink=${certificateOfRegistrationPdf}`} className="mb-2 dark" onClick={handleCloseOffcanvas} >Certificate of Registration</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=Building Safety Certificate&imageLink=${buildingSafetyCertificateImg}&pdfLink=${buildingSafetyCertificatePdf}`} className="mb-2 dark" onClick={handleCloseOffcanvas} >Building Safety Certificate</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=Land Certificate&imageLink=${landCertificateImg}&pdfLink=${landCertificatePdf}`} className="mb-2 dark" onClick={handleCloseOffcanvas} >Land Certificate</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=Mandatory Disclosure Details&imageLink=${mandatoryDisclosureImg}&pdfLink=${mandatoryDisclosurePdf}`} className="mb-2 dark" onClick={handleCloseOffcanvas} >Mandatory Disclosure Details</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=No Objection Certificate&imageLink=${noObjectionCertificateImg}&pdfLink=${noObjectionCertificatePdf}`} className="mb-2 dark" onClick={handleCloseOffcanvas} >No Objection Certificate</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=Recognition Certificate&imageLink=${recognitionCertificateImg}&pdfLink=${recognitionCertificatePdf}`} className="mb-2 dark" onClick={handleCloseOffcanvas} >Recognition Certificate</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=Water and Sanitation Certificates&imageLink=${waterAndSanitationCertificateImg}&pdfLink=${waterAndSanitationCertificatePdf}`} className="mb-2 dark" onClick={handleCloseOffcanvas} >Water and Sanitation Certificates</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=Water Sample Test&imageLink=${waterSampleTestImg}&pdfLink=${waterSampleTestPdf}`} className="mb-2 dark" onClick={handleCloseOffcanvas} >Water Sample Test</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=Self Declaration&imageLink=${selfDeclarationImg}&pdfLink=${selfDeclarationPdf}`} className="mb-2 dark" onClick={handleCloseOffcanvas} >Self Declaration</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=School Management Committee&imageLink=${schoolManagementCommitteeImg}&pdfLink=${schoolManagementCommitteePdf}`} className="mb-2 dark" onClick={handleCloseOffcanvas} >School Management Committee</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="/#contact-us" className="me-2 dark">CONTACT US</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <div className="py-5 page-header position-relative mb-5 bg-transparent header" >
                <div className="container py-5 ms-5">
                    <h1 className="display-2 text-white mb-4 header-title" data-aos='fade-down'>Certificate</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/" style={{textDecoration:'none'}}>Home</Link></li>           
                            <li className="breadcrumb-item text-white active" aria-current="page">Certificate</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavBar