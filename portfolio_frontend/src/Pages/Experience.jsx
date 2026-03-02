function Experience() {
  const items = [
    {
      key: "exp3",
      company: "Connected Bytes Software Service",
      role: "Software Trainee - Full Stack Developer",
      start: { month:"August", year: 2025},
      end: { month:"January", year: 2026},
      description: [
        "Developed and maintained full-stack applications using React.js, Node.js, and RESTful APIs.",
        "Built responsive UI components and implemented efficient state management using Recoil and Redux Toolkit.",
        "Integrated frontend modules with RESTful APIs, improving data handling, authentication, and error management.",
        "Worked on debugging, testing, and performance optimization to ensure stable and production-ready applications.",
        "Collaborated in Agile sprints, contributing to sprint planning, code reviews, and team discussions."
      ],
      keyprojects: [
        {
          project: "Attendance & Payroll Application",
          description: "Built UI screens, attendance tracking flows, payroll-calculation modules, and integrated secure REST APIs.",
        },
        {
          project: "Inventory Admin Management System",
          description: "Developed admin dashboards, user management features, and role-based access control.",
        },
        {
          project: "Meter Reading Automation Project",
          description: "Built the frontend module with Recoil state management, implementing validation logic, dynamic forms, and automated meter reading calculations."
        }
      ]
    },
  ]

  const sortedItems = [...items].sort((a, b) => {
  const dateA = new Date(`${a.start.month} 1, ${a.start.year}`);
  const dateB = new Date(`${b.start.month} 1, ${b.start.year}`);
  return dateA - dateB;
});

  return (
    <div id="Experience">
      <h1>Experience</h1>
      <div className="exp-box">
        <table>
          {sortedItems.map((i,index) => {
            console.log(index);
            return (
            <tr key={i.key} className="timeline">
              {index % 2 === 0 && <>
              <td className="blank left">{i.start.year} - {i.end.year ? i.end.year : "Present"}</td>
              
              <td key={i.key} className="content right">
                <div className="box">
                  <strong className="company">{i.company}</strong>
                  <div className="duration">{i.start.month} {i.start.year} - {i.end.month ? `${i.end.month} ${i.end.year}` : "Present"}</div>
                  <div className="role"> {i.role}</div>
                  <div className="description">
                    <strong>Description:</strong>
                    <ul> {i.description.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}</ul>
                  </div>
                </div>
              </td>
              </>}

              {index % 2 != 0 && <>
              <td key={i.key} className="content left">
                <div className="box">
                  <strong className="company">{i.company}</strong>
                  <div className="duration">{i.start.month} {i.start.year} - {i.end.month ? `${i.end.month} ${i.end.year}` : "Present"}</div>
                  <div className="role"> {i.role}</div>
                  <div className="description">
                    <strong>Description:</strong>
                    <ul> {i.description.map((i, idx) => (
                      <li key={idx}>{i}</li>
                    ))}</ul>
                  </div>
                </div>
              </td>
              
              <td className="blank right">{i.start.year} - {i.end.year ? i.end.year : "Present"}</td>
              </>}
            </tr>
            )
          })}
        </table>
      </div>
    </div>
  );
}

export default Experience;