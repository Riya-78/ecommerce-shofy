import React, { useState } from 'react'
import './contact.css'
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';

const Contact = () => {
  return (
    <>
    <div className='contact_container'>
        <div className="detail-1">
            <h2>Contact Me</h2>
            <div className="innerbox">
                <div className="deets">
                    <h3>Email id</h3>
                    <p>riyavb78@gmail.com</p>
                </div>
                <div className="deets">
                    <h3>Phone no.</h3>
                    <p>9815948823</p>
                </div>
                <div className="deets">
                    <h3>Social Media</h3>
                    <div className='icon'>
                        <li><RiFacebookFill /></li>
                        <li><AiOutlineInstagram /></li>
                        <li><AiOutlineTwitter /></li>
                        <li><BsYoutube /></li>
                    </div>
                </div>
                
            </div>
        </div>

        <div className='detail-2'>
            <h2>Send me a message</h2>
            <div className='form'>
                <form method='POST'>
                    <input type='text'  placeholder='Enter Your Full Name' required autoComplete='off' ></input>
                    <input type='email'  placeholder='Enter Your E-mail'  autoComplete='off' ></input>
                    <input type='text'  placeholder='Enter Your Subject'  autoComplete='off'></input>
                    <textarea  placeholder='Your Message'  autoComplete='off'></textarea>
                   
                        <button type='submit'>Send</button>
                    
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact