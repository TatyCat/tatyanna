import React, { Component } from 'react';

import avatarPic from '../images/randalyn-hill-1192073-unsplash.jpg'
import landingPic from '../images/drew-beamer-PL6ClUWwDEw-unsplash.jpg'


class LandingPg extends Component {
  render() {
    return (
      <>
        <section>
          {/* <!-- Icon Bar (Sidebar - hidden on small screens) --> */}
          <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center w3-black ">
            {/* <!-- Avatar image in top left corner --> */}
            <img src={avatarPic} className="landing-image " alt="Macbook Laptop" style={{ width: "100%" }} />
            <a href="#" className="w3-bar-item w3-button w3-padding-large w3-hover-nav">
              <i className="fa fa-home w3-xxlarge"></i>
              <p>HOME</p>
            </a>
            <a href="#about" className="w3-bar-item w3-button w3-padding-large w3-hover-nav">
              <i className="fa fa-user w3-xxlarge"></i>
              <p>ABOUT</p>
            </a>
            <a href="#portfolio" className="w3-bar-item w3-button w3-padding-large w3-hover-nav">
              <i className="far fa-folder-open w3-xxlarge"></i>
              <p>PORTFOLIO</p>
            </a>
            <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hover-nav">
              <i className="fa fa-envelope w3-xxlarge"></i>
              <p>CONTACT</p>
            </a>
          </nav>


          {/* <!-- Navbar on small screens (Hidden on medium and large screens) --> */}
          <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
            <div className="w3-bar w3-opacity w3-hover-opacity-off w3-center w3-small">
              <a href="#" className="w3-bar-item w3-button" >HOME</a>
              <a href="#about" className="w3-bar-item w3-button">ABOUT</a>
              <a href="#photos" className="w3-bar-item w3-button">PORTFOLIO</a>
              <a href="#contact" className="w3-bar-item w3-button">CONTACT</a>
            </div>
          </div>

          {/* <!-- Page Content --> */}
          <div className="w3-padding-large" id="main">
            {/* <!-- Header/Home --> */}
            <header className="w3-container w3-padding-32 w3-center" id="home">
              <h1 className="w3-jumbo w3-center"><span className="w3-hide-small">I am </span><span className=
                "CTA_highlight bold">Tatyanna</span> Cobb</h1>
              <h2 className="CTA_highlight w3-xlarge">SOFTWARE QUALITY ASSURANCE ENGINEER</h2>
              <img src={landingPic} alt="computer vibes" className="w3-image landing-image" />
            </header>

            {/* <!-- About Section --> */}
            <div className="w3-content w3-padding-64" id="about">
              <h2 className=""><span className="CTA_highlight">Tatyanna</span> <span className="w3-text-grey">Cobb</span></h2>
              <hr className="width:200px w3-opacity" />
              <p>
                {/* I have a deep love for creating beautiful and cleanly written web and mobile applications. My enthusiasm for creating is coupled with an interest in startup culture and a relentless work ethic.  */}
                As a native of Tampa Bay, I enjoy attending tech and startup meetups. This  includes Code for Tampa Bay (a branch of Code for America), meetups sponsored by Suncoast Developers Guild, Startup Weekend, StartupBus 2018 and more. I continually seeking opportunities to grow and learn. When I am not off attending a meetup, programming or volunteering, you can find me enjoying a light hearted anime or in a library enjoying a non-fiction book.
              </p>
              <p className="" id="portfolio">
                <a href="https://drive.google.com/file/d/1Xi7AcKrFvnRqLtdvreJqobKKWbIIz7HA/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="w3-button w3-padding-large w3-section download">
                  <i className="fa fa-download"></i> View my Resume
                </button>
                </a>
              </p>

              <article className="skills">
                <section className="top-tech-skills">
                  <h3 className="w3-padding-16">Top Languages</h3>
                  <p className="w3-wide w3-large ">CSS <i className="fab fa-css3-alt"></i></p>
                  <p className="w3-wide w3-large ">JavaScript ES6 <i className="fab fa-js"></i></p>
                  <p className="w3-wide w3-large ">React <i className="fab fa-react"></i></p>
                  <p className="w3-wide w3-large ">SQL <i className="fas fa-database"></i></p>
                  <p className="w3-wide w3-large  w3-large ">Python <i class="fab fa-python"></i></p>

                </section>

                {/* <!-- Soft Skills --> */}
                <section className="top-soft-skills">
                  <h3 className="w3-padding-16">Top Soft Skills</h3>
                  <p className="w3-wide w3-large">Problem Solving<i className="fas fa-check  w3-large "></i></p>
                  <p className="w3-wide w3-large ">Adaptability <i className="fas fa-check"></i></p>
                  <p className="w3-wide w3-large ">Leadership <i className="fas fa-check"></i></p>
                  <p className="w3-wide w3-large ">Communication <i className="fas fa-check"></i></p>
                  <p className="w3-wide w3-large ">Interpersonal <i className="fas fa-check"></i></p>
                </section>
              </article>
              <section className="top-work-skills">
                <h3 className="w3-padding-16">Bonus Skills</h3>
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

              {/* <!-- End About Section --> */}
            </div>

            {/* <!-- Portfolio Section --> */}
            {/* <div className="w3-padding-64 w3-content" id="portfolio">
              <h2 className="">Portfolio</h2>
              <hr style={{ width: "200px" }} className="w3-opacity" />
            </div> */}

            {/* <!-- Contact Section --> */}
            <div className="w3-padding-64 w3-content" id="contact">
              <h2 className="">Contact Me</h2>
              <hr style={{ width: "200px" }} className="w3-opacity" />

              <p>If you agree that software should have reusable, extendable and sustainable test strategies,<br /> let's get in touch...</p>

              <form action="https://formspree.io/tatyanna.cobb@gmail.com" method="POST">
                <fieldset>
                  <label for="Name"> Name</label>
                  <input className="w3-input w3-padding-16" type="text" placeholder="" required=" " name="Name" />

                  <p>
                    <label for="Email">Email *</label>
                    <input className="w3-input w3-padding-16" type="email" placeholder="" required name="_replyto" />
                  </p>

                  <p>
                    <label for="Name">Subject</label>
                    <input className="w3-input w3-padding-16" type="text" placeholder="" name="Subject" />
                  </p>

                  <p>
                    <label for="Name">Talk to me *</label>
                    <textarea className="w3-input w3-padding-16 text-area" type="text" placeholder="Message goes here" required="" name="Message" />
                  </p>
                  <p>
                    <button className="w3-button" type="submit" >
                      <i className="fa fa-paper-plane CTA_highlight"></i> SEND MESSAGE
                  </button>
                  </p>
                </fieldset>
              </form>

              <br />

              <div className="w3-section">
                <div className="w3-row w3-center w3-padding-16 w3-section notHtag">
                  <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">
                      <a href="https://www.linkedin.com/in/tatyannac/" target="_blank" rel="noopener noreferrer" ><i className=" fab fa-linkedin-in w3-hover-opacity"></i></a>
                    </span>
                    <br />
                    LinkedIn
                  </div>
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