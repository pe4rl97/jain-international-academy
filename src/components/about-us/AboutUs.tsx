import { Container } from "react-bootstrap";
import J1 from "../../assets/about-us/J1.jpeg";
import J6 from "../../assets/about-us/J6.jpg";
import J7 from "../../assets/about-us/J7.jpg";
import callToActionPhoto from '../../assets/gallery-photos/WhatsApp Image 2024-06-05 at 2.49.09 PM (2).jpeg';
import HappeningNow from "../happening-now/HappeningNow";
import "./about-us.scss";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation("about-us");
  const { line1, line2 } = t("description1");
  return (
    <section className="about-us-wrapper" id="about-us">
      <div className="about-us-div">
        {/* about us start   */}
        <Container className="about-us-container rounded">
          <div className="container-xxl py-5">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6" >
                  <h1 className="mb-4 about-us-title" data-aos='fade-right'>
                    {t("learnMoreAbout")}
                  </h1>
                  <p data-aos='fade-right' data-aos-delay={50}>
                    {line1}
                  </p>
                  <p className="mb-4" data-aos='fade-right' data-aos-delay={100}>
                    {line2}
                  </p>
                  <div className="row g-4 align-items-center">
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 about-img" data-aos='fade-left' data-aos-delay={100}
                >
                  <div className="row">
                    <div className="col-12 text-center">
                      <img
                        className="img-fluid w-75 rounded-circle bg-light p-3 img-hover"
                        src={J1}
                        alt=""
                      />
                    </div>
                    <div
                      className="col-6 text-start"
                      style={{ marginTop: "-150px" }}
                    >
                      <img
                        className="img-fluid w-100 rounded-circle bg-light p-3 img-hover"
                        src={J6}
                        alt=""
                      />
                    </div>
                    <div
                      className="col-6 text-end"
                      style={{ marginTop: "-150px" }}
                    >
                      <img
                        className="img-fluid w-100 rounded-circle bg-light p-3 img-hover"
                        src={J7}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* call to action start  */}
          <div className="container-xxl py-5">
            <div className="container">
              <div className="bg-light rounded">
                <div className="row g-0">
                  <div
                    className="col-lg-6 "
                    data-aos='fade-in'
                    data-aos-delay={200}
                    style={{minHeight: "400px"}}
                  >
                    <div className="position-relative h-100">
                      <img
                        className="position-absolute w-100 h-100 rounded"
                        src={callToActionPhoto}
                        style={{objectFit: "cover"}}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6" data-aos='fade-in' data-aos-delay={400}>
                    <div className="h-100 d-flex flex-column justify-content-center p-5">
                      <h1 className="mb-4 become-a-school-title">{t("becomeASchoolTitle")}</h1>
                      <p className="mb-4">
                        {t("becomeASchoolDescription")}
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </Container>
      </div>
      <HappeningNow />
    </section>
  );
};

export default AboutUs;
