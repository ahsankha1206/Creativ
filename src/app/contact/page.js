"use client"
import React from 'react'
import Navbar from '../Components/Nav'
import Footer from '../Components/Footer'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import toast, { Toaster } from 'react-hot-toast';
import Get from '../Components/Get'
import Slider from '../Components/Slider'

function page() {
   

    const notify = () => toast.success('Successfully send');
    const [result, setResult] = React.useState("");

    const FormHandler = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "9b7b7d2e-be04-4eab-ae9a-4ed4be911f4e");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        notify()
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  

  return (
    <>
<Toaster />
<Navbar />
<div className='bbb'>
         <div className="background-about">
        <div className="overlay-about"></div>
        <div className="content-about">
            <h1>CONTACT US</h1>
            <p>Home / Contact Us</p>
        </div>
    </div>
    </div>

{/* ==========================

Contact Us 

========================= */}
<form onSubmit={e=>FormHandler(e)}>
<div className='company'>

<div className='contact-us'>
    <div className="container-contact">
        <div className="form-container-contact">
            <h2>Just say Hello !</h2>
            <p>Let us know more about you !</p>
            <div className="form-group-contact">
                <input type="text" name="FirstName" placeholder="First Name"/>
                <input type="text" name="LastName" placeholder="Last Name"/>
            </div>
            <div className="form-group-contact">
                <input type="email" name="Email" placeholder="Mail"/>
                <input type="text" name="Number" placeholder="Phone"/>
            </div>
            <div className="form-group-contact">
                <textarea name="Text" placeholder="Message"></textarea>
            </div>
            <button type="submit" className="submit-btn-contact">SUBMIT</button>
        </div>
        <div className="info-container-contact">
            <h3>Contact Information</h3>
            <p>77 Baker Street<br/>Bondowoso, 87655<br/>Indonesia</p>
            <p>Call Us: +92 333 976 340 6</p>
            <p>We are open from Monday - Friday<br/>08.00 am - 05.00 pm</p>
            <h3>Follow Us</h3>
            <div className='social-menu'>
                <i className="fab fa-facebook-f"><FaFacebook /></i><a href="#">facebook</a> &nbsp;
                <i className="fab fa-instagram"><RiInstagramFill /></i> <a href="#">instagram</a> &nbsp;
                <i className="fab fa-linkedin-in"><FaLinkedin /></i><a href="#">Linked in</a>
            </div>
        </div>
    </div>
</div>
</div>
</form>

<Get />

<Slider />

<Footer />
    </>
  )
}

export default page