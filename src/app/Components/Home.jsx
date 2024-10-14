import React from 'react'
import Navbar from './Nav';
import Get from './Get';
import What_we from './What_we';
import Footer from './Footer';
import Link from 'next/link';
import Slider from './Slider';

function Home() {
    return (
        <>

            <Navbar />
            <div className='full-width'>
                <div className='home'>
                    <div className="container-home">
                        <div className="text-content-home">
                            <h1>
                                <span>
                                    We are a
                                </span>
                                <span>
                                    Comprehensive
                                </span>
                                <span>
                                    Digital Marketing
                                </span>
                                <span>
                                    Agency in Karachi
                                </span>
                            </h1>
                            <p>
                                - Boost Your Own
                                <span>
                                    Great
                                </span>
                                Website
                            </p>
                            <p>
                                Our Digital Solutions are grounded in successful strategies
                            </p>
                            <button className='btn-home'> 
                                <Link href='contact'>
                                Enquire Now
                                </Link>
                            </button>
                        </div>
                        <div className="image-content-home">
                            <img alt="Collage of various digital marketing projects" src="e.png" width="900" height="900" />
                            <div className="overlay-home">
                            </div>
                        </div>
                    </div>
                </div>

                {/* 
 =======================================

 Home Card Secction
 =======================================  */}


                <What_we />

                {/* ====================================

    Image Container Section Home

    ==================================== */}


                <div className='ima'>
                    <div className="container-ima">
                        <div className="left-section">
                            <h1>
                                5+
                            </h1>
                            <p>
                                Years Of Experience
                            </p>
                            {/* <img alt="Abstract curved line illustration" className="curve-image" height="200" src="2nd-slide-mid-v2.jpg" width="5-800"/> */}
                            <div className="clients-box">
                                <h1>
                                    OVER
                                </h1>
                                <p>
                                    100+ Clients
                                </p>
                            </div>
                        </div>
                        <div className="right-section">
                            <h2>
                                Why Hire Karachi Digital Marketing Agency?
                            </h2>
                            <p>
                                We are a people-centric company and maintain integrity and the highest standards of work ethics for our clients. As a digital marketing agency helping many businesses across industries, we believe in building long-term, meaningful, and successful relationships that deliver results and growth. Our team values accountability and maintains transparency at every step of our process.
                            </p>
                            <p>
                                At KDM Agency, we curate what is best for our clients by carefully analyzing and optimizing every part of marketing. We implement the best possible strategies to bring even the most minor aspects of your business to the spotlight by improving attention to detail. We will be the gateway to the growth of your business with our customized and innovative digital marketing approach.
                            </p>
                            <p>
                                As one of Karachi's leading marketing agencies, KDM Agency strives to adapt to all the continuous changes in the world of digital marketing. Let's partner up and invest in ideas to connect your business to the digital world.
                            </p>
                        </div>
                    </div>
                </div>


                {/* ================================

 Next Image Section Home

 ================================ */}


                <div className='hom'>
                    <div className="container-hom">
                        <div className="image-hom">
                            <img alt="A close-up image of a snail with a colorful background" height="600" src="bussiness.avif" width="800" />
                        </div>
                        <div className="content-hom">
                            <h1>
                                How Can We Boost Your Business?
                            </h1>
                            <p>
                                For a more sustainable online transformation of your business, you need to work with an agency that is well-experienced and clear-cut in doing the job. So your business flourishes seamlessly in the long and short run. However, finding a reliable partner takes time and effort in the constantly changing marketing world. Let KDM Agency take the burden off your shoulders and help your business in a smooth digital transformation.
                            </p>
                            <p>
                                KDM Agency focuses on the long-term success of your business with assessable and adaptable marketing plans. Our team shapes your business according to the continuously changing algorithms and updates in digital marketing. We always try to stay one step ahead with our unique digital marketing strategies so your business can stand out from the competition.
                            </p>
                            <p>
                                As one of Karachi’s most reliable digital marketing agencies, we take pride in delivering transparent services to our clients. We try our best to keep our clients satisfied by reporting the progress of marketing campaigns every month.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 
 =================================

 Get in Touch  

 ================================== */}


               
           

            <Get />

            <Slider />

            <Footer />

            </div>

        </>
    )
}

export default Home