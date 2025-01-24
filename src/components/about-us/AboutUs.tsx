import { Container } from "react-bootstrap";
// import sidePhoto1 from '../../assets/student-teacher-blackboard.png'
// import sidePhoto2 from '../../assets/student-with-books.png'


import J1 from "../../assets/about-us/J1.jpeg";
// import J1 from "../../assets/about-us/J1.jpg";
// import J2 from "../../assets/about-us/J2.jpg";
// import J3 from "../../assets/about-us/J3.jpg";
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
          <div className="container-xxl py-5">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6" >
                  <h1 className="mb-4 about-us-title" data-aos='fade-right'>
                    Learn More About Our Work And Our Cultural Activities
                  </h1>
                  <p data-aos='fade-right' data-aos-delay={50}>
                    JAIN INTERNATIONAL PUBLIC SCHOOL was established in 2013 and
                    it is managed by the Pvt. Unaided. It is located in Urban
                    area. It is located in VALSAD block of VALSAD district of
                    Gujrat.
                  </p>
                  <p className="mb-4" data-aos='fade-right' data-aos-delay={100}>
                    The school consists of Grades from 1 to 5. The school is
                    Co-educational and it have an attached pre-primary section.
                    The school is N/A in nature and is not using school building
                    as a shift-school. English is the medium of instructions in
                    this school. This school is approachable by all weather
                    road. In this school academic session starts in April.
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
                        The school has Private building. It has got 6 classrooms
                        for instructional purposes. All the classrooms are in
                        good condition. It has 2 other rooms for non-teaching
                        activities. The school has a separate room for Head
                        master/Teacher. The school has Pucca boundary wall. The
                        school has have electric connection. The source of
                        Drinking Water in the school is Tap Water and it is
                        functional. The school has 1 boys toilet and it is
                        functional. and 1 girls toilet and it is functional. The
                        school has a playground. The school has a library and
                        has 200 books in its library. The school does not need
                        ramp for disabled children to access classrooms. The
                        school has 4 computers for teaching and learning
                        purposes and all are functional. The school is not
                        having a computer aided learning lab. The school is Not
                        Applicable providing mid-day meal.
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <h1 className="text-center about-us-title mb-5" data-aos='fade-in'><span className="bg-white">About Us</span></h1> */}
          {/* <Row className="g-0 justify-content-around mt-3 align-items-center">
                        <Col md='4' xs='11' className="column bg-white p-4 shadow rounded" data-aos='fade-right'>
                            <img src={sidePhoto1} alt="student teacher with blackboard" className="img-fluid rounded-3"/>
                        </Col>
                        <Col md='6' xs='12' className="column mt-5" data-aos='fade-left ' data-aos-delay='100'>
                            <p className="text-p bg-white rounded p-4">
                            <span className="fw-bold">JAIN INTERNATIONAL PUBLIC SCHOOL</span> was established in 2013 and it is managed by the Pvt. Unaided. It is located in urban area. It is located in <span className="fw-bold">VALSAD</span> block of <span className="fw-bold">VALSAD</span> district of Gujarat. The school consists of grades from 1 to 5. The school is co-educational and it have an attached pre-primary section. The school is N/A in nature and is not using school building as a shift-school. English is the medium of instructions in this school. This school is approachable by all weather road. In this school academic session starts in April.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 justify-content-around g-5 align-items-center">
                        <Col xs='11' className="h-50 d-md-none d-xs-block column bg-white p-4 shadow rounded"  data-aos='fade-left' data-aos-delay='50' >
                            <img src={sidePhoto2} alt="student teacher with blackboard" className="img-fluid rounded-3"/>
                        </Col>
                        <Col md='7' xs='12' className="column" data-aos='fade-right' >
                            <p className="text-p bg-white rounded p-4">
                            The school has Private building. It has got 6 classrooms for instructional purposes. All the classrooms are in good condition. It has 2 other rooms for non-teaching activities. The school has a separate room for Head master/Teacher. The school has Pucca boundary wall. The school has have electric connection. The source of Drinking Water in the school is Tap Water and it is functional. The school has 1 boys toilet and it is functional. and 1 girls toilet and it is functional. The school has a playground. The school has a library and has 200 books in its library. The school does not need ramp for disabled children to access classrooms. The school has 4 computers for teaching and learning purposes and all are functional. The school is not having a computer aided learning lab. The school is Not Applicable providing mid-day meal.
                            </p>
                        </Col>
                        <Col md='4' className="h-50 d-none d-md-block column bg-white p-4 shadow rounded" data-aos='fade-left' >
                            <img src={sidePhoto2} alt="student teacher with blackboard" className="img-fluid rounded-3"/>
                        </Col>
                    </Row> */}
        </Container>
      </div>
      <HappeningNow />
    </section>
  );
};

export default AboutUs;
