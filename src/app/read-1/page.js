import React from 'react'
import Navbar from '../Components/Nav'
import { FaArrowAltCircleUp, FaUser } from 'react-icons/fa'
import { BsBarChartLine } from 'react-icons/bs'
import { RiPagesLine } from 'react-icons/ri'
import { MdRealEstateAgent } from 'react-icons/md'
import Get from '../Components/Get'
import Slider from '../Components/Slider'
import Footer from '../Components/Footer'

function page() {
  return (
    <>

<Navbar />
         <div className='bbb'>
         <div className="background-about">
        <div className="overlay-about"></div>
        <div className="content-about">
            <h1>Paid Marketing</h1>
            <p>Home / Paid Marketing</p>
        </div>
    </div>
    </div>


    <div className='rank-1'>
    <div class="container-rank">
        <div class="content-rank">
            <div class="image-section-rank">
                <img src="rate-1.jpg" alt="Person working on a laptop with charts and graphs on the screen and papers with charts on the table" width="600" height="400" />
            </div>
            <div class="text-section-rank">
                <h1>Our Personalized Paid Marketing Services Will Give a Unique Voice to Your Brand</h1>
                <p>Social media has changed the way we live and the way we do business. Every social platform serves an audience with diversified interests and with good social media marketing services, you can catch their attention. Our social media experts will present your brand in a way that will drive the attention of your target audience and turn all leads into customers. We have a track record of working with start-ups as well as large corporations and helping them get more conversions through our effective social media marketing services.</p>
                <p>At Karachi Digital Marketing Agency we implement effectively tested and result-driven marketing strategies. We provide social media marketing services that are well-tailored to your needs. We believe that each business is unique and so are its requirements. Our experts take great care in understanding the needs of your business and developing social media strategies accordingly.</p>
                <a class="btn-rank" href="#">Get In Touch</a>
            </div>
        </div>
    </div>
</div>


{/* /* =====================

What we Provide 

===================== */ }

<div className='provide'>
    <div class="container-provide">
        <h1>What We Provide</h1>
        <div class="services-provide">
            <div class="service-provide">
                <i class="fas fa-user"><MdRealEstateAgent /></i>
                <h2>Paid Campaigns</h2>
                <p>Paid social media is significant in social media strategy. Experts at KDM Agency ensure that your unique content is shown to the right audience, at the right time and at the right place.</p>
            </div>
            <div class="service-provide">
                <i class="fas fa-chart-line"><BsBarChartLine /></i>
                <h2>Creative Content</h2>
                <p>We generate creative and engaging content, through strategic patterns to convey your story to your potential customers and connect them with your brand.</p>
            </div>
            <div class="service-provide">
                <i class="fas fa-tachometer-alt"><FaArrowAltCircleUp /></i>
                <h2>Social Presence</h2>
                <p>Our Social Media Marketing team will manage your brand on social media platforms so that you will be able to focus on your business while we take care of your brand’s social presence.</p>
            </div>
        </div>
    </div>
</div>

{/* ============================

Rate  List

============================ */}


<div class="rate">
    <div class="container-rate">
        <h1 class="h1-rate">Our Paid Marketing Packages</h1>
        <div class="packages-rate">
            <div class="package-rate-1">
                <h2 class="h2-rate">Package-01</h2>
                <h3 class="h3-rate">$. 1500</h3>
                <ul class="ul-rate">
                    <li class="li-rate">Rs. 50K Min - 200K Max On Customer Card</li>
                    <li class="li-rate">+30K Service Charges Advance Payment</li>
                    <li class="li-rate">Social Media Ads (Upto 10)</li>
                    <li class="li-rate">Search Engine Ads (Upto 5)</li>
                    <li class="li-rate">Display Network Ads (Upto 5)</li>
                    <li class="li-rate">* Inclusive Of Content Copy, Graphic Design And Basic GIF Ads</li>
                </ul>
            </div>
            <div class="package-rate-1">
                <h2 class="h2-rate">Package-01</h2>
                <h3 class="h3-rate">$. 2,500</h3>
                <ul class="ul-rate">
                    <li class="li-rate">Rs. 100K Min - 300K Max On Customer Card</li>
                    <li class="li-rate">+50K Service Charges Advance Payment</li>
                    <li class="li-rate">Social Media Ads (Upto 10)</li>
                    <li class="li-rate">Search Engine Ads (Upto 5)</li>
                    <li class="li-rate">Display Network Ads (Upto 5)</li>
                    <li class="li-rate">15-Sec 2d Animated Videos (Upto 2)</li>
                    <li class="li-rate">* Inclusive Of Content Copy, Graphic Design And Basic GIF Ads</li>
                </ul>
            </div>
            </div>
            </div>
            </div>



            <Get />

            <Slider />

            <Footer />

    </>
  )
}

export default page