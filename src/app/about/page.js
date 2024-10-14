// import React from 'react'
import { MdLaptopWindows } from 'react-icons/md'
import Navbar from '../Components/Nav'
import { FaHeadset } from "react-icons/fa";
import Footer from '../Components/Footer';
import Company from '../Company';
import Slider from '../Components/Slider';

function About () {
  return (
    <>
    <Navbar />
         <div className='bbb'>
         <div className="background-about">
        <div className="overlay-about"></div>
        <div className="content-about">
            <h1>ABOUT US</h1>
            <p>Home / About Us</p>
        </div>
    </div>
    </div>


    {/* ============================================

    Here Comes An Intro About Company

    ============================================= */}

<div className='company'>
<Company />
</div>            

{/* ============================================

About Get In Touch 

============================================= */}


<div className='quote'>
    <div className="container-quote">
        <div className="text-section-quote">
            <small-quote>Request A Quote</small-quote>
            <h1-quote>Let's Get Work Together</h1-quote>
        </div>
        <div className="button-section-quote">
            <button-quote>GET A QUOTE</button-quote>
        </div>
    </div>
</div>

{/* =================================================

We Work With 5 Years Of Experience

================================================= */}


<div className="work">
    <div className="container-work">
        <div className="content-work">
            <div className="image-section-work">
                <img alt="Top view of a group of people working on laptops and notebooks around a wooden table, with their fists joined together in the center." src="im.jpeg" />
            </div>
            <div className="text-section-work">
                <h1>We Work With 5 Years Of Experience</h1>
                <p>Karachi Digital Marketing Agency provides comprehensive digital marketing solutions to businesses across industries with tailored and competitive strategies.</p>
                <p>Karachi Digital Marketing boasts a team of creative, technical and strategic experts. We ensure our clients with smooth campaign developments and custom web solutions that empower their business digitally.</p>
                <p>Expand your reach in the digital world with KDM Agency’s full spectrum of growth-oriented marketing solutions.</p>
                <div className="icons-work">
                    <div>
                        <i className="fas fa-laptop"><MdLaptopWindows /></i>
                        <span>Interact With Good Interface</span>
                    </div>
                    <div>
                        <i className="fas fa-headset"><FaHeadset /></i>
                        <span>Great Support Systems</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


{/* =============================

Our Clients 

============================= */}


<div className='our-design'>
    <h1 className="h1-design">Design</h1>
    <div className="tags-design">
        <div>Mobile App Designs</div>
        <div>Web Designs</div>
        <div>Branding</div>
        <div>Ad Designs</div>
        <div>Email Designs</div>
        <div>Corporate Kit Designs</div>
        <div>Presentation Templates</div>
        <div>Brainstorming and Prototyping</div>
        <div>User Experience Design Planning</div>
    </div>
    <h2>Technology Expertise</h2>
    <div className="tools-design">
        <img alt="Sketch logo" src="a-1.webp"/>
        <img alt="InVision logo" src="a-2.webp"/>
        <img alt="Adobe After Effects logo" src="a-3.webp"/>
        <img alt="Figma logo" src="a-4.webp"/>
        <img alt="Adobe XD logo" src="a-5.webp"/>
        <img alt="Affinity Designer logo" src="a-6.webp"/>
    </div>
    <div className="software-design">
        <div>Sketch</div>
        <div>Figma</div>
        <div>Adobe Illustrator</div>
        <div>Adobe XD</div>
        <div>InVision</div>
        <div>Adobe Photoshop</div>
        <div>Adobe After Effects</div>
        <div>Affinity Designer</div>
    </div>
    <button className="view-more-design">View More</button>
</div>

<Slider />

<Footer />

    </>
  )
}

export default About