import React, { Component } from 'react';

import avatarPic from '../images/randalyn-hill-1192073-unsplash.jpg'
import landingPic from '../images/daniel-korpai-1124393-unsplash.jpg'
import stitchMateCapstone from '../images/stitchMateCapstone.png'
import reactColorPick from '../images/reactColorPick.png'
import wordUp from '../images/wordUp.png'
import schoolApp from '../images/schoolApp.png'


class LandingPg extends Component {
  render() {
    return (
      <>
        <section className="w3-black">
          {/* <!-- Icon Bar (Sidebar - hidden on small screens) --> */}
          <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
            {/* <!-- Avatar image in top left corner --> */}
            <img src={avatarPic} className="landing-image " alt="Macbook Laptop" style={{ width: "100%" }} />
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
              <a href="#" className="w3-bar-item w3-button" >HOME</a>
              <a href="#about" className="w3-bar-item w3-button">ABOUT</a>
              <a href="#photos" className="w3-bar-item w3-button">PORTFOLIO</a>
              <a href="#contact" className="w3-bar-item w3-button">CONTACT</a>
            </div>
          </div>

          {/* <!-- Page Content --> */}
          <div className="w3-padding-large" id="main">
            {/* <!-- Header/Home --> */}
            <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
              <h1 className="w3-jumbo w3-center"><span className="w3-hide-small">I am </span>Tatyanna Cobb</h1>
              <p>Full Stack Software Developer </p>
              <img src={landingPic} alt="computer vibes" className="w3-image landing-image" width="992" height="1108" />
            </header>

            {/* <!-- About Section --> */}
            <div className="w3-content w3-text-grey w3-padding-64" id="about">
              <h2 className="w3-text-light-grey">Tatyanna <span className="w3-text-grey">Cobb</span></h2>
              <hr className="width:200px w3-opacity" />
              <p>I have a deep love for creating beautiful and cleanly written web and mobile applications. My enthusiasm for creating is coupled with an interest in startup culture and a relentless work ethic. As a native of Tampa Bay, I enjoy attending tech and startup meetups. This  includes Code for Tampa Bay (a branch of Code for America), meetups sponsored by Suncoast Developers Guild, Startup Weekend, StartupBus 2018 and more. I continually seeking opportunities to grow and learn. When I am not off attending a meetup, programming or volunteering, you can find me enjoying a light hearted anime or in a library enjoying a non-fiction book.
              </p>
              <article className="skills">
                <section className="top-tech-skills">
                  <h3 className="w3-padding-16 w3-text-light-grey">Top Languages</h3>
                  <p className="w3-wide w3-large ">CSS <i className="fab fa-css3-alt"></i></p>
                  <p className="w3-wide w3-large ">JavaScript ES6 <i className="fab fa-js"></i></p>
                  <p className="w3-wide w3-large ">React <i className="fab fa-react"></i></p>
                  <p className="w3-wide w3-large  w3-large ">Ruby <i className="far fa-gem"></i></p>
                  <p className="w3-wide w3-large ">PostgreSQL <i className="fas fa-database"></i></p>
                  <p className="w3-wide w3-large ">Rails <i className="far fa-gem"></i></p>
                </section>

                {/* <!-- Soft Skills --> */}
                <section className="top-soft-skills">
                  <h3 className="w3-padding-16 w3-text-light-grey">Top Soft Skills</h3>
                  <p className="w3-wide w3-large ">Empathy <i className="fas fa-check"></i></p>
                  <p className="w3-wide w3-large">Problem Solving<i className="fas fa-check  w3-large "></i></p>
                  <p className="w3-wide w3-large ">Adaptability <i className="fas fa-check"></i></p>
                  <p className="w3-wide w3-large ">Leadership <i className="fas fa-check"></i></p>
                  <p className="w3-wide w3-large ">Communication <i className="fas fa-check"></i></p>
                  <p className="w3-wide w3-large ">Interpersonal <i className="fas fa-check"></i></p>
                </section>
              </article>
              <section className="top-work-skills">
                <h3 className="w3-padding-16 w3-text-light-grey">Unicorn Skills</h3>
                <section>
                  <p className="w3-wide">GIT</p>
                  <p className="w3-wide">GITHUB</p>
                  <p className="w3-wide">AXIOS</p>
                  <p className="w3-wide">FETCH</p>
                  <p className="w3-wide">MYSQL</p>
                  <p className="w3-wide">ACTIVE RECORD</p>
                  <p className="w3-wide">FLASK</p>
                  <p className="w3-wide">DJANGO</p>
                  <p className="w3-wide">PYTHON</p>
                  <p className="w3-wide">RESPONSIVE DESIGN</p>
                  <p className="w3-wide">FLEXBOX</p>
                  <p className="w3-wide">NPM</p>
                  <p className="w3-wide">YARN</p>
                  <p className="w3-wide">REST API</p>
                  <p className="w3-wide">PGCLI</p>
                  <p className="w3-wide">REACT ROUTER</p>
                  <p className="w3-wide">WEB DEVELOPMENT</p>
                  <p className="w3-wide">IOS DEVELOPMENT</p>
                  <p className="w3-wide">REACT NATIVE</p>
                  <p className="w3-wide">SWIFT</p>
                  <p className="w3-wide">XCODE</p>
                  <p className="w3-wide">JAVASCRIPT</p>
                  <p className="w3-wide">SLACK</p>
                  <p className="w3-wide">DISCORD</p>
                  <p className="w3-wide">SINATRA</p>
                  <p className="w3-wide">POSTMAN</p>
                  <p className="w3-wide">WIREFRAMING</p>
                  <p className="w3-wide">NODE</p>
                  <p className="w3-wide">SKETCH</p>
                  <p className="w3-wide">PHOTOSHOP</p>
                  <p className="w3-wide">BASH TERMINAL</p>
                  <p className="w3-wide">VISUAL STUDIO CODE</p>
                </section>
              </section>

              <br />

              <p className="w3-center">
                <a href="https://drive.google.com/file/d/1Xi7AcKrFvnRqLtdvreJqobKKWbIIz7HA/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="w3-button w3-light-grey w3-padding-large w3-section">
                  <i className="fa fa-download w3-disabled"></i> Download Resume
                </button>
                </a>
              </p>
              {/* <!-- End About Section --> */}
            </div>

            <br />

            {/* <!-- Portfolio Section --> */}
            <div className="w3-padding-64 w3-content" id="photos">
              <h2 className="w3-text-light-grey">Portfolio</h2>
              <hr style={{ width: "200px" }} className="w3-opacity" />
              <p className="w3-text-grey">See below for my top completed projects. Check back in the future for new projects that will continually be added. </p>

              {/* <!-- Portfolio Grid --> */}
              <div className="w3-row-padding" style={{ margin: "0 -16px" }}>

                <section className="top-work-skills w3-half">
                  <img className="w3-padding portfolio-img w3-block " alt="StitchMate Capstone App" src={stitchMateCapstone} />
                  <section>
                    <button className="w3-button w3-ripple w3-margin  w3-padding-large w3-border">
                      <a href="https://github.com/TatyCat/stitchmate" rel="noopener noreferrer" target="_blank" >
                        VIEW THE CODE
                      </a>
                    </button>

                    <button className="w3-margin w3-ripple w3-button w3-padding-large w3-border">
                      <a href="https://stitchmate.herokuapp.com/" rel="noopener noreferrer" target="_blank" >
                        SEE IT LIVE
                      </a>
                    </button>
                  </section>
                </section>

                <section className="top-work-skills w3-half">
                  <img className="w3-padding portfolio-img w3-block " alt="WordUp App" src={wordUp} />
                  <section>
                    <button className="w3-button w3-ripple w3-margin  w3-padding-large w3-border">
                      <a href="https://github.com/TatyCat/wordup" rel="noopener noreferrer" target="_blank" >
                        VIEW THE CODE
                    </a>
                    </button>

                    <button className="w3-margin w3-ripple w3-button w3-padding-large w3-border">
                      <a href="https://wordup-luckytaty.netlify.com/" rel="noopener noreferrer" target="_blank" >
                        SEE IT LIVE
                    </a>
                    </button>
                  </section>
                </section>

                <section className="top-work-skills w3-half">
                  <img className="w3-padding portfolio-img w3-block " alt="ColorPick with React Hooks App" src={schoolApp} />
                  <section>
                    <button className="w3-button w3-ripple w3-margin w3-padding-large w3-border">
                      <a href="https://github.com/TatyCat/schoolapp" rel="noopener noreferrer" target="_blank" >
                        VIEW THE CODE
                    </a>
                    </button>

                    <button className="w3-margin w3-ripple w3-button w3-padding-large w3-border">
                      <a href="https://schoolapp-luckytaty.netlify.com/" rel="noopener noreferrer" target="_blank" >
                        SEE IT LIVE
                      </a>
                    </button>
                  </section>
                </section>

                <section className="top-work-skills w3-half">
                  <img className="w3-padding portfolio-img w3-block " alt="ColorPick with React Hooks App" src={reactColorPick} />
                  <section>
                    <button className="w3-button w3-margin  w3-padding-large w3-border w3-ripple">
                      <a href="https://github.com/TatyCat/colorpickrevampedhooks" rel="noopener noreferrer" target="_blank" >
                        VIEW THE CODE
                    </a>
                    </button>

                    <button className="w3-margin w3-button w3-padding-large w3-border w3-ripple">
                      <a href="https://colorpickrevampedhooks-tatycat.netlify.com/" rel="noopener noreferrer" target="_blank" >
                        SEE IT LIVE
                      </a>
                    </button>
                  </section>
                </section>

              </div>
              {/* <!-- End Portfolio Section & Grid--> */}
            </div>

            {/* <!-- Contact Section --> */}
            <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
              <h2 className="w3-text-light-grey">Contact Me</h2>
              <hr style={{ width: "200px" }} className="w3-opacity" />

              <p>If you believe I would be a great fit with your company,<br /> let's get in touch:</p>

              <form action="https://formspree.io/tatyanna.cobb@gmail.com" method="POST">
                <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name" /></p>
                <p><input className="w3-input w3-padding-16" type="text" placeholder="Email" required name="_replyto" /></p>
                <p><input className="w3-input w3-padding-16" type="text" placeholder="Subject" name="Subject" /></p>
                <p><textarea className="w3-input w3-padding-16 text-area" type="text" placeholder="Message" required name="Message" /></p>
                <p>
                  <button className="w3-button w3-padding-large" type="submit" >
                    <i className="fa fa-paper-plane w3-ruby"></i> SEND MESSAGE
                  </button>
                </p>
              </form>

              <br />

              <div className="w3-section">
                <div className="w3-row w3-center w3-padding-16 w3-section w3-border ">
                  <div className="w3-quarter w3-section ">
                    <span className="w3-xlarge">
                      <a href="https://github.com/TatyCat" target="_blank" rel="noopener noreferrer" ><i className=" fab fa-github w3-hover-opacity"></i></a>
                    </span>
                    <br />
                    Github
                  </div>
                  <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">
                      <a href="https://twitter.com/DevTaty" target="_blank" rel="noopener noreferrer" ><i className="fab fa-twitter w3-hover-opacity"></i></a>
                    </span>
                    <br />
                    Twitter
                  </div>
                  <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">
                      <a href="https://www.linkedin.com/in/tatyannac/" target="_blank" rel="noopener noreferrer" ><i className=" fab fa-linkedin-in w3-hover-opacity"></i></a>
                    </span>
                    <br />
                    LinkedIn
                  </div>
                  <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">
                      <a href="mailto:tatyanna.cobb@gmail.com" target="_blank" rel="noopener noreferrer" ><i className="w3-hover-opacity fas fa-envelope"></i></a>
                    </span>
                    <br />
                    Email
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