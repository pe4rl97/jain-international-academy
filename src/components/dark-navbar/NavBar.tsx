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
import { Link, useLocation } from "react-router-dom"
import logo from '../../assets/logo.jpg'
import { useCallback, useEffect, useState } from "react"

const handleHeader = () => {
    const path = location.pathname;
    if (path === '/staff')
        return 'Staff';
    else if (path === '/facility/art-craft')
        return 'Art & Craft'
    else if (path === '/facility/biology-lab')
        return 'Biology Lab'
    else if (path === '/facility/chemistry-lab')
        return 'Chemistry Lab'
    else if (path === '/facility/physics-lab')
        return 'Physics Lab'
    else if (path === '/facility/computer-lab')
        return 'Computer Lab'
    else if (path === '/facility/karate')
        return 'Karate'
    else if (path === '/facility/library')
        return 'Library'
    else if (path === '/facility/maths-lab')
        return 'Maths Lab'
    else if (path === '/facility/music')
        return 'Music'
    else if (path.includes('certificate')) {
        return 'Certificate';
    }
}

const NavBar = () => {
    const location = useLocation();
    const [pageHeader, setPageHeader] = useState(handleHeader);
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
        setPageHeader(handleHeader)
    }, [location.pathname]);

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
                    <Navbar.Brand as={Link} to="/#home">
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
                                <Nav.Link as={Link} to="/#home" className="me-2 dark">HOME</Nav.Link>
                                <Nav.Link as={Link} to="/#about-us" className="me-2 dark">ABOUT US</Nav.Link>
                                <Nav.Link as={Link} to="/#gallery-images" className="me-2 dark">GALLERY</Nav.Link>
                                <NavDropdown title="FACILITY" id="offcanvasNavbarDropdownDark1" className="me-2 rounded-0 text-dark">
                                    <NavDropdown.Item as={Link} to={'/facility/art-craft'} className="mb-2 dark" onClick={handleCloseOffcanvas}>Art & Craft</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={'/facility/biology-lab'} className="mb-2 dark" onClick={handleCloseOffcanvas}>Biology Lab</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={'/facility/chemistry-lab'} className="mb-2 dark" onClick={handleCloseOffcanvas}>Chemistry Lab</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={'/facility/computer-lab'} className="mb-2 dark" onClick={handleCloseOffcanvas}>Computer Lab</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={'/facility/karate'} className="mb-2 dark" onClick={handleCloseOffcanvas}>Karate</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={'/facility/library'} className="mb-2 dark" onClick={handleCloseOffcanvas}>Library</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={'/facility/maths-lab'} className="mb-2 dark" onClick={handleCloseOffcanvas}>Maths Lab</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={'/facility/music'} className="mb-2 dark" onClick={handleCloseOffcanvas}>Music</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={'/facility/physics-lab'} className="mb-2 dark" onClick={handleCloseOffcanvas}>Physics Lab</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="/staff" className="me-2 dark">STAFF</Nav.Link>
                                <NavDropdown title="CERTIFICATES" id="offcanvasNavbarDropdownDark2" className="me-2 rounded-0 text-dark">
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
                <Container>
                    <div className="py-5 ms-5">
                        <h1 className="display-2 text-white mb-4 header-title" data-aos='fade-down'>{pageHeader}</h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/" style={{textDecoration:'none'}}>Home</Link></li>   
                                {location.pathname.includes('facility') && <li className="breadcrumb-item text-white active">Facility</li>}
                                <li className="breadcrumb-item text-white active" aria-current="page">{pageHeader}</li>
                            </ol>
                        </nav>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default NavBar