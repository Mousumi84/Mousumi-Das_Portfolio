import About from "../Pages/About";
import Education from "../Pages/Education";
import Experience from "../Pages/Experience";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import Certificates from "../Pages/Certificates";
import Contact from "../Pages/Contact";

import { SiLeetcode } from "react-icons/si";
import { PiGithubLogoBold } from "react-icons/pi";
import { BiLogoLinkedin } from "react-icons/bi";
import { useState } from "react";
import { FaFileDownload } from "react-icons/fa";
// import axios from "axios";


  const navBarOptions = [
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Certificates",
    "Contact"]

  const link = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mousumi-das-1273b6218/",
      icon: <BiLogoLinkedin />,    // <LiaLinkedinIn />
      img: "ln.png"
    },
    {
      name: "GitHub",
      url: "https://github.com/Mousumi84",
      icon: <PiGithubLogoBold />,
      img: "gh.png"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/mousumidas482000/",
      icon: <SiLeetcode />,
      img: "lc.png"
    }
  ]

function Dashboard() {
  const [islinkClicked, setIsLinkClicked] = useState(null);
  // const [file, setFile] = useState(null);

  setTimeout(() => {
    setIsLinkClicked(null);
  }, 300);

  // const handleFileChange = (event) => {
  //   setFile(event.target.files[0]); 
  // }

  // const handleUpload = async () => {
  //   const formData = new FormData();
  //   formData.append("file", file);

  //     try {
  //       const response = await axios({
  //         url: "http://localhost:5000/upload",
  //         method: "POST",
  //         data: formData,
  //       });

  //       console.log(response);
  //       alert("File uploaded successfully!");

  //     } catch (error) {
  //       console.error("Error uploading file:", error);
  //       alert("Failed to upload file. Please try again.");
  //     }
  // }
  // console.log(file);

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

      <div id="Intro" className="mt-25 d-flex flex-column flex-lg-row gap-5">
        <div id="myself">
          <div id="details">
            <div><strong>Hi!</strong> It's me </div>
            <div><span className="fw-bold" style={{ fontSize: "55px"}}>Mousumi Das</span></div>
            <div className="fsdv"><span className="text-warning">Full Stack</span> Developer</div>
            <div>Passionate Full Stack Developer specializing in React.js, Node.js, 
              Express, MongoDB & MySQL. I build scalable web applications 
              with clean UI and optimized performance.
            </div>
          </div>
          <div id="links">
            {link.map((item, index) => ( 
              <button key={index} type="button" className={islinkClicked === index ? "link-clicked" : ""} onClick={() => setIsLinkClicked(index)}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                </a>
              </button>
            ))}
          </div>
          <div id="file-handler">
            {/* <div className="file-upload">
              <input type="file" onChange={handleFileChange}/>
              <button onClick={handleUpload}>Upload Resume</button>
            </div> */}
            <div className="file-download">
              <button>
                <a href="/files/Mousumi_Das_Resume.pdf" download>
                  <FaFileDownload /> Resume
                </a>
              </button>
            </div>
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