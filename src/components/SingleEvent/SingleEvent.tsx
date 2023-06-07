import React from 'react'
import './SingleEvent.css'

type SingleEventProps = {
    category: string
    title: string
    speaker?: string
    speakerPhoto?: string
    speakerPosition?: string
    date?: string
    time?: string
}

const SingleEvent = ({ category, title, speaker, speakerPhoto, speakerPosition, date, time }: SingleEventProps) => {

    const [themeFirstDesc, setThemeFirstDesc] = React.useState(false)
    const [themeSecondDesc, setThemeSecondDesc] = React.useState(false)
    const [themeThirdDesc, setThemeThirdDesc] = React.useState(false)
    const [themeFourthDesc, setThemeFourthDesc] = React.useState(false)

    const handleThemeFirstDesc = () => {
        setThemeFirstDesc((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleThemeSecondDesc = () => {
        setThemeSecondDesc((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleThemeThirdDesc = () => {
        setThemeThirdDesc((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleThemeFourthDesc = () => {
        setThemeFourthDesc((prevState) => {
            return (
                !prevState
            )
        })
    }


    return (
        <div className='single-event'>
            <div className="single-event-caption">
                <div className="single-event-category">{category}</div>
                <h3 className="single-event-title">{title}</h3>
            </div>
            <div className="single-event-main d-f jc-sb">
                <div>
                    <h3 className="event-main-title">We will talk about:</h3>
                    <div className="event-main-box d-f">
                        <div className="event-main-item d-f">
                            <button
                                onClick={handleThemeFirstDesc}
                            >
                                <img src={themeFirstDesc ? "images/minus.png" : "images/plus.png"} alt="plus/minus" />
                            </button>
                            <div>
                                <div className="main-item-title"><span>Theme 1.</span> Aliquet lectus urna viverra in odio.</div>
                                <p className={themeFirstDesc ? "main-item-desc" : "d-n"}>
                                    Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare.
                                    Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed.
                                    Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci
                                    vitae accumsan id.
                                </p>
                            </div>

                        </div>
                        <div className="event-main-item d-f">
                            <button onClick={handleThemeSecondDesc}>
                                <img src={themeSecondDesc ? "images/minus.png" : "images/plus.png"} alt="plus/minus" />
                            </button>
                            <div>
                                <div className="main-item-title"><span>Theme 2.</span> Orci commodo, viverra orci mollis ut euismod.</div>
                                <p className={themeSecondDesc ? "main-item-desc" : "d-n"}>
                                    Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare.
                                    Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed.
                                    Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae
                                    accumsan id.
                                </p>
                            </div>
                        </div>
                        <div className="event-main-item d-f">
                            <button onClick={handleThemeThirdDesc}>
                                <img src={themeThirdDesc ? "images/minus.png" : "images/plus.png"} alt="plus/minus" />
                            </button>
                            <div>
                                <div className="main-item-title">
                                    <span>Theme 3.</span> Sagittis vitae facilisi rutrum amet mauris quisque vel.
                                </div>
                                <p className={themeThirdDesc ? "main-item-desc" : "d-n"}>
                                    Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare.
                                    Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed.
                                    Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae
                                    accumsan id.
                                </p>
                            </div>
                        </div>
                        <div className="event-main-item d-f">
                            <button onClick={handleThemeFourthDesc}>
                                <img src={themeFourthDesc ? "images/minus.png" : "images/plus.png"} alt="plus/minus" />
                            </button>
                            <div>
                                <div className="main-item-title">
                                    <span>Theme 4.</span> In id dolor quis nunc, urna hendrerit pharetra.
                                </div>
                                <p className={themeFourthDesc ? "main-item-desc" : "d-n"}>
                                    Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare.
                                    Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed.
                                    Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae
                                    accumsan id.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="single-event-info">
                    <div className="event-info-box d-f">
                        <div className="event-info-item">
                            <div className="event-info-undertitle">Time</div>
                            <div className="event-info-title">{date}, {time} </div>
                            <p className="event-info-desc">Metus turpis sit lorem lacus, in elit tellus lacus.</p>
                        </div>
                        <div className="event-info-item">
                            <div className="event-info-undertitle">Price</div>
                            <div className="event-info-title">Free</div>
                            <p className="event-info-desc">
                                Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.
                            </p>
                        </div>

                    </div>
                    <div className="event-info-social">
                        <h4>Event on Facebook</h4>
                        <button>Join the event</button>
                    </div>
                </div>
            </div>
            <div className="single-event-middle">
                <div className="single-event-speaker d-f jc-sb">
                    <div><img src={speakerPhoto} alt="speaker" /></div>
                    <div>
                        <div className="event-speaker-undertitle">Speaker</div>
                        <div className="event-speaker-title">{speaker}</div>
                        <div className="event-speaker-subtitle">{speakerPosition}</div>
                        <p className="event-speaker-desc">
                            Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate
                            venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio.
                            Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo
                            platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin
                            interdum quam.
                        </p>
                        <div className="event-speaker-partners d-f">
                            <div><img src="images/event-partner1.png" alt="event-partner1" /></div>
                            <div><img src="images/event-partner2.png" alt="event-partner2" /></div>
                            <div><img src="images/event-partner3.png" alt="event-partner3" /></div>
                        </div>
                        <div className="event-speaker-social d-f">
                            <div><img src="images/social1.png" alt="social1" /></div>
                            <div><img src="images/social5.png" alt="social5" /></div>
                            <div><img src="images/social2.png" alt="social2" /></div>
                            <div><img src="images/social6.png" alt="social6" /></div>
                        </div>

                    </div>
                </div>
                <div className="single-event-benefit d-f jc-sb">
                    <div>
                        <div className="event-benefit-undertitle">For whom?</div>
                        <h3 className="event-benefit-title">Who will benefit from the event:</h3>
                    </div>
                    <div>
                        <div className="event-benefit-item d-f">
                            <div><img src="images/check.png" alt="check" /></div>
                            <div className="benefit-item-title">Specialists with more than 1 year of active work experience</div>
                        </div>
                        <div className="event-benefit-item d-f">
                            <div><img src="images/check.png" alt="check" /></div>
                            <div className="benefit-item-title">
                                Mobile app designers who want to improve their skills in solving business problems,
                                creating and testing human-centered interfaces
                            </div>
                        </div>
                        <div className="event-benefit-item d-f">
                            <div><img src="images/check.png" alt="check" /></div>
                            <div className="benefit-item-title">Professional designers who want to feel more confident in UX</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-event-subscribe d-f jc-sb">
                <div><img src="images/event-message.png" alt="event-message" /></div>
                <div>
                    <h3 className="event-subscribe-title">Don't want to miss the best events? Subscribe to our newsletter!</h3>
                    <form action="" className="event-subscribe-fm">
                        <div className="email-bl d-f">
                            <input type='email' name='email' placeholder='Your working email' />
                            <button>Subscribe</button>
                        </div>
                        <div className="check-bl d-f align-center">
                            <input type="checkbox" name='agree' id='agree' />
                            <label htmlFor="agree">I agree to receive communications from Createx Online School</label>
                        </div>
                    </form>
                </div>
            </div>
            <div className="single-event-join d-f jc-sb align-center">
                <div>
                    <div className="event-join-undertitle">Don't miss the event</div>
                    <h3 className="event-join-title">Leave a request</h3>
                    <form action="" className="event-join-fm d-f">
                        <div className="input-bl">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" name='fullName' id='fullName' placeholder='Your full name' required />
                        </div>
                        <div className="input-bl">
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' id='email' placeholder='Your working email' required />
                        </div>
                        <div className="input-bl">
                            <label htmlFor="phone">Phone</label>
                            <input type='tel' name='phone' id='phone' placeholder='Your phone number' required />
                        </div>
                        <button>Join the event</button>
                        <div className="event-join-info">
                            <sup>*</sup> You will receive a link to the online lecture in an email after registration.
                        </div>
                    </form>
                </div>
                <div><img src="images/event-join.png" alt="event-join" /></div>
            </div>
            <div className="single-event-interested">
                <div className="event-interested-undertitle">Check other online events</div>
                <h3 className="event-interested-title">You may be interested in</h3>
                <div className="event-interested-box d-f jc-sb">
                    <div className="events-main-card">
                        <div className="main-card-date">05 Aug</div>
                        <div className="main-card-time">11:00 - 14:00</div>
                        <div className="main-card-title">Formation of the organizational structure of the company in the face of uncertainty.</div>
                        <div className="main-card-cat">Online master-class</div>
                        <button className="main-card-more">View more</button>
                    </div>
                    <div className="events-main-card">
                        <div className="main-card-date">24 Jul</div>
                        <div className="main-card-time">11:00 - 12:30</div>
                        <div className="main-card-title">Building a customer service department. Best Practices.</div>
                        <div className="main-card-cat">Online lecture</div>
                        <button className="main-card-more">View more</button>
                    </div>
                    <div className="events-main-card">
                        <div className="main-card-date">10 Jul</div>
                        <div className="main-card-time">9:00 - 14:00</div>
                        <div className="main-card-title">Find and evaluate: search and assessment tools for candidates.</div>
                        <div className="main-card-cat">Online workshop</div>
                        <button className="main-card-more">View more</button>
                    </div>
                </div>
                <div className="event-interested-action d-f">
                    <h4>Do you want more?</h4>
                    <button>Explore all events</button>
                </div>

            </div>

        </div>
    )
}

export default SingleEvent