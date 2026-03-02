function Certificates() {
  const items = [
    
    {
      key: "certificates1",
      company: "AccioJob",
      specialization: "MERN Full Stack Development",
      link: "https://acciojob.com/nsdc?id=a3e87681-5d61-4fcc-b46f-a8c4f6db41ce",
      img: "mernfs.jpg",
    },
    {
      key: "certificates2",
      company: "SkillUp",
      specialization: "Introduction of Figma",
      link: "https://certificates.simplicdn.net/share/8535755_88814391751109793342.png",
      img: "figma.jpg"
    }
  ]

  return (
    <div id="Certificates">
      <h1>Certificates</h1>
      <div className="crf-box">
        <table>
          {items.map((i,index) => {
            console.log(index);
            return (
            <tr key={i.key} className="timeline">
              {index % 2 === 0 && <>
              <td className="blank left"></td>
              
              <td key={i.key} className="content right">
                <div className="box">
                  <div className="crfimg">
                    <a href={i.link} target="_blank" rel="noopener noreferrer"><img src={i.img} alt={i.specialization} /></a>
                  </div>
                  <strong className="specialization">{i.specialization}</strong>
                  <div className="company">{i.company}</div>
                </div>
              </td>
              </>}

              {index % 2 != 0 && <>
              <td key={i.key} className="content left">
                <div className="box">
                  <div className="crfimg">
                    <a href={i.link} target="_blank" rel="noopener noreferrer"><img src={i.img} alt={i.specialization} /></a>
                  </div>
                  <strong className="specialization">{i.specialization}</strong>
                  <div className="company">{i.company}</div>
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

export default Certificates;