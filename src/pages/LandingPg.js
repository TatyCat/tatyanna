import React, { Component } from 'react';
import avatarPic from '../images/randalyn-hill-1192073-unsplash.jpg'
// silver-keyboard-on-blue-background_4460x4460.jpg'
import landingPic from '../images/daniel-korpai-1124393-unsplash.jpg'

class LandingPg extends Component {
  render() {
    return (
      <>
        <section className="w3-black">
          {/* <!-- Icon Bar (Sidebar - hidden on small screens) --> */}
          <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
            {/* <!-- Avatar image in top left corner --> */}
            <img src={avatarPic} className="landing-image " style={{ width: "100%" }} />
            <a href="#" className="w3-bar-item w3-button w3-padding-large w3-black">
              <i className="fa fa-home w3-xxlarge"></i>
              <p>HOME</p>
            </a>
            <a href="#about" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
              <i className="fa fa-user w3-xxlarge"></i>
              <p>ABOUT</p>
            </a>
            <a href="#photos" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
              <i className="far fa-gem w3-xxlarge"></i>
              <p>PORTFOLIO</p>
            </a>
            <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
              <i className="fa fa-envelope w3-xxlarge"></i>
              <p>CONTACT</p>
            </a>
          </nav>


          {/* <!-- Navbar on small screens (Hidden on medium and large screens) --> */}
          <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
            <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
              <a href="#" className="w3-bar-item w3-button" style={{ width: "25% !important" }}>HOME</a>
              <a href="#about" className="w3-bar-item w3-button" style={{ width: "25% !important" }}>ABOUT</a>
              <a href="#photos" className="w3-bar-item w3-button" style={{ width: "25% !important" }}>PHOTOS</a>
              <a href="#contact" className="w3-bar-item w3-button" style={{ width: "25% !important" }}>CONTACT</a>
            </div>
          </div>

          {/* <!-- Page Content --> */}
          <div className="w3-padding-large" id="main">
            {/* <!-- Header/Home --> */}
            <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
              <h1 className="w3-jumbo"><span className="w3-hide-small">I am</span> Tatyanna Cobb.</h1>
              <p>Full Stack Ruby and React Developer.</p>
              <img src={landingPic} alt="computer vibes" className="w3-image landing-image" width="992" height="1108" />
            </header>

            {/* <!-- About Section --> */}
            <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
              <h2 className="w3-text-light-grey">Who am I?</h2>
              <hr className="width:200px" className="w3-opacity" />
              <p>I am Tatyanna and I have a deep love for creating beautiful and cleanly written web and mobile applications. My enthusasm for creating is coupled with an interest in startup culture and a relentless work ethic. As a native of Tampa Bay, I enjoy attending tech and startup meetups. This  includes Code for Tampa Bay (a branch of Code for America), meetups sponsored by Suncoast Developers Guild, Startup Weekend, StartupBus 2018 and more. When I am not off attending a meetup, programming or volunteering, you can find me enjoying a light hearted anime or in a library enjoying a non-fiction book.
              </p>
              <article className="skills">
                <section className="top-tech-skills">
                  <h3 className="w3-padding-16 w3-text-light-grey">Top Skills</h3>
                  <p className="w3-wide">CSS <i class="fab fa-css3-alt"></i></p>
                  <p className="w3-wide">JavaScript <i class="fab fa-js"></i></p>
                  <p className="w3-wide">React <i class="fab fa-react"></i></p>
                  <p className="w3-wide">Ruby <i class="far fa-gem"></i></p>
                  <p className="w3-wide">PostgreSQL <i class="fas fa-database"></i></p>
                  <p className="w3-wide">Rails <i class="far fa-gem"></i></p>
                </section>

                {/* <!-- Soft Skills --> */}
                <section className="top-soft-skills">
                  <h3 className="w3-padding-16 w3-text-light-grey">Top Soft Skills</h3>
                  <p className="w3-wide">Empathy <i class="fas fa-check"></i></p>
                  <p className="w3-wide">Problem Solving <i class="fas fa-check"></i></p>
                </section>
              </article>

              <br />

              <p className="w3-center">
                <button disabled className="w3-button w3-light-grey w3-padding-large w3-section">
                  <a href={"https://www.-.com"} target="_blank"></a><i className="fa fa-download w3-disabled"></i> Download Resume
                </button>
              </p>
              {/* <!-- End About Section --> */}
            </div>

            <br />

            {/* <!-- Portfolio Section --> */}
            <div className="w3-padding-64 w3-content" id="photos">
              <h2 className="w3-text-light-grey">Portfolio</h2>
              <hr style={{ width: "200px" }} className="w3-opacity" />

              {/* <!-- Grid for photos --> */}
              <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
                <div className="w3-half">
                  <img src="/w3images/wedding.jpg" style={{ width: "100%" }} />
                  <img src="/w3images/rocks.jpg" style={{ width: "100%" }} />
                  <img src="/w3images/sailboat.jpg" style={{ width: "100%" }} />
                </div>

                <div className="w3-half">
                  <img src="/w3images/underwater.jpg" style={{ width: "100%" }} />
                  <img src="/w3images/chef.jpg" style={{ width: "100%" }} />
                  <img src="/w3images/wedding.jpg" style={{ width: "100%" }} />
                  <img src="/w3images/p6.jpg" style={{ width: "100%" }} />
                </div>
                {/* <!-- End photo grid --> */}
              </div>
              {/* <!-- End Portfolio Section --> */}
            </div>

            {/* <!-- Contact Section --> */}
            <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
              <h2 className="w3-text-light-grey">Contact Me</h2>
              <hr style={{ width: "200px" }} className="w3-opacity" />

              <p>If you believe I would be a great fit with your company,<br /> <span className="w3-large">let's get in touch:</span></p>

              <form action="#">
                <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name" /></p>
                <p><input className="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email" /></p>
                <p><input className="w3-input w3-padding-16" type="text" placeholder="Subject" required name="Subject" /></p>
                <p><input className="w3-input w3-padding-16" type="text" placeholder="Message" required name="Message" /></p>
                <p>
                  <button className="w3-button w3-light-grey w3-padding-large" type="submit">
                    <i className="fa fa-paper-plane w3-ruby"></i> SEND MESSAGE
                </button>
                </p>
              </form>
              <br />


              <div className="w3-section">
                <div className="w3-row w3-center w3-padding-16 w3-section w3-border ">
                  <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">
                      <a href="https://twitter.com/DevTaty" target="_blank"><i className="fab fa-twitter w3-hover-opacity w3-hover-ruby"></i></a>
                    </span>
                    <br />
                    Twitter
                </div>
                  <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">
                      <a href="https://www.linkedin.com/in/tatyannac/" target="_blank"><i className=" fab fa-linkedin-in w3-hover-opacity w3-hover-ruby"></i></a>
                    </span>
                    <br />
                    LinkedIn
                </div>
                  <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">
                      <a href="mailto:tatyanna.cobb@gmail.com" target="_blank"><i className="w3-hover-opacity fas fa-envelope w3-hover-opacity w3-hover-ruby"></i></a>
                    </span>
                    <br />
                    Email
                </div>
                  <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">
                      <a href="https://paypal.me/DevTatyanna"><i className="fas fa-donate w3-hover-opacity w3-hover-ruby"></i>
                      </a>
                    </span>
                    <br />
                    Paypal
                  </div>
                </div>
              </div>

              {/* <!-- End Contact Section --> */}
            </div>


            {/* <!-- END PAGE CONTENT --> */}
          </div>


        </section >
      </>

    );
  }
}

export default LandingPg;