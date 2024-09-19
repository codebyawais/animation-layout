
'use client';
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./style.module.css"
import { PiChurchLight } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoTwitter } from "react-icons/bi";
export default function Home() {
  return (
    <>
      <div className={style.cont1}>
        <Navbar expand="xxl" className="bg-body-tertiry mb-3">
          <Container fluid>
            <Navbar.Brand href="#">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-xxl`}
              aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
                  LOGO
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-xxl`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>







      {/* section1 start */}
      <div className={style.sec1}>
        <div className={style.sec1content}>
          <h1>Welcome to Christian Church</h1>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse. </p>
          <div style={{ marginTop: "50px" }}><a href="https://github.com/" style={{ color: "white", }}>code by awais</a></div>


          <br />
          <button className={style.sendbtn3} >READ MORE</button>



        </div>
      </div>

      {/* section1 end */}

      <div className={style.textsec1}>
        <div className={style.textsec2}>
          <h1>We can to help you know and experience the love of Jesus.</h1>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>
      </div>



      <div className={style.sec3}>

        <div className={`row ${style.row1}`} >
          <div className={`col-sm-4 ${style.col1}`}>
            <div className={style.card1}>
              <PiChurchLight style={{ width: "100px", height: '80px' }} />
              <h4>The Church</h4>
              <p style={{ textAlign: 'center' }}>   Sample text. Click to select the text box.</p>
            </div>
          </div>
          <div className={`col-sm-4 ${style.col1}`}>
            <div className={style.card1}>
              <PiChurchLight style={{ width: "100px", height: '80px' }} />
              <h4>Our Mission</h4>
              <p style={{ textAlign: 'center' }}>   Sample text. Click to select the text box.</p>
            </div>
          </div>
          <div className={`col-sm-4 ${style.col1}`}>
            <div className={style.card1}>
              <PiChurchLight style={{ width: "100px", height: '80px' }} />
              <h4>Bible</h4>
              <p style={{ textAlign: 'center' }}>   Sample text. Click to select the text box.</p>
            </div>
          </div>

        </div>

      </div>





      {/* section four start */}
      <div className={style.imgssec}>
        <div className={style.bgcircle1}></div>
        <div className={style.bgcircle2}></div>

        <div className={style.bgimg1}></div>
        <div className={style.bgimg2}></div>
        <div className={style.bgimgtext}>
          <div className={`${style.card2} ${style.welcome}`}>
            <h1>Welcome!</h1>
            <p>Elit ut aliquam purus sit amet luctus venenatis. Ridiculus mus mauris vitae ultricies leo integer
              malesuada. Massa enim nec dui nunc mattis enim. Sagittis vitae et leo duis ut. Lacus suspendisse faucibus interdum.</p>
            <div style={{ marginTop: "0px" }}><a href="https://github.com/" >code by awais</a></div>
            <button className={style.sendbtn3} style={{ backgroundColor: "lightskyblue" }}>LEARN MORE</button>

          </div>

        </div>


      </div>




      {/* section four end */}


      {/* section five start */}


      <div className={style.leader}>
        <h1 >Our Leaders</h1>
      </div>





      {/* section five end */}


      <div className={style.sec5} >
        <div className={`row ${style.rowsec5}`} >
          <div className={`col-sm-4 ${style.col11}`}>
            <div style={{ border: "" }}>


              <Image className={style.imgrotate}
                src="/images/111.jpg"
                width={230}
                height={230}
                style={{ borderRadius: "100%", marginLeft: "40px" }}
              />
              <h1>Adam Jonson</h1>
              <h4>Founder Pastor</h4>
              <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
              <div style={{ display: 'flex', justifyContent: "center", gap: "10px", }}>
                <FaFacebookF style={{ fontSize: '25px' }} />
                <BiLogoTwitter style={{ fontSize: '25px' }} />
                <FaInstagram style={{ fontSize: '25px' }} />
                <IoLogoLinkedin style={{ fontSize: '25px' }} />
              </div>

            </div>
          </div>
          <div className={`col-sm-4 ${style.col11}`}>
            <div style={{ border: " " }}>


              <Image className={style.imgrotate}
                src="/images/545.jpg"
                width={230}
                height={230}
                style={{ borderRadius: "100%", marginLeft: "40px" }}
              />
              <h1>Bob Greenfield</h1>
              <h4> Pastor</h4>
              <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
              <div style={{ display: 'flex', justifyContent: "center", gap: "10px", }}>
                <FaFacebookF style={{ fontSize: '25px' }} />
                <BiLogoTwitter style={{ fontSize: '25px' }} />
                <FaInstagram style={{ fontSize: '25px' }} />
                <IoLogoLinkedin style={{ fontSize: '25px' }} />
              </div>

            </div>
          </div>














          <div className={`col-sm-4 ${style.col11}`}>
            <div style={{ border: "", }}>


              <Image className={style.imgrotate}
                src="/images/4576547.jpg"
                width={230}
                height={230}
                style={{ borderRadius: "100%", marginLeft: "40px" }}
              />
              <h1>Bob Hudson</h1>
              <h4>Volunteer</h4>
              <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
              <div style={{ display: 'flex', justifyContent: "center", gap: "10px", }}>
                <FaFacebookF style={{ fontSize: '25px' }} />
                <BiLogoTwitter style={{ fontSize: '25px' }} />
                <FaInstagram style={{ fontSize: '25px' }} />
                <IoLogoLinkedin style={{ fontSize: '25px' }} />
              </div>

            </div>
          </div>


          {/* <div className={`col-sm-4 ${style.col11}`}>2</div>
          <div className={`col-sm-4 ${style.col11}`}>3</div> */}
        </div>
      </div>


      <div style={{ marginTop: "50px", textAlign: 'center' }}><a href="https://github.com/" >code by awais</a>
        <p style={{ marginTop: "20px" }}> https://assets.nicepagecdn.com/d2cc3eaa/378349/images/Untitled-2536.jpg </p></div>












      <div className={style.onlineimgs}>
        <div className={`row ${style.rowsec512}`} >
          <div className={`col-sm-4 ${style.col12}`}>
            <Image className={style.imgbtm}
              src="/images/online1.jpg"
              width={350}
              height={550}
              style={{}}
            />
          </div>
          <div className={`col-sm-3 ${style.col12}`}>
            <Image className={style.imgbtm2}
              src="/images/4577.jpg"
              width={250}
              height={230}
              style={{}}
            />
            <Image className={style.imgbtm3}
              src="/images/67568.jpg"
              width={250}
              height={230}
              style={{ marginTop: '15px' }}
            />
            <div style={{ marginTop: "20px", }}><a href="https://github.com/" >code by awais</a> </div>



          </div>
          <div className={`col-sm-5 ${style.colimgtxt12}`}>
            <div>
              <h1>Online Church Community</h1>
              <p> Tincidunt arcu non sodales neque sodales ut etiam sit.
                Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Eu augue ut lectus arcu bibendum at varius.</p>
              <button className={style.sendbtn3} style={{ backgroundColor: "lightskyblue", color: 'white' }}>LEARN MORE</button>

            </div>
          </div>
        </div>
      </div>





      {/* chrush */}
      <div className={style.seccrush}>
        <div className={style.seccrush1}>
          <h1>Welcome to Christian Church
          </h1>
        </div>

      </div>




      <div className={style.sec7}>
        <div className={`row ${style.sec7img}`} >
          <div className={`col-sm-4 ${style.colimgtxt12}`}>
            <div>
              <div className={style.bgimg01}>
                <div className={style.headtxt}>
                  <h4>Sample Headline</h4>
                  <i style={{ margin: '10px' }}>Sample text. Click to select the text box.
                    Click again or double click to start editing the text</i>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-sm-4 ${style.colimgtxt12}`}>
            <div>
              <div className={style.bgimg02}>
                <div className={style.headtxt}>
                  <h4>Sample Headline</h4>
                  <i style={{ margin: '10px' }}>Sample text. Click to select the text box.
                    Click again or double click to start editing the text</i>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-sm-4 ${style.colimgtxt12}`}>
            <div>
              <div className={style.bgimg03}>
                <div className={style.headtxt}>
                  <h4>Sample Headline</h4>
                  <i style={{ margin: '10px' }}>Sample text. Click to select the text box.
                    Click again or double click to start editing the text</i>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>








      <div className={style.sec8par}>
        <div className={`row ${style.sec8}`} >
          <div className={`col-sm-6 ${style.sec8frm}`}>
            <div className={style.quest} >
              <h1>Quick Questions You May Have</h1>
              <p>Etiam erat velit scelerisque in dictum non consectetur. Nisl
                purus in mollis nunc sed id semper. Cras fermentum odio eu feugiat pretium nibh ipsum.</p>
              <button className={style.sendbtn3} style={{ backgroundColor: "lightskyblue", color: 'white' }}>LEARN MORE</button>

            </div>
          </div>
          <div className={`col-sm-6 ${style.sec8frm2}`}>
            <div className={style.questi} >

              <Button className={style.btnsss} >Why should I wear?  </Button>
              <Button className={style.btnsss} >Where can I park on campus? </Button>
              <Button className={style.btnsss} >Where do I go  for workship?  </Button>
              <Button className={style.btnsss} >Do small groups meet on sundays?  </Button>
              <Button className={style.btnsss} >Where are your office hours?  </Button>



            </div>
          </div>
        </div>
      </div>



      {/* <div className={style.sec9par}>
        <div className={style.sec9imgpr}>
          <div className={style.sec9img}>  </div>
            <div className={style.sec9inp}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>



        </div>
      </div> */}


















      {/* footer */}
      <div className={style.footer}>
        <div className={style.footertext}>
          <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
          <p style={{ marginTop: "70px" }}> Website Templates created with Website Builder Software.</p>
        </div>
      </div>


    </>
  );
}
