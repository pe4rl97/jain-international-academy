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
import { Link as ScrollLink } from "react-scroll"
import { Link } from "react-router-dom"
import { useCallback, useEffect, useState } from "react"
import logo from '../../assets/logo-transparentbg.png'
import { useTranslation } from "react-i18next"

const NavBar = () => {
    const [scrolledTransparent, setScrolledTransparent] = useState(false);
    const [scrolledTransparentHalf, setScrolledTransparentHalf] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const { t, i18n } = useTranslation(["navbar", "certificates"]);
    const certificateNames = t("certificateNames", { ns: "certificates"});

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

    const languages = ['en', 'hi', 'gu'];

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
                            as={ScrollLink} to="/" 
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                                handleCloseOffcanvas();
                            }} 
                            className={`me-2 ${activeSection === "home" ? "active" : ""}`}
                        >{t("home", { ns: "navbar" })}</Nav.Link>
                        <Nav.Link as={ScrollLink} to="about-us" smooth={true} delay={0} duration={500} offset={-55} onClick={handleCloseOffcanvas} className={`me-2 ${activeSection === "about-us" ? "active" : ""}`}>{t("aboutUs", { ns: "navbar" })}</Nav.Link>
                        <Nav.Link as={ScrollLink} to="gallery-images" smooth={true} duration={500} onClick={handleCloseOffcanvas} className={`me-2 ${activeSection === "gallery-images" ? "active" : ""}`}>{t("gallery", { ns: "navbar" })}</Nav.Link>
                        <NavDropdown title={t("certificates", { ns: "navbar" })} id="offcanvasNavbarDropdown" className="me-2 rounded-0" active={activeSection === "certificates"}>
                            <NavDropdown.Item as={Link} to={`/certificate?name=${certificateNames.certificateOfRegistration}&imageLink=${certificateOfRegistrationImg}&pdfLink=${certificateOfRegistrationPdf}`} className="mb-2">{certificateNames.certificateOfRegistration}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={`/certificate?name=${certificateNames.buildingSafetyCertificate}&imageLink=${buildingSafetyCertificateImg}&pdfLink=${buildingSafetyCertificatePdf}`} className="mb-2">{certificateNames.buildingSafetyCertificate}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={`/certificate?name=${certificateNames.landCertificate}&imageLink=${landCertificateImg}&pdfLink=${landCertificatePdf}`} className="mb-2">{certificateNames.landCertificate}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={`/certificate?name=${certificateNames.mandatoryDisclosureDetails}&imageLink=${mandatoryDisclosureImg}&pdfLink=${mandatoryDisclosurePdf}`} className="mb-2">{certificateNames.mandatoryDisclosureDetails}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={`/certificate?name=${certificateNames.noObjectionCertificate}&imageLink=${noObjectionCertificateImg}&pdfLink=${noObjectionCertificatePdf}`} className="mb-2">{certificateNames.noObjectionCertificate}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={`/certificate?name=${certificateNames.recognitionCertificate}&imageLink=${recognitionCertificateImg}&pdfLink=${recognitionCertificatePdf}`} className="mb-2">{certificateNames.recognitionCertificate}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={`/certificate?name=${certificateNames.waterAndSanitationCertificate}&imageLink=${waterAndSanitationCertificateImg}&pdfLink=${waterAndSanitationCertificatePdf}`} className="mb-2">{certificateNames.waterAndSanitationCertificate}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={`/certificate?name=${certificateNames.waterSampleTest}&imageLink=${waterSampleTestImg}&pdfLink=${waterSampleTestPdf}`} className="mb-2">{certificateNames.waterSampleTest}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={`/certificate?name=${certificateNames.selfDeclaration}&imageLink=${selfDeclarationImg}&pdfLink=${selfDeclarationPdf}`} className="mb-2">{certificateNames.selfDeclaration}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={`/certificate?name=${certificateNames.schoolManagementCommittee}&imageLink=${schoolManagementCommitteeImg}&pdfLink=${schoolManagementCommitteePdf}`} className="mb-2">{certificateNames.schoolManagementCommittee}</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={ScrollLink} to="contact-us" smooth={true} duration={500} onClick={handleCloseOffcanvas} className={`me-2 ${activeSection === "contact-us" ? "active" : ""}`}>{t("contactUs", { ns: "navbar" })}</Nav.Link>
                        <NavDropdown 
                            title={t(`languages.${i18n.language}`, { ns: "navbar" })} 
                            id="language-dropdown"
                            className="me-2"
                        >
                            {languages.map((lang) => (
                                <NavDropdown.Item 
                                    key={lang}
                                    onClick={() => {
                                        i18n.changeLanguage(lang);
                                        handleCloseOffcanvas();
                                    }}
                                    disabled={i18n.language === lang}
                                >
                                    {t(`languages.${lang}`, { ns: "navbar" })}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavBar