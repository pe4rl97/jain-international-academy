import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
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
import { FaFileAlt } from "react-icons/fa";
import './certificates.scss'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Certificates: React.FC = () => {
    const { t } = useTranslation(["certificates", "common"]);
    const certificateNames = t("certificateNames");
    const certificates = [
        {
            name: certificateNames.certificateOfRegistration,
            imagelink: certificateOfRegistrationImg,
            pdflink: certificateOfRegistrationPdf,
        },
        {
            name: certificateNames.buildingSafetyCertificate,
            imagelink: buildingSafetyCertificateImg,
            pdflink: buildingSafetyCertificatePdf,
        },
        {
            name: certificateNames.landCertificate,
            imagelink: landCertificateImg,
            pdflink: landCertificatePdf,
        },
        {
            name: certificateNames.mandatoryDisclosureDetails,
            imagelink: mandatoryDisclosureImg,
            pdflink: mandatoryDisclosurePdf,
        },
        {
            name: certificateNames.noObjectionCertificate,
            imagelink: noObjectionCertificateImg,
            pdflink: noObjectionCertificatePdf,
        },
        {
            name: certificateNames.recognitionCertificate,
            imagelink: recognitionCertificateImg,
            pdflink: recognitionCertificatePdf,
        },
        {
            name: certificateNames.waterAndSanitationCertificate,
            imagelink: waterAndSanitationCertificateImg,
            pdflink: waterAndSanitationCertificatePdf,
        },
        {
            name: certificateNames.waterSampleTest,
            imagelink: waterSampleTestImg,
            pdflink: waterSampleTestPdf,
        },
        {
            name: certificateNames.selfDeclaration,
            imagelink: selfDeclarationImg,
            pdflink: selfDeclarationPdf,
        },
        {
            name: certificateNames.schoolManagementCommittee,
            imagelink: schoolManagementCommitteeImg,
            pdflink: schoolManagementCommitteePdf,
        },
    ];
    
    return (
        <section className="certificates-wrapper pb-5" id="certificates">
            <h1
                className="text-center my-4 my-md-5 p-5 certificate-heading"
            >
                {t("certificatesTitle", { ns: "common"})}
            </h1>
            <Container  className="cards-container">
                <Row className="text-center">
                {certificates.map((certificate, index) => (
                    <Col
                    key={index}
                    md={3}
                    sm={6}
                    xs={12}
                    className="mb-4"
                    >
                    <Link
                        to={`/certificate?name=${certificate.name}&imageLink=${certificate.imagelink}
                        &pdfLink=${certificate.pdflink}`}
                        className="text-decoration-none"
                    >
                        <Card className="border-2 border-gray-200 p-3 h-100 shadow" data-aos='fade-up' data-aos-delay='10'>
                            <Card.Body>
                                <FaFileAlt className="text-primary fs-2 mb-3" />
                                <Card.Text>
                                    {certificate.name}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                    </Col>
                ))}
                </Row>
            </Container>
        </section>
    );
};

export default Certificates;
