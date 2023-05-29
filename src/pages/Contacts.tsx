import React from 'react'
import './Contacts.css'

const Contacts = () => {
    return (
        <main>
            <div className="contacts-info d-f jc-sb">
                <div>
                    <div className="contacts-info-undertitle">Contact info</div>
                    <h3 className="contacts-info-title">Get in touch</h3>
                    <div className="contacts-info-box d-f">
                        <div className="contacts-info-item d-f">
                            <div><img src="images/chat.png" alt="chat" /></div>
                            <div className="info-item-title"><span>Talk to us:</span><br/>hello@createx.com</div>
                        </div>
                        <div className="contacts-info-item d-f">
                            <div><img src="images/phone1.png" alt="phone" /></div>
                            <div className="info-item-title"><span>Call us:</span><br/>(405) 555-0128</div>
                        </div> 
                        <div className="contacts-info-item d-f">
                            <div><img src="images/location.png" alt="location" /></div>
                            <div className="info-item-title"><span>Address:</span><br/>2464 Royal Ln. Mesa, New Jersey 45463, USA</div>
                        </div>
                        <div className="contacts-info-social">
                            <div className="info-social-title">Follow us:</div>
                            <div className="info-social-box d-f">
                                <div><img src="images/social1.png" alt="social1" /></div>
                                <div><img src="images/social2.png" alt="social2" /></div>
                                <div><img src="images/social3.png" alt="social3" /></div>
                                <div><img src="images/social4.png" alt="social4" /></div>
                                <div><img src="images/social5.png" alt="social5" /></div>
                                <div><img src="images/social6.png" alt="social6" /></div>
                            </div>
                        </div>      
                    </div>
                </div>
                <div style={{marginTop: "84px"}}><img src="images/map.png" alt="map" /></div>
            </div>
            <div className="contacts-questions d-f">
                <div><img src="images/contacts-questions.png" alt="contacts-questions" /></div>
                <div>
                    <div className="contacts-questions-undertitle">Any questions?</div>
                    <h3 className="contacts-questions-title">Drop us a line</h3>
                    <form action="" className='contacts-questions-fm'>
                        <div className="input-box d-f">
                            <div className="input-box-item">
                                <label htmlFor="fName">First Name<sup>*</sup></label>
                                <input type="text" name="fName" id='fName' placeholder='Your first name'/>
                            </div>
                            <div className="input-box-item">
                                <label htmlFor="lName">Last Name<sup>*</sup></label>
                                <input type="text" name="lName" id='lName' placeholder='Your last name'/>
                            </div>
                            <div className="input-box-item">
                                <label htmlFor="email">Email<sup>*</sup></label>
                                <input type="email" name="email" id="email" placeholder='Your working email' />
                            </div>
                            <div className="input-box-item">
                                <label htmlFor="phone">Phone</label>
                                <input type="tel" name="phone" id="phone" placeholder='Your phone number' />
                            </div>
                        </div>
                        <div className="msg-bl">
                            <label htmlFor="">Message</label>
                            <textarea name="message" id="massage" placeholder='Your message'></textarea>
                        </div>
                        <div className="action-bl d-f">
                            <div className="agree-bl d-f">
                                <input type="checkbox" name="agree" id="agree" />
                                <label htmlFor="agree">I agree to receive communications from Createx Online School</label>
                            </div>
                            <button>Send message</button>
                        </div>
                    </form>
                </div>

            </div>
        </main>
    )
}

export default Contacts