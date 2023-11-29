import React from 'react'
import Logo from '../../assets/takeOff.png'
import {TiSocialFacebook} from 'react-icons/ti'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className = 'footer'>

            <div className = "sectionContainer container grid">
                <div className = "gridOne">
                    
                    <p>Your mind should be stronger than your feelings, fly!</p>
                    <div className="socialIcon flex">
                        <TiSocialFacebook className='icon'/>
                        <AiOutlineTwitter className='icon'/>
                        <AiFillYoutube className='icon'/>
                        <FaPinterestP className='icon'/>
                    </div>
                </div>
                
            
                    <div className="footerLinks">
                            <span className="linksTitle">Information</span>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Explore</a>
                            </li>
                            <li>
                                <a href="">Flight Status</a>
                            </li>
                            <li>
                                <a href="">Travel</a>
                            </li>
                            <li>
                                <a href="">Departure</a>
                            </li>
                            <li>
                                <a href="">Manage your Flights</a>
                            </li>
                            <span className="linksTitle">Quick Guide</span>
                            <li>
                                <a href="">FAQ</a>
                            </li>
                            <li>
                                <a href="">How To</a>
                            </li>
                            <li>
                                <a href="">Features</a>
                            </li>
                            <li>
                                <a href="">Baggage</a>
                            </li>
                            <li>
                                <a href="">Route Map</a>
                            </li>
                            <li>
                                <a href="">Our Communities</a>
                            </li>
                            <span className="linksTitle">Information</span>
                            <li>
                                <a href="#">Chauffer</a>
                            </li>
                            <li>
                                <a href="#">Our partners</a>
                            </li>
                            <li>
                                <a href="#">Destination</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                            <li>
                                <a href="#">Transportation</a>
                            </li>
                            <li>
                                <a href="#">Programme Rules</a>
                            </li>
                            
                        </div>
            </div>
        </div>
    )
}

export default Footer