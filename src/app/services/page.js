import React from 'react'
import Navbar from '../Components/Nav'
import { FaApple, FaApplePay, FaAws, FaBitcoin, FaCloudDownloadAlt, FaCloudflare, FaDrupal, FaHubspot, FaNodeJs, FaPython, FaShieldAlt, FaShopify, FaStripe, FaTrafficLight, FaWaveSquare, FaYelp } from 'react-icons/fa'
import { DiAndroid } from "react-icons/di";
import { SiAdobe, SiGooglecloud, SiMicrosoftazure, SiSidequest, SiTrustpilot } from "react-icons/si";
import { IoDocumentLockSharp, IoLogoAndroid, IoLogoTableau } from "react-icons/io5";
import { TbAccessibleFilled } from "react-icons/tb";
import { LuZoomIn } from "react-icons/lu";
import { LiaEthereum } from "react-icons/lia";
import { GiEggClutch } from "react-icons/gi";
import Footer from '../Components/Footer';
import { BsBrowserChrome, BsSmartwatch } from "react-icons/bs";
import Get from '../Components/Get';
import Slider from '../Components/Slider';


function Services() {
  return (
    <>

<Navbar />
         <div className='bbb'>
         <div className="background-about">
        <div className="overlay-about"></div>
        <div className="content-about">
            <h1>OUR SERVICES</h1>
            <p>Home / Our Services</p>
        </div>
    </div>
    </div>


    {/* ==============================

    Services Section 

    ============================== */}


<div className='services-1'>
    <div className="container-development">
        <div className="service-box-development">
            <h2>Mobile App Development</h2>
            <p>We bring innovative design and delightful mobile app solutions that guarantee quality user experience and drive results for clients. Clean, minimalistic, bold or complex - we'll get the job done!</p>
            <div className="icons-development">
                <i className="fab fa-apple"><FaApple /></i>
                <i className="fab fa-android"><DiAndroid /></i>
            </div>
        </div>
        <div className="service-box-development">
            <h2>Web Development</h2>
            <p>With our team of highly skilled developers and designers, you can be assured of creating a powerful and engaging website compatible across all platforms.</p>
            <div className="icons-development">
                <i className="fab fa-shopify"><FaShopify /></i>
                <i className="fab fa-node-js"><FaNodeJs /></i>
                <i className="fab fa-python"><FaPython /></i>
                <i className="fab fa-drupal"><FaDrupal /></i>
            </div>
        </div>
        <div className="service-box-development">
            <h2>Digital Marketing</h2>
            <p>We can help you navigate through a sea of online performance measurement tools and strategies to build you a customized solution with optimal results for your business.</p>
            <div className="icons-development">
                <i className="fab fa-adobe"><SiAdobe /></i>
                <i className="fab fa-stripe"><FaStripe /></i>
                <i className="fab fa-hubspot"><FaHubspot /></i>
                <i className="fab fa-tableau"><IoLogoTableau /></i>
            </div>
        </div>
        <div className="service-box-development">
            <h2>Website ADA Compliance</h2>
            <p>Our ADA compliance services offer thorough inspection, reporting, remediation, and annual maintenance of your website to ensure proper website accessibility for disabled persons and compliance.</p>
            <div className="icons-development">
                <i className="fab fa-accessible-icon"><TbAccessibleFilled /></i>
                <i className="fab fa-wave-square"><FaWaveSquare /></i>
                <i className="fab fa-deque"><SiSidequest /></i>
            </div>
        </div>
        <div className="service-box-development">
            <h2>Cloud Infrastructure</h2>
            <p>Our Cloud Infrastructure services help you save money. How? Find out more when you explore and compare your dataset in a secure, friendly place with our services.</p>
            <div className="icons-development">
                <i className="fab fa-aws"><FaAws /></i>
                <i className="fab fa-google-cloud"><SiGooglecloud /></i>
                <i className="fab fa-azure"><SiMicrosoftazure /></i>
            </div>
        </div>
        <div className="service-box-development">
            <h2>IT Security</h2>
            <p>As a top software security provider, our data solutions are not only friendly and easy to deploy, we provide our clients with the expertise to achieve their desired digital transformation, safely.</p>
            <div className="icons-development">
                <i className="fab fa-cloudflare"><FaCloudflare /></i>
                <i className="fab fa-lock"><IoDocumentLockSharp /></i>
            </div>
        </div>
        <div className="service-box-development">
            <h2>Remote Technology Staffing</h2>
            <p>Our expert staffing solutions help you find the right talent for your project, no matter where they are located.</p>
            <div className="icons-development">
                <i className="fab fa-slcak"><FaTrafficLight /></i>
                <i className="fab fa-zoom"><LuZoomIn />
                </i>
            </div>
        </div>
        <div className="service-box-development">
            <h2>Blockchain Technology</h2>
            <p>Our blockchain solutions are designed to make your business smarter. With secure transactions, efficient NFTs, and reliable POCs, among other services, we tackle the challenges of blockchain-based business solutions.</p>
            <div className="icons-development">
                <i className="fab fa-bitcoin"><FaBitcoin /></i>
                <i className="fab fa-ethereum"><LiaEthereum /></i>
                <i className="fab fa-apple-pay"><FaApplePay /></i>
            </div>
        </div>
        <div className="service-box-development">
            <h2>Online Reputation Management</h2>
            <p>Our ORM services analyze your brand's digital presence and review SEO and digital marketing parameters. We help you keep your brand stable and strong no matter the changes in your reputation.</p>
            <div className="icons-development">
                <i className="fab fa-trustpilot"><SiTrustpilot /></i>
                <i className="fab fa-clutch"><GiEggClutch /></i>
                <i className="fab fa-yelp"><FaYelp /></i>
            </div>
        </div>
    </div>
</div>



<div className='wee-1'>
    <div class="wee-container">
        <h1>How we work</h1>
        <p>We keep our eyes open to the ever growing and reforming new technologies and tools and train our team to deliver services with utmost excellence. We believe in consistent learning & high competency.</p>
        <div class="wee-grid">
            <div class="wee-card">
                <h2>Agile Approach</h2>
                <p>We follow the Agile approach by using short cycles of work that allows for rapid production and constant revision through predetermined stages to track progress and identify common roadblocks.</p>
            </div>
            <div class="wee-card">
                <h2>Work Sprint</h2>
                <p>When a big problem is looming, it can be tough to dig in. Sprint makes an excellent commitment device – when you gather a team, clear the calendar, and schedule customer interviews, you commit to making progress.</p>
            </div>
            <div class="wee-card">
                <h2>Performance Tracking</h2>
                <p>Measuring how well your team is doing their job is more than just eye-opening; it’s vital to the success of your business.</p>
            </div>
            <div class="wee-card">
                <h2>Change Management</h2>
                <p>Involving the right people in the design and implementation of change, to make sure the right changes are made is one of the most integral part of planning the project.</p>
            </div>
            <div class="wee-card">
                <h2>Personal Assistance</h2>
                <p>Whether it’s helping someone through a bad day or simply helping someone solve a problem that’s setting them back, to make the team feel at ease and boost morale across the company we have the ability to make our employees’ lives better.</p>
            </div>
            <div class="wee-card">
                <h2>Training and Support</h2>
                <p>One concrete step taken to ensure the skills necessary to reduce failure risk, decrease costs, and increase project effectiveness is training and support to all the team members.</p>
            </div>
        </div>
    </div>
</div>


<div className='stack'>
    <div class="container-stack">
        <h1>Our Technology Stack</h1>
        <p>We use modern, proven technologies and approaches that allow us to effectively extend and scale our products.</p>
        <div class="tech-icons-stack">
            <div class="tech-item-stack">
                <i class="fas fa-browser"><BsBrowserChrome /></i>
                <p>Web</p>
            </div>
            <div class="tech-item-stack">
                <i class="fab fa-apple"><FaApple /></i>
                <p>iOS</p>
            </div>
            <div class="tech-item-stack">
                <i class="fab fa-android"><IoLogoAndroid /></i>
                <p>Android</p>
            </div>
            <div class="tech-item-stack">
                <i class="fas fa-watch"><BsSmartwatch /></i>
                <p>Wearables</p>
            </div>
            <div class="tech-item-stack">
                <i class="fas fa-cloud"><FaCloudDownloadAlt /></i>
                <p>CloudOps</p>
            </div>
            <div class="tech-item-stack">
                <i class="fas fa-shield-alt"><FaShieldAlt /></i>
                <p>IT Security</p>
            </div>
        </div>
        <div class="button-container-stack">
            <a href="#"><i class="fas fa-shield-alt"></i> See our Tech Stack</a>
        </div>
    </div>
</div>

<Slider />

<Footer />
    </>
  )
}

export default Services