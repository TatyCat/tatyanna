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
              <p>I am Tatyanna and I have a deep love for creating beautiful and cleanly written web and mobile applications. My enthusasm for creating is coupled with an interest in startup culture and a relentless work ethic. As a native of Tampa Bay, I enjoy attending tech and startup meetups. This  includes Code for Tampa Bay (a branch of Code for America), meetups sponsored by Suncoast Developers Guild, Startup Weekend, StartupBus 2018 and more.
              </p>

              <h3 className="w3-padding-16 w3-text-light-grey">Top Skills</h3>
              <p className="w3-wide">CSS</p>
              <div className="w3-white">
                <div className="w3-dark-grey" style={{ height: "28px", width: "85%" }}></div>
              </div>
              <p className="w3-wide">JavaScript</p>
              <div className="w3-white">
                <div className="w3-dark-grey" style={{ height: "28px", width: "55%" }}></div>
              </div>
              <p className="w3-wide">React</p>
              <div className="w3-white">
                <div className="w3-dark-grey" style={{ height: "28px", width: "60%" }}></div>
              </div>

              <p className="w3-wide">PostgreSQL</p>
              <div className="w3-white">
                <div className="w3-dark-grey" style={{ height: "28px", width: "50%" }}></div>
              </div>
              <p className="w3-wide">Ruby</p>
              <div className="w3-white">
                <div className="w3-dark-grey" style={{ height: "28px", width: "55%" }}></div>
              </div>
              <p className="w3-wide">Rails</p>
              <div className="w3-white">
                <div className="w3-dark-grey" style={{ height: "28px", width: "80%" }}></div>
              </div>


              <p className="w3-wide">Problem Solving</p>
              <div className="w3-white">
                <div className="w3-dark-grey" style={{ height: "28px", width: "90%" }}></div>
              </div>

              <br />

              <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
                <div className="w3-quarter w3-section">
                  <span className="w3-xlarge">11+</span><br />
                  Partners
                </div>
                <div className="w3-quarter w3-section">
                  <span className="w3-xlarge">55+</span><br />
                  Projects Done
                </div>
                <div className="w3-quarter w3-section">
                  <span className="w3-xlarge">89+</span><br />
                  Happy Clients
                </div>
                <div className="w3-quarter w3-section">
                  <span className="w3-xlarge">150+</span><br />
                  Meetings
                </div>
              </div>


              <button className="w3-button w3-light-grey w3-padding-large w3-section">
                <i className="fa fa-download"></i> Download Resume
    </button>

              {/* <!-- Grid for pricing tables --> */}
              <h3 className="w3-padding-16 w3-text-light-grey">My Price</h3>
              <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
                <div className="w3-half w3-margin-bottom">
                  <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
                    <li className="w3-dark-grey w3-xlarge w3-padding-32">Basic</li>
                    <li className="w3-padding-16">Web Design</li>
                    <li className="w3-padding-16">Photography</li>
                    <li className="w3-padding-16">5GB Storage</li>
                    <li className="w3-padding-16">Mail Support</li>
                    <li className="w3-padding-16">
                      <h2>$ 10</h2>
                      <span className="w3-opacity">per month</span>
                    </li>
                    <li className="w3-light-grey w3-padding-24">
                      <button className="w3-button w3-white w3-padding-large w3-hover-black">Sign Up</button>
                    </li>
                  </ul>
                </div>

                <div className="w3-half">
                  <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
                    <li className="w3-dark-grey w3-xlarge w3-padding-32">Pro</li>
                    <li className="w3-padding-16">Web Design</li>
                    <li className="w3-padding-16">Photography</li>
                    <li className="w3-padding-16">50GB Storage</li>
                    <li className="w3-padding-16">Endless Support</li>
                    <li className="w3-padding-16">
                      <h2>$ 25</h2>
                      <span className="w3-opacity">per month</span>
                    </li>
                    <li className="w3-light-grey w3-padding-24">
                      <button className="w3-button w3-white w3-padding-large w3-hover-black">Sign Up</button>
                    </li>
                  </ul>
                </div>
                {/* <!-- End Grid/Pricing tables --> */}
              </div>

              {/* <!-- Testimonials --> */}
              <h3 className="w3-padding-24 w3-text-light-grey">My Reputation</h3>
              <img src="/w3images/bandmember.jpg" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: "80px" }} />
              <p><span className="w3-large w3-margin-right">Chris Fox.</span> CEO at Mighty Schools.</p>
              <p>Jane Doe saved us from a web disaster.</p><br />

              <img src="/w3images/avatar_g2.jpg" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: "80px" }} />
              <p><span className="w3-large w3-margin-right">Rebecca Flex.</span> CEO at Company.</p>
              <p>No one is better than Jane Doe.</p>
              {/* <!-- End About Section --> */}
            </div>

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

              <div className="w3-section">


              </div><br />

              <p>Lets get in touch. Send me a message:</p>

              <form action="/action_page.php" target="_blank">
                <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name" /></p>
                <p><input className="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email" /></p>
                <p><input className="w3-input w3-padding-16" type="text" placeholder="Subject" required name="Subject" /></p>
                <p><input className="w3-input w3-padding-16" type="text" placeholder="Message" required name="Message" /></p>
                <p>
                  <button className="w3-button w3-light-grey w3-padding-large" type="submit">
                    <i className="fa fa-paper-plane"></i> SEND MESSAGE
                                    </button>
                </p>
              </form>
              {/* <!-- End Contact Section --> */}
            </div>

            {/* <!-- Footer --> */}
            <footer className="w3-content w3-padding-64 w3-text-grey w3-xlarge">

              <a href="https://twitter.com/DevTaty" target="_blank"><i className="w3-margin-right fab fa-twitter w3-hover-opacity"></i></a>

              <a href="https://www.linkedin.com/in/tatyannac/" target="_blank"><i className="w3-margin-right fab fa-linkedin-in w3-hover-opacity"></i></a>

              <a href="mailto:tatyanna.cobb@gmail.com" target="_blank"><i className="w3-hover-opacity w3-margin-right fas fa-envelope w3-hover-opacity"></i></a>

              <a href="https://paypal.me/DevTatyanna"><i className="fas fa-donate w3-hover-opacity"></i>
              </a>

              {/* <!-- End footer --> */}
            </footer>

            {/* <!-- END PAGE CONTENT --> */}
          </div>


        </section>
      </>

    );
  }
}

export default LandingPg;