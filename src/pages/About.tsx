import React from 'react'

import './About.css'

const About = () => {
    return (
        <main>
            <div className="about-main d-f jc-sb">
                <div>
                    <div className="about-main-undertitle">About us</div>
                    <div className="about-main-title">Createx Online School</div>
                    <div className="about-main-subtitle">
                        Createx Online School is a leader in online studying.
                        We have lots of courses and programs from the main market experts.
                    </div>
                    <p className="about-main-desc">
                        We provide relevant approaches to online learning, internships and employment in the largest companies in the country.
                        Our educational programs help you get a new specialty from scratch. During your studies, we will help you find a job.
                        Check the courses and online events that we organize.
                    </p>
                    <div className="about-main-actions d-f">
                        <button>Explore events</button>
                        <button>Explore courses</button>
                    </div>
                </div>
                <div><img src="images/about-main.png" alt="about-main" /></div>
            </div>
            <div className="about-video">
                <div className="about-video-caption d-f align-center">
                    <div><img src="images/video.png" alt="video" /></div>
                    <div className="about-video-title">Watch Video</div>
                </div>
                <div className="d-f jc-sb align-center">
                    <div><img src="images/about-video.png" alt="about-video" /></div>
                    <ul className="about-video-stats">
                        <li className="video-stats-item d-f align-center"><span>1200</span> students graduated</li>
                        <li className="video-stats-item d-f align-center"><span>84</span> completed courses</li>
                        <li className="video-stats-item d-f align-center"><span>16</span> qualified tutors</li>
                        <li className="video-stats-item d-f align-center"><span>5</span> years of experience</li>
                    </ul>
                </div>
            </div>
            <div className="about-middle">
                <div className="about-values">
                    <div className="about-middle-undertitle" style={{ textAlign: "center" }}>We always stand for</div>
                    <h3 className="about-middle-title" style={{ textAlign: "center" }}>Our core values</h3>
                    <div className="about-values-box d-f">
                        <div className="about-values-item">
                            <div><img src="images/about-values1.png" alt="about-values1" /></div>
                            <div className="values-item-title">Structured Approach</div>
                            <p className="values-item-desc">
                                Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.
                            </p>
                        </div>
                        <div className="about-values-item">
                            <div><img src="images/about-values2.png" alt="about-values2" /></div>
                            <div className="values-item-title">Professional Feedbacks</div>
                            <p className="values-item-desc">
                                Culpa nostrud commodo ea consequat reprehenderit aliquip.
                            </p>
                        </div>
                        <div className="about-values-item">
                            <div><img src="images/about-values3.png" alt="about-values3" /></div>
                            <div className="values-item-title">Efficiency</div>
                            <p className="values-item-desc">
                                Viverra scelerisque consequat net. Adipisicing esse consequat.
                            </p>
                        </div>
                        <div className="about-values-item">
                            <div><img src="images/about-values4.png" alt="about-values4" /></div>
                            <div className="values-item-title">Flexible Schedule</div>
                            <p className="values-item-desc">
                                Viverra scelerisque consequat net. Adipisicing esse consequat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="about-directions">
                    <div className="about-middle-undertitle" style={{ textAlign: "center" }}>Our main directions</div>
                    <h3 className="about-middle-title" style={{ textAlign: "center" }}>What do we teach</h3>
                    <div className="about-directions-box d-f">
                        <div className="about-directions-item">
                            <div><img src="images/directions1.png" alt="directions1" /></div>
                            <div className="directions-item-category">Marketing</div>
                            <p className="directions-item-desc">
                                Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus.
                                Viverra scelerisque consequat.
                            </p>
                            <div className="directions-item-action d-f align-center">
                                <div className="item-action-title">Check courses</div>
                                <button><img src="images/arrow-right.png" alt="arrow-right" /></button>
                            </div>
                        </div>
                        <div className="about-directions-item">
                            <div><img src="images/directions2.png" alt="directions2" /></div>
                            <div className="directions-item-category">Management</div>
                            <p className="directions-item-desc">
                                Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus.
                                Viverra scelerisque consequat.
                            </p>
                            <div className="directions-item-action d-f align-center">
                                <div className="item-action-title">Check courses</div>
                                <button><img src="images/arrow-right.png" alt="arrow-right" /></button>
                            </div>
                        </div>
                        <div className="about-directions-item">
                            <div><img src="images/directions3.png" alt="directions3" /></div>
                            <div className="directions-item-category">HR & Recruiting</div>
                            <p className="directions-item-desc">
                                Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus.
                                Viverra scelerisque consequat.
                            </p>
                            <div className="directions-item-action d-f align-center">
                                <div className="item-action-title">Check courses</div>
                                <button><img src="images/arrow-right.png" alt="arrow-right" /></button>
                            </div>
                        </div>
                        <div className="about-directions-item">
                            <div><img src="images/directions4.png" alt="directions4" /></div>
                            <div className="directions-item-category">Design</div>
                            <p className="directions-item-desc">
                                Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus.
                                Viverra scelerisque consequat.
                            </p>
                            <div className="directions-item-action d-f align-center">
                                <div className="item-action-title">Check courses</div>
                                <button><img src="images/arrow-right.png" alt="arrow-right" /></button>
                            </div>
                        </div>
                        <div className="about-directions-item">
                            <div><img src="images/directions5.png" alt="directions5" /></div>
                            <div className="directions-item-category">Development</div>
                            <p className="directions-item-desc">
                                Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus.
                                Viverra scelerisque consequat.
                            </p>
                            <div className="directions-item-action d-f align-center">
                                <div className="item-action-title">Check courses</div>
                                <button><img src="images/arrow-right.png" alt="arrow-right" /></button>
                            </div>
                        </div>
                        <div className="about-directions-new">New studying program coming soon...</div>
                    </div>
                </div>
                <div className="about-studying d-f jc-sb">
                    <div>
                        <div className="about-middle-undertitle">Studying process</div>
                        <h3 className="about-middle-title">That's how we do it</h3>
                        <div className="about-studying-box d-f">
                            <div><img src="images/line.png" alt="line" /></div>
                            <div>
                                <div className="about-studying-step">
                                    <div className="studying-step-undertitle">Step 1</div>
                                    <div className="studying-step-title">Watching online video lectures</div>
                                    <p className="studying-step-desc">
                                        Aliquam turpis viverra quam sit interdum blandit posuere pellentesque.
                                        Nisl, imperdiet gravida massa neque.
                                    </p>
                                </div>
                                <div className="about-studying-step">
                                    <div className="studying-step-undertitle">Step 2</div>
                                    <div className="studying-step-title">Passing test</div>
                                    <p className="studying-step-desc">
                                        Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet,
                                        sollicitudin egestas laoreet etiam.
                                    </p>
                                </div>
                                <div className="about-studying-step">
                                    <div className="studying-step-undertitle">Step 3</div>
                                    <div className="studying-step-title">Curator's feedback</div>
                                    <p className="studying-step-desc">
                                        Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis.
                                        Aliquet orci varius volutpat egestas facilisi lobortis.
                                    </p>
                                </div>
                                <div className="about-studying-step">
                                    <div className="studying-step-undertitle">Step 4</div>
                                    <div className="studying-step-title">Corrections if needed</div>
                                    <p className="studying-step-desc">
                                        Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor.
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div><img src="images/studying.png" alt="studying" /></div>
                </div>
            </div>
            <div className="about-team">
                <div className="about-middle-undertitle" style={{ textAlign: "center" }}>Best tutors are all here</div>
                <h3 className="about-middle-title" style={{ textAlign: "center" }}>Meet our team</h3>
                <div className="about-team-box d-f">
                    <div className="about-team-member">
                        <div className="team-member-img"><img src="images/team/team1.png" alt="team1" /></div>
                        <div className="team-member-name">Dianne Russell</div>
                        <div className="team-member-position">Founder and CEO</div>
                    </div>
                    <div className="about-team-member">
                        <div className="team-member-img"><img src="images/team/team2.png" alt="team2" /></div>
                        <div className="team-member-name">Jerome Bell</div>
                        <div className="team-member-position">Founder and Program Director</div>
                    </div>
                    <div className="about-team-member">
                        <div className="team-member-img"><img src="images/team/team3.png" alt="team3" /></div>
                        <div className="team-member-name">Kristin Watson</div>
                        <div className="team-member-position">Marketer, Curator of Marketing Course</div>
                    </div>
                    <div className="about-team-member">
                        <div className="team-member-img"><img src="images/team/team4.png" alt="team4" /></div>
                        <div className="team-member-name">Marvin McKinney</div>
                        <div className="team-member-position">PM, Curator of Management Course</div>
                    </div>
                    <div className="about-team-member">
                        <div className="team-member-img"><img src="images/team/team5.png" alt="team5" /></div>
                        <div className="team-member-name">Leslie Alexander Li</div>
                        <div className="team-member-position">Curator of HR & Recruiting Course</div>
                    </div>
                    <div className="about-team-member">
                        <div className="team-member-img"><img src="images/team/team6.png" alt="team6" /></div>
                        <div className="team-member-name">Kathryn Murphy</div>
                        <div className="team-member-position">Analyst and Marketing specialist</div>
                    </div>
                    <div className="about-team-member">
                        <div className="team-member-img"><img src="images/team/team7.png" alt="team7" /></div>
                        <div className="team-member-name">Brooklyn Simmons</div>
                        <div className="team-member-position">Curator of Development Course</div>
                    </div>
                    <div className="about-team-member">
                        <div className="team-member-img"><img src="images/team/team8.png" alt="team8" /></div>
                        <div className="team-member-name">Cody Fisher</div>
                        <div className="team-member-position">UX Designer, Curator of Design Course</div>
                    </div>
                </div>
            </div>
            <div className="about-students">
                <div className="createx-tutors" style={{ background: "transparent", paddingTop: 0 }}>
                    <div className="createx-tutors-testimonials" style={{ marginTop: 0 }}>
                        <div className="tutors-testimonials-undertitle">Testimonials</div>
                        <div className="tutors-testimonials-title">What our students say</div>
                        <div className="tutors-testimonials-box d-f jc-sb align-center">
                            <button className="testimonials-prev-btn"><img src="images/prev-btn.png" alt="prev-btn" /></button>
                            <div className="tutors-testimonials-review d-f">
                                <div><img src="images/braces.png" alt="braces" /></div>
                                <div>
                                    <p className="testimonials-review-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis
                                        fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non.
                                        Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.
                                    </p>
                                    <div className="testimonials-review-caption d-f align-center">
                                        <div><img src="images/review1.png" alt="Eleanor Pena" /></div>
                                        <div>
                                            <div className="testimonials-review-name">Eleanor Pena</div>
                                            <div className="testimonials-review-desc">Student, HR  Management and Analytics</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <button className="testimonials-next-btn  testimonials-btn__active"><img src="images/next-btn.png" alt="next-btn" /></button>
                        </div>
                        <div className="tutors-testimonials-sliders d-f">
                            <div className="testimonials-sliders-item  sliders-item__active"></div>
                            <div className="testimonials-sliders-item"></div>
                            <div className="testimonials-sliders-item"></div>
                            <div className="testimonials-sliders-item"></div>
                            <div className="testimonials-sliders-item"></div>
                        </div>
                    </div>
                </div>
                <div className="about-students-jobs">
                    <div className="about-middle-undertitle" style={{ textAlign: "center" }}>Best jobs for you</div>
                    <h3 className="about-middle-title" style={{ textAlign: "center" }}>Our students work here</h3>
                    <div className="students-jobs-box d-f">
                        <div><img src="images/job-logo1.png" alt="job-logo1" /></div>
                        <div><img src="images/job-logo2.png" alt="job-logo2" /></div>
                        <div><img src="images/job-logo3.png" alt="job-logo3" /></div>
                        <div><img src="images/job-logo4.png" alt="job-logo4" /></div>
                        <div><img src="images/job-logo5.png" alt="job-logo5" /></div>
                        <div><img src="images/job-logo6.png" alt="job-logo6" /></div>
                        <div><img src="images/job-logo7.png" alt="job-logo7" /></div>
                        <div><img src="images/job-logo8.png" alt="job-logo8" /></div>
                        <div><img src="images/job-logo9.png" alt="job-logo9" /></div>
                        <div><img src="images/job-logo10.png" alt="job-logo10" /></div>
                        <div><img src="images/job-logo11.png" alt="job-logo11" /></div>
                        <div><img src="images/job-logo12.png" alt="job-logo12" /></div>
                    </div>
                </div>
            </div>
            <div className="createx-blog">
                <div className="createx-blog-undertitle">Our blog</div>
                <div className="createx-blog-caption d-f jc-sb">
                    <div className="createx-blog-title">Latest posts</div>
                    <button className='createx-blog-btn'>Go to blog</button>
                </div>
                <div className="createx-blog-box d-f">
                    <div className="createx-blog-item">
                        <div className="blog-item-main">
                            <div className="blog-item-type">Podcast</div>
                            <div><img src="images/post1.png" alt="post1" /></div>
                        </div>
                        <div className="blog-item-info d-f">
                            <div className="blog-item-cat">Marketing</div>
                            <div className="blog-item-date">September 4, 2020</div>
                            <div className="blog-item-time">36 min</div>
                        </div>
                        <div className="blog-item-title">What is traffic arbitrage and does it really make money?</div>
                        <div className="blog-item-subtitle">
                            Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...
                        </div>
                        <div className="blog-item-action d-f">
                            <div className="item-action-title">Listen</div>
                            <button className="item-action-btn"><img src="images/arrow-right.png" alt="arrow-right" /></button>
                        </div>
                    </div>
                    <div className="createx-blog-item">
                        <div className="blog-item-main">
                            <div className="blog-item-type">Video</div>
                            <div><img src="images/post2.png" alt="post2" /></div>
                        </div>
                        <div className="blog-item-info d-f">
                            <div className="blog-item-cat">Management</div>
                            <div className="blog-item-date">August 25, 2020</div>
                            <div className="blog-item-time">45 min</div>
                        </div>
                        <div className="blog-item-title">What to do and who to talk to if you want to get feedback on the product</div>
                        <div className="blog-item-subtitle">
                            Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...
                        </div>
                        <div className="blog-item-action d-f">
                            <div className="item-action-title">Watch</div>
                            <button className="item-action-btn"><img src="images/arrow-right.png" alt="arrow-right" /></button>
                        </div>
                    </div>
                    <div className="createx-blog-item">
                        <div className="blog-item-main">
                            <div className="blog-item-type">Article</div>
                            <div><img src="images/post3.png" alt="post3" /></div>
                        </div>
                        <div className="blog-item-info d-f">
                            <div className="blog-item-cat">Design</div>
                            <div className="">August 8, 2020</div>
                        </div>
                        <div className="blog-item-title">Should you choose a creative profession if you are attracted to creativity?</div>
                        <div className="blog-item-subtitle">
                            Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...
                        </div>
                        <div className="blog-item-action d-f">
                            <div className="item-action-title">Read</div>
                            <button className="item-action-btn"><img src="images/arrow-right.png" alt="arrow-right" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="createx-subscribe">
                <div className="createx-subscribe-undertitle">Don't miss anything</div>
                <div className="createx-subscribe-title">Subscribe to the Createx School announcements</div>
                <form action="" className="createx-subscribe-fm d-f">
                    <input type="email" name='email' placeholder='Your working email' />
                    <button>Subscribe</button>
                </form>
            </div>
        </main>
    )
}

export default About