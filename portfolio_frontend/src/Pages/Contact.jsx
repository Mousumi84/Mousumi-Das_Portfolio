import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contact() {

  let items = [
    {
      key: "address1",
      mobile: 9564835847,
      email: "mousumidas482000@gmail.com",
      address: {
        lane: "Dr. R. R. Road, by Kashmiri lane",
        city: "Raniganj",
        pin: 713347,
        district: "Burdwan",
        state: "West Bengal",
      }
    }
  ]

  return (
    <div id="Contact">
      <h1>Contact</h1>
      <div id="cnt-box" >
        {items.map(i => {
          // console.log(i)
          return (
            <div key={i.key} className="contact-details">
              <div className="line"><FaPhoneAlt /> <div className="mobile">{i.mobile}</div></div>
              <div className="line"><MdEmail /> <div className="email">{i.email}</div></div>
              <div className="line "><FaLocationDot /> 
                <div className="address">
                <div>{i.address.lane},</div>
                <div>{i.address.city},</div>
                <div>{i.address.state}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Contact;