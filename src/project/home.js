import react, { useState } from 'react';

const Home = () => {
  const [fullname,setFullname]=useState({
       fname:"",
       email:"",
       subject:"",
       messege:""
  });
  const formsubmit=(e)=>{
    e.preventDefault();
    alert("call");
    let fname=fullname.fname;
    let email=fullname.email;
    let subject=fullname.subject;
    let message=fullname.messege;
    let output={fname,email,subject,message}
    console.log("output",output);
   
  }
  const inputEvent=(event)=>{
    
    const{name,value}=event.target
    setFullname((pre)=>{
      console.log(pre);
      return{
        ...pre,
        [name]:value
      }
    })
  }
  return (
    <>
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
      <header id="header">
        <div className="d-flex flex-column">

          <div className="profile">
            <img src="assets/img/bhautik.jpg.jpg" alt="nfnf" className="img-fluid rounded-circle" />
            <h1 className="text-light"><a href="index.html">BHAUTIK</a></h1>
            <div className="social-links mt-3 text-center">
              <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
              <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
              <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
              <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <h1>BHAUTIK PRAJAPTI</h1>
          <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
        </div>
      </section>



      <main id="main">

        <section id="about" className="about">
          <div className="container">

            <div className="section-title">
              <h2>About</h2>
             
            </div>

            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img src="assets/img/bhautik2.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>UI  Designer &amp; Web Developer.</h3>
                <p className="fst-italic">

                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>7/6/2001</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>7984501900</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>GUJARAT AHEMEDABAD</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>20</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>bhautikprajapti609@gmail.com</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                    </ul>
                  </div>
                </div>
                <p>
                </p>
              </div>
            </div>

          </div>
        </section>



        <section id="skills" className="skills section-bg">
          <div className="container">

            <div className="section-title">
              <h2>Skills</h2>
            
            </div>

            <div className="row skills-content">

              <div className="col-lg-6" data-aos="fade-up">

                <div className="progress">
                  <span className="skill">HTML <i className="val">100%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">CSS <i className="val">90%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">JavaScript <i className="val">75%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                <div className="progress">
                  <span className="skill">React <i className="val">80%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">angular <i className="val">70%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">node.js <i className="val">80%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>


              </div>

            </div>

          </div>
        </section>

        <section id="resume" className="resume">
          <div className="container">

            <div className="section-title">
              <h2>Resume</h2>
              
            </div>

            <div className="row">
              <div className="col-lg-6" data-aos="fade-up">
                <h3 className="resume-title">Sumary</h3>
                <div className="resume-item pb-0">
                  <h4>BHAUTIK PRAJAPATI</h4>
                  <p><em> I AM FRESHER </em></p>
                  <ul>
                    <li>7984501900</li>
                    <li>bhautikprajapti609@gmail.com</li>
                  </ul>
                </div>

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>MSC(CA&IT)MASTER OF SCIENCE COMPUTER APPLICATION AND INFORAMATION TECHNOLOGY</h4>
                  <h5>running</h5>
                 <p>my Master degree running in ks school of busssiness management</p>
                </div>
                <div className="resume-item">
                  <h4>BSC(CA&IT)BECHELOR OF SCIENCE COMPUTER APPLICATION AND INFORATION TECHNOLOGY</h4>
                  <h5>2018-2021</h5>  
                  <p><em>i did my graduation from ks school of bussiness management</em></p>
                  <p>i have craete 1 project in agular & node js in my 3 year project name is electronic show room system.link are below</p>
                  <a href="http://github.com/bhautik609/customersid">click for customer frontend</a><br />
                  <a href="http://github.com/bhautik609/frontend">click for admin frontend</a><br/>
                  <a href="http://github.com/bhautik609/deliveryboy">click for delivery frontend</a><br />
                  <a href="http://github.com/bhautik609/electronicshowroom">click for backend frontend</a>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="resume-title">programing language are know</h3>
                <div className="resume-item">
                  
                 
                  <ul>
                    <li>c,c++</li>
                    <li>html,css,JavaScript</li>
                    <li>React,angular</li>
                    <li>node js,phpmysql,mongodb,expressjs</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>EDUCATION DETAIL</h4>
                  
                  
                  <ul>
                    <li>10 ||GUJARAT BOARD || 50%</li>
                    <li>12 ||GUJARAT BOARD || 75%</li>
                    
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

      <section id="contact" className="contact">
          <div className="container">

            <div className="section-title">
              <h2>Contact</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="row" data-aos="fade-in">

              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>VASTRAL,AHEMEDABAD</p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>bhautikprajapti609@gmail.com</p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>7984501900</p>
                  </div>

                </div>

              </div>

              <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form  role="form" className="php-email-form" onSubmit={formsubmit}>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label for="name">Your Name</label>
                      <input type="text" name="fname" className="form-control" id="name" required onChange={inputEvent} value={fullname.fname} />
                    </div>
                    <div className="form-group col-md-6">
                      <label for="name">Your Email</label>
                      <input type="email" className="form-control" name="email" id="email" required onChange={inputEvent} value={fullname.email} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="name">Subject</label>
                    <input type="text" className="form-control" name="subject" id="subject" required onChange={inputEvent} value={fullname.subject}/>
                  </div>
                  <div className="form-group">
                    <label for="name">Message</label>
                    <textarea className="form-control" name="messege" rows="10" required onChange={inputEvent} value={fullname.messege}></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>

            </div>

          </div>
        </section>
      </main>
      



    </>
  );
}

export default Home;