import { VscGithub } from "react-icons/vsc";

function Projects() {
  const items = [
    {
      key: "projects1",
      name: "Kitab Bazzar",
      app: "E-Commerce Website",
      link: "https://e-commerce-kitab-bazaar.vercel.app/",
      github: "https://github.com/Mousumi84/E-Commerce-kitabBazaar",
      tech_stacks: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
      fratures: [
        "Built a MERN e-commerce application with secure authentication and scalable REST APIs.",
        "Designed MongoDB models, API routes, and core business logic.",
        "Developed a responsive, optimized frontend with improved performance.",
        "Deployed using Vercel & Render following deployment best practices."
      ],
      img: "kb.png"
    },
    {
      key: "projects2",
      name: "Nexus",
      app: "Bloging Application",
      link: "https://nexus-five-chi.vercel.app/",
      github: "https://github.com/Mousumi84/Nexus",
      tech_stacks: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
      fratures: [
        "Created a blog-sharing full-stack app with authentication and REST APIs.",
        "Implemented secure routing, debugging, and testing for stable performance.",
        "Built a clean, responsive UI with smooth frontend-backend integration."
      ],
      img: "Nexus.png"
    },
  ]

  return (
    <div id="Projects">
      <h1>Projects</h1>
      <div className="prj-box">
        <table>
          {items.map((i,index) => {
            // console.log(i,index);
            return (
            <tr key={i.key} className="timeline">
              {index % 2 === 0 && <>
              <td className="blank left"></td>
              
              <td key={i.key} className="content right">
                <div className="box">
                  <div className="prjimg">
                    <a href={i.link} target="_blank" rel="noopener noreferrer"><img src={i.img} alt={i.name} /></a>
                  </div>
                  <div className="head">
                    <strong className="name">{i.name} </strong> - {i.app}</div> 
                  <div>
                    <a className="git-link" href={i.github} target="_blank" rel="noopener noreferrer"><VscGithub /></a>
                  </div>
                  <ul className="stack-list">{i.tech_stacks.map((tech, idx) => (
                    <li key={idx} className="tech-stack">{tech}</li>
                  ))}</ul>
                  {/* <div className="links">
                    <a href={i.link} target="_blank" rel="noopener noreferrer">Live Demo </a> |
                    <a href={i.github} target="_blank" rel="noopener noreferrer"><VscGithub /></a>
                  </div> */}
                  <div className="features">
                    <strong>Features:</strong>
                    <ul> {i.fratures.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}</ul>
                  </div>
                </div>
              </td>
              </>}

              {index % 2 != 0 && <>
              <td key={i.key} className="content left">
                <div className="box">
                  <div className="prjimg">
                    <a href={i.link} target="_blank" rel="noopener noreferrer"><img src={i.img} alt={i.name} /></a>
                  </div>
                  <div className="head">
                    <strong className="name">{i.name} </strong> - {i.app}</div> 
                  <div>
                    <a className="git-link" href={i.github} target="_blank" rel="noopener noreferrer"><VscGithub /></a>
                  </div>
                  <ul className="stack-list">{i.tech_stacks.map((tech, idx) => (
                    <li key={idx} className="tech-stack">{tech}</li>
                  ))}</ul>
                  {/* <div className="links">
                    <a href={i.link} target="_blank" rel="noopener noreferrer">Live Demo </a> |
                    <a href={i.github} target="_blank" rel="noopener noreferrer"> GitHub</a>
                  </div> */}
                  <div className="features">
                    <strong>Features:</strong>
                    <ul> {i.fratures.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}</ul>
                  </div>
                </div>
              </td>
              
              <td className="blank right"></td>
              </>}
            </tr>
            )
          })}
        </table>
      </div>
    </div>
  );
}

export default Projects;