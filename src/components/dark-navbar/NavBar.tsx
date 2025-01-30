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
import { useTranslation } from "react-i18next"

const NavBar = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t, i18n } = useTranslation(["navbar", "certificates", "common"]);
    const certificateNames = t("certificateNames", { ns: "certificates"});

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

    const languages = ['en', 'hi', 'gu'];
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
                                <Nav.Link as={Link} to="/" className="me-2 dark">{t("home")}</Nav.Link>
                                <Nav.Link as={Link} to="/#about-us" className="me-2 dark">{t("aboutUs")}</Nav.Link>
                                <Nav.Link as={Link} to="/#gallery-images" className="me-2 dark">{t("gallery")}</Nav.Link>
                                <NavDropdown title={t("certificates")} id="offcanvasNavbarDropdownDark" className="me-2 rounded-0 text-dark">
                                    <NavDropdown.Item as={Link} to={`/certificate?name=${certificateNames.certificateOfRegistration}&imageLink=${certificateOfRegistrationImg}&pdfLink=${certificateOfRegistrationPdf}`} className="mb-2 dark" onClick={handleCloseOffcanvas} >{certificateNames.certificateOfRegistration}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=${certificateNames.buildingSafetyCertificate}&imageLink=${buildingSafetyCertificateImg}&pdfLink=${buildingSafetyCertificatePdf}`} className="mb-2 dark" onClick={handleCloseOffcanvas} >{certificateNames.buildingSafetyCertificate}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=${certificateNames.landCertificate}&imageLink=${landCertificateImg}&pdfLink=${landCertificatePdf}`} className="mb-2 dark" onClick={handleCloseOffcanvas} >{certificateNames.landCertificate}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=${certificateNames.mandatoryDisclosureDetails}&imageLink=${mandatoryDisclosureImg}&pdfLink=${mandatoryDisclosurePdf}`} className="mb-2 dark" onClick={handleCloseOffcanvas} >{certificateNames.mandatoryDisclosureDetails}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=${certificateNames.noObjectionCertificate}&imageLink=${noObjectionCertificateImg}&pdfLink=${noObjectionCertificatePdf}`} className="mb-2 dark" onClick={handleCloseOffcanvas} >{certificateNames.noObjectionCertificate}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=${certificateNames.recognitionCertificate}&imageLink=${recognitionCertificateImg}&pdfLink=${recognitionCertificatePdf}`} className="mb-2 dark" onClick={handleCloseOffcanvas} >{certificateNames.recognitionCertificate}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=${certificateNames.waterAndSanitationCertificate}&imageLink=${waterAndSanitationCertificateImg}&pdfLink=${waterAndSanitationCertificatePdf}`} className="mb-2 dark" onClick={handleCloseOffcanvas} >{certificateNames.waterAndSanitationCertificate}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=${certificateNames.waterSampleTest}&imageLink=${waterSampleTestImg}&pdfLink=${waterSampleTestPdf}`} className="mb-2 dark" onClick={handleCloseOffcanvas} >{certificateNames.waterSampleTest}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=${certificateNames.selfDeclaration}=${selfDeclarationImg}&pdfLink=${selfDeclarationPdf}`} className="mb-2 dark" onClick={handleCloseOffcanvas} >{certificateNames.selfDeclaration}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={`/certificate?name=${certificateNames.schoolManagementCommittee}=${schoolManagementCommitteeImg}&pdfLink=${schoolManagementCommitteePdf}`} className="mb-2 dark" onClick={handleCloseOffcanvas} >{certificateNames.schoolManagementCommittee}</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="/#contact-us" className="me-2 dark">{t("contactUs")}</Nav.Link>
                                <NavDropdown 
                                    title={t(`languages.${i18n.language}`, { ns: "navbar" })} 
                                    id="language-dropdown-dark"
                                    className="me-2 text-dark rounded-0"
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
            <div className="py-5 page-header position-relative mb-5 bg-transparent header" >
                <div className="container py-5 ms-5">
                    <h1 className="display-2 text-white mb-4 header-title" data-aos='fade-down'>{t("certificateBigTitle", { ns: "common"})}</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/" style={{textDecoration:'none'}}>{t("homeTitle", { ns: "common"})}</Link></li>           
                            <li className="breadcrumb-item text-white active" aria-current="page">{t("certificateBigTitle", { ns: "common"})}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavBar