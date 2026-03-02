import { Outlet } from "react-router-dom";
import About from "../Pages/About";
import Education from "../Pages/Education";
import Experience from "../Pages/Experience";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import Certificates from "../Pages/Certificates";
import Contact from "../Pages/Contact";

function Dashboard() {
  const navBarOptions = [
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Certificates",
    "Contact"]

  return (
    <div id="Dashboard">
      <div id="nav">
        <nav className="navbar navbar-expand-lg fixed-top t-0">
          <div className="container-fluid nav-box d-flex align-items-end">
            <div id="img-container" className="navbar-brand" >
              <img src="Mlogo.png"/>
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="offcanvas offcanvas-end coll-menu" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>

              <div className="offcanvas-body">
                <ul className="gap-6 navbar-nav container-md menu d-flex justify-content-around align-items-start">
                  {navBarOptions.map((item)=>(
                    <li className="nav-item" key={item}>
                      <a href={`#${item}`} className="hover:text-purple-400 transition nav-link">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div id="Intro" className="mt-30 d-flex flex-column flex-lg-row gap-5">
        <div id="myself">
          <div><strong>Hi!</strong> It's me </div>
          <div><span className="fw-bold" style={{ fontSize: "55px"}}>Mousumi Das</span></div>
          <div className="fsdv"><span className="text-warning">Full Stack</span> Developer</div>
          <div>Passionate Full Stack Developer specializing in React.js, Node.js, 
            Express, MongoDB & MySQL. I build scalable web applications 
            with clean UI and optimized performance.
          </div>
          <div id="links">
  
          </div>
        </div>

        <div id="meimg">
          <img src="mousumi.jpg" alt="Mousumi Das"/>
        </div>
      </div>

      <div className="mt-3">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </div>
    </div>
  );
}

export default Dashboard;