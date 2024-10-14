import React from 'react'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { MdPhoneInTalk } from 'react-icons/md'

function Get() {
  return (
    <>

<div className="get">
                    <div className="container-get">
                        <div className="left-section-get">
                            <h1>Get In Touch</h1>
                            <p>Contact Us</p>
                        </div>
                        <div className="right-section-get">
                            <div className="contact-item-get-1">
                                <i><MdPhoneInTalk /></i>
                                <p>+92 333 9763406</p>
                            </div>
                            <div className="divider-get"></div>
                            <div className="contact-item-get-2">
                                <i><FaEnvelope /></i>
                                <p>ahsankha309@gmail.com</p>
                            </div>
                            <div className="divider-get"></div>
                            <div className="contact-item-get-3">
                                <i><FaMapMarkerAlt /></i>
                                <p>D-7 Shahed-e-Millat, Road, Bangalore Town Block A Bangalore Town, Karachi, Karachi City, Sindh, Pakistan</p>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}


    </>
  )
}

export default Get