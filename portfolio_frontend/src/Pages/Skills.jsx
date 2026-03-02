function Skills() {
  const items = [
    {
      key: "skills0",
      category: "Programming",
      sub_categories: [
        // {
        //   key: "p0",
        //   skill: "C",
        //   img: "react.png"
          
        // },
        {
          key: "p1",
          skill: "Javascript",
          img: "js.png"
          
        },
        {
          key: "p2",
          skill: "HTML5",
          img: "html.png"
          
        },
        {
          key: "p3",
          skill: "CSS3",
          img: "css.png"
          
        },
        // {
        //   key: "p4",
        //   skill: "Data Structure and Algorithm",
        //   img: "react.png"
          
        // },
        {
          key: "p5",
          skill: "Python (Learning)",
          img: "python.png"
          
        }
      ]
    },
    {
      key: "skills1",
      category: "Frontend Development",
      sub_categories: [
        {
          key: "f0",
          skill: "React Js",
          img: "react.png"
          
        },
        {
          key: "f1",
          skill: "Reat Router",
          img: "rr.png"
          
        },
        {
          key: "f2",
          skill: "Redux Toolkit",
          img: "rdx.png"
          
        },
        {
          key: "f3",
          skill: "Recoil",
          img: "recoil.png"
          
        },
        {
          key: "f4",
          skill: "Ant Design",
          img: "ant.png"
          
        },
        {
          key: "f5",
          skill: "Tailwind CSS",
          img: "tcss.png"
          
        },
        {
          key: "f6",
          skill: "Bootstrap",
          img: "bs.png"
          
        },
      ]
    },
    {
      key: "skills2",
      category: "Backend Development",
      sub_categories: [
        {
          key: "b0",
          skill: "Express Js",
          img: "ex.png"
          
        },
        {
          key: "b1",
          skill: "Node Js",
          img: "njs.png"
          
        },
      ]
    },
    {
      key: "skills3",
      category: "Database",
      sub_categories: [
        {
          key: "db0",
          skill: "MongoDB (No SQL)",
          img: "mdb.png"
          
        },
        {
          key: "db1",
          skill: "MySQL (SQL)",
          img: "mysql.png"
          
        },
      ]
    },
    {
      key: "skills4",
      category: "Tools",
      sub_categories: [
        {
          key: "t0",
          skill: "Git",
          img: "git.png"
          
        },
        {
          key: "t1",
          skill: "GitHub",
          img: "github.png"
          
        },
        {
          key: "t2",
          skill: "Postman",
          img: "pm.png"
          
        },
        {
          key: "t3",
          skill: "VS Code",
          img: "vsc.png"
          
        },
        {
          key: "t4",
          skill: "Vercel",
          img: "v.png"
          
        },
        {
          key: "t5",
          skill: "Netlify",
          img: "nf.png"
          
        },
      ]
    }

  ]

  return (
    <div id="Skills">
      <h1>Skills</h1>
      <ul id="ctgList" >
        {/* Category */}
        {items.map(i => {
          return (
            <li key={i.key}>
              <div><strong>{i.category}</strong></div>
              <ul className="skill-list">
                {/* Sub Category */}
                {i.sub_categories.map(j => {
                  return (
                    <li key={j.key}>
                      <div className="skills-box">
                        <div className="skill-title">{j.skill}</div>

                        <div className="skillimg-container">
                          <div className="skillimg">
                            <img src={j.img} alt={j.skill} />
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Skills;