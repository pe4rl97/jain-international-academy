import { Container } from "react-bootstrap";
import J1 from "../../assets/about-us/J1.jpeg";
import J6 from "../../assets/about-us/J6.jpg";
import J7 from "../../assets/about-us/J7.jpg";
import callToActionPhoto from '../../assets/gallery-photos/WhatsApp Image 2024-06-05 at 2.49.09 PM (2).jpeg';
import HappeningNow from "../happening-now/HappeningNow";
import "./about-us.scss";

const AboutUs = () => {
  return (
    <section className="about-us-wrapper" id="about-us">
      <div className="about-us-div">
        {/* about us start   */}
        <Container className="about-us-container rounded">
          <div className="container-xxl py-lg-5 py-md-0">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6" >
                  <h1 className="mb-4 about-us-title" data-aos='fade-right'>
                    Learn More About Our Work And Our Cultural Activities
                  </h1>
                  <p data-aos='fade-right' data-aos-delay={50}>
                    <strong>JAIN INTERNATIONAL PUBLIC SCHOOL</strong>, established in 2013, is a 
                    privately managed unaided institution located in an urban area 
                    within the <strong>VALSAD</strong> block of <strong>VALSAD</strong> district, <strong>Gujarat</strong>.
                  </p>
                  <p className="mb-4" data-aos='fade-right' data-aos-delay={100}>
                    The school offers education from grades 1 to 10 and follows a co-educational 
                    system with an attached pre-primary section. It operates as a standalone institution 
                    and does not function as a shift-school. English is the medium of instruction, and the 
                    school is easily accessible via an all-weather road. The academic session begins in April.
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
                      <h1 className="mb-4 become-a-school-title">Become A School</h1>
                      <p className="mb-4">
                        The school operates in a private building with well-maintained classrooms for instructional purposes. 
                        Additionally, there are rooms designated for non-teaching activities and a separate office for administrative use. 
                        The school is enclosed by a secure boundary wall and has a reliable electricity connection. A functional tap water 
                        system provides drinking water. Separate, fully functional toilets are available for students. Recreational facilities 
                        include a playground. The library contains a collection of books to support learning. Accessibility features such as ramps 
                        are not required for students with disabilities. The school is equipped with computers for teaching and learning.
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
