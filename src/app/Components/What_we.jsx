'use client';
import Link from 'next/link'
// import React from 'react'
import { useRouter } from 'next/navigation';

function What_we() {

       const router = useRouter ();


  return (
    <>

                   {/* 
 =======================================

 Home Card Secction
 =======================================  */}

<div className='home-card'>
                    <div className="container">
                        <div className="headerr">Services</div>
                        <div className="title">What We Do</div>
                        <div className="description">
                            Karachi Digital Marketing Agency provides marketing solutions to a wide range of businesses. We use our expertise to deliver the most optimum digital services. With an array of innovative and viable marketing strategies, we cater to the specific needs of all businesses.
                            <br /><br />
                            We excel in providing many services, including Web Development and PPC advertising for businesses of all industry sectors. There is a marketing solution for every business at KDM Agency, helping your business meet its requirements and thrive digitally.
                        </div>
                        <div className="services">
                            <div className="service-card">
                                <h2>01</h2>
                                <h3>Search Engine Optimization</h3>
                                <p>Search Engine Optimization is one of the most integral parts of a website that helps you rank higher on web pages and get more conversion rates...</p>
                                <div className="buttons">
                                    <a onClick={(e) => router.push("/read")} className="read-more">Read More</a>
                                    <a href="#" className="get-in-touch"><i className="fas fa-envelope"></i> Get In Touch</a>
                                </div>
                            </div>
                            <div className="service-card">
                                <h2>02</h2>
                                <h3>Paid Marketing</h3>
                                <p>Social media has changed the way we live and the way we do business. Every social platform serves an audience with diversified interests...</p>
                                <div className="buttons">
                                    <a onClick={(e) => router.push("/read-1")} className="read-more">Read More</a>
                                    <a href="#" className="get-in-touch"><i className="fas fa-envelope"></i> Get In Touch</a>
                                </div>
                            </div>
                            <div className="service-card">
                                <h2>03</h2>
                                <h3>Social Media Marketing</h3>
                                <p>Social media Marketing is one of the most essential digital marketing strategies which can maximize your brand's visibility on...</p>
                                <div className="buttons">
                                    <a href="#" className="read-more">Read More</a>
                                    <a href="#" className="get-in-touch"><i className="fas fa-envelope"></i> Get In Touch</a>
                                </div>
                            </div>
                            <div className="service-card">
                                <h2>04</h2>
                                <h3>Ecommerce Development</h3>
                                <p>Your website should not just look great; it's crucial to set the right impression and provide accurate information to your future customers...</p>
                                <div className="buttons">
                                    <a href="#" className="read-more">Read More</a>
                                    <a href="#" className="get-in-touch"><i className="fas fa-envelope"></i> Get In Touch</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


    </>
  )
}

export default What_we