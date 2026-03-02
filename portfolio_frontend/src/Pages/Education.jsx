function Education() {
  const items = [
    {
      key: "school1",
      school: "Bengal College of Engineering and Technology",
      boardshort: "MAKAUT",
      board: "Maulana Abul Kalam Azad University of Technology",
      startyear: 2018, 
      endyear: 2022,
      degree: "Bachelor of Technology",
      specialization: "Electronics and Communication Engineering",
      specializationShort: "ECE",
      cgpa: "8.46",
      img: "bcet.png",
    },
    {
      key: "school2",
      school: "S.K.S. Public School",
      boardshort: "CBSE",
      board: "Central Board of Secondary Education",
      startyear: 2017,
      endyear: 2018,
      degree: "Class XII",
      specialization: "Science",
      specializationShort: "Science",
      cgpa: "6.00",
      img: "sks.png"
    },
    {
      key: "school3",
      school: "Shamayita Convent School",
      boardshort: "CBSE",
      board: "Central Board of Secondary Education",
      startyear: 2015,
      endyear: 2016,
      degree: "Class X",
      cgpa: "9.00",
      img: "scs.png",
    }
  ]

  return (
    <div id="Education">
      <h1>Education</h1>
      <div className="edu-box">
        <table>
          {items.map((i,index) => {
            console.log(index);
            return (
            <tr key={i.key} className="timeline">
              {index % 2 === 0 && <>
              <td className="blank left">{i.startyear} - {i.endyear ? i.endyear : "Present"}</td>
              
              <td key={i.key} className="content right">

                <div className="box">
                  <div className="logo">
                    <img src={i.img} alt={i.school} />
                  </div>
                  <div className="details-box">
                    <div><strong className="school">{i.school}</strong>, {i.boardshort}</div>
                    <strong className="degree">{i.degree}</strong>  {/*  <span>CGPA: {i.cgpa}</span> */}
                    <div className="specialization">{i.specialization}</div>
                    <div className="duration">{i.startyear} - {i.endyear}</div>
                  </div>
                </div>
              </td>
              </>}

              {index % 2 != 0 && <>
              <td key={i.key} className="content left">

                <div className="box">
                  <div className="details-box">
                    <div><strong className="school">{i.school}</strong>, {i.boardshort}</div>
                    <strong className="degree">{i.degree}</strong>   {/* <span>CGPA: {i.cgpa}</span>  */}
                    <div className="specialization">{i.specialization}</div>
                    <div className="duration">{i.startyear} - {i.endyear}</div>
                  </div>
                  <div className="logo">
                    <img src={i.img} alt={i.school} />
                  </div>
                </div>
              </td>
              
              <td className="blank right">{i.startyear} - {i.endyear ? i.endyear : "Present"}</td>
              </>}
            </tr>
            )
          })}
        </table>
      </div>
    </div>
  );
}

export default Education;