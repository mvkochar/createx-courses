import React from 'react'
import './Courses.css'
import CourseV from '../components/CourseV/CourseV'
import SingleCourse from '../components/SingleCourse/SingleCourse'

type CoursesProps = {
    singleCourse: boolean
    courseId: number 
    showSingleCourse: (courseId: number) => void 
}

const Courses = ({ singleCourse, courseId,  showSingleCourse }: CoursesProps) => {
    const [courseTab, setCourseTab] = React.useState(0);
    const [coursesMore, setCoursesMore] = React.useState(false)

    const handleCourseTab = (tabNum: number) => {
        setCourseTab(tabNum);
    }

    const handleCourseMore = () => {
        setCoursesMore((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <main>
            <div className={singleCourse ? "d-n" :"courses-wr"}>
                <div className="courses-main">
                    <div className="courses-main-undertitle">Enjoy your studying!</div>
                    <h3 className="courses-main-title">Our online courses</h3>
                    <div className="courses-main-actions d-f jc-sb">
                        <div className="courses-main-tabs d-f">
                            <button
                                className={courseTab === 0 ? "main-tabs-btn tabs-btn__active" : "main-tabs-btn"}
                                onClick={() => handleCourseTab(0)}
                            >
                                All <sup>18</sup>
                            </button>
                            <button
                                className={courseTab === 1 ? "main-tabs-btn tabs-btn__active" : "main-tabs-btn"}
                                onClick={() => handleCourseTab(1)}
                            >
                                Marketing <sup>4</sup>
                            </button>
                            <button
                                className={courseTab === 2 ? "main-tabs-btn tabs-btn__active" : "main-tabs-btn"}
                                onClick={() => handleCourseTab(2)}
                            >
                                Management <sup>4</sup>
                            </button>
                            <button
                                className={courseTab === 3 ? "main-tabs-btn tabs-btn__active" : "main-tabs-btn"}
                                onClick={() => handleCourseTab(3)}
                            >
                                HR & Recruiting <sup>4</sup>
                            </button>
                            <button
                                className={courseTab === 4 ? "main-tabs-btn tabs-btn__active" : "main-tabs-btn"}
                                onClick={() => handleCourseTab(4)}
                            >
                                Design <sup>4</sup>
                            </button>
                            <button
                                className={courseTab === 5 ? "main-tabs-btn tabs-btn__active" : "main-tabs-btn"}
                                onClick={() => handleCourseTab(5)}
                            >
                                Development <sup>2</sup>
                            </button>
                        </div>
                        <form action="" className="courses-main-search d-f">
                            <input type="text" name='searchQuery' placeholder='Search course...' />
                            <button><img src="images/search.png" alt="search" /></button>
                        </form>
                    </div>
                    <div className="courses-main-box d-f">
                        {courseTab === 0 || courseTab === 1 ?
                            <CourseV
                                image='images/courses-author1.png'
                                category='Marketing'
                                title='The Ultimate Google Ads Training Course'
                                price={100}
                                author='Jerome Bell'
                                catBgColor='#03CEA4'
                                courseId={0}
                                showSingleCourse={showSingleCourse}
                            />
                            : <div className="d-n"></div>
                        }
                        {courseTab === 0 || courseTab === 2 ?
                            <CourseV
                                image='images/courses-author2.png'
                                category='Management'
                                title='Product Management Fundamentals'
                                price={480}
                                author='Marvin McKinney'
                                catBgColor='#5A87FC'
                                courseId={1}
                                showSingleCourse={showSingleCourse}
                            />
                            : <div className="d-n"></div>
                        }
                        {courseTab === 0 || courseTab === 3 ?
                            <CourseV
                                image='images/courses-author3.png'
                                category='HR & Recruiting'
                                title='HR  Management and Analytics'
                                price={200}
                                author='Leslie Alexander Li'
                                catBgColor='#F89828'
                                courseId={2}
                                showSingleCourse={showSingleCourse}
                            />
                            : <div className="d-n"></div>
                        }
                        {courseTab === 0 || courseTab === 1 ?
                            <CourseV
                                image='images/courses-author4.png'
                                category='Marketing'
                                title='Brand Management & PR Communications'
                                price={530}
                                author='Kristin Watson'
                                catBgColor='#03CEA4'
                                courseId={3}
                                showSingleCourse={showSingleCourse}
                            />
                            : <div className="d-n"></div>
                        }
                        {courseTab === 0 || courseTab === 4 ?
                            <CourseV
                                image='images/courses-author5.png'
                                category='Design'
                                title='Graphic Design Basic'
                                price={500}
                                author='Guy Hawkins'
                                catBgColor='#F52F6E'
                                courseId={4}
                                showSingleCourse={showSingleCourse}
                            />
                            : <div className="d-n"></div>
                        }
                        {courseTab === 0 || courseTab === 2 ?
                            <CourseV
                                image='images/courses-author6.png'
                                category='Management'
                                title='Business Development Management'
                                price={400}
                                author='Dianne Russell'
                                catBgColor='#5A87FC'
                                courseId={5}
                                showSingleCourse={showSingleCourse}
                            />
                            : <div className="d-n"></div>
                        }
                        {courseTab === 0 || courseTab === 5 ?
                            <CourseV
                                image='images/courses-author7.png'
                                category='Development'
                                title='Highload Software Architecture'
                                price={600}
                                author='Brooklyn Simmons'
                                catBgColor='#7772F1'
                                courseId={6}
                                showSingleCourse={showSingleCourse}
                            />
                            : <div className="d-n"></div>
                        }
                        {courseTab === 0 || courseTab === 3 ?
                            <CourseV
                                image='images/courses-author8.png'
                                category='HR & Recruiting'
                                title='Human Resources - Selection and Recruitment'
                                price={150}
                                author='Kathryn Murphy'
                                catBgColor='#F89828'
                                courseId={7}
                                showSingleCourse={showSingleCourse}
                            />
                            : <div className="d-n"></div>
                        }
                        {courseTab === 0 || courseTab === 4 ?
                            <CourseV
                                image='images/courses-author9.png'
                                category='Design'
                                title='User Experience. Human-centered Design'
                                price={240}
                                author='Cody Fisher'
                                catBgColor='#F52F6E'
                                courseId={8}
                                showSingleCourse={showSingleCourse}
                            />
                            : <div className="d-n"></div>
                        }

                    </div>
                    <div className={coursesMore ? "courses-main-box d-f" : "d-n"} >
                        {courseTab === 0 || courseTab === 1 ?
                            <CourseV
                                image='images/courses-author1.png'
                                category='Marketing'
                                title='The Ultimate Google Ads Training Course'
                                price={100}
                                author='Jerome Bell'
                                catBgColor='#03CEA4'
                                courseId={0}
                                showSingleCourse={showSingleCourse}
                            />
                            : <div className="d-n"></div>
                        }
                        {courseTab === 0 || courseTab === 2 ?
                            <CourseV
                                image='images/courses-author2.png'
                                category='Management'
                                title='Product Management Fundamentals'
                                price={480}
                                author='Marvin McKinney'
                                catBgColor='#5A87FC'
                                courseId={1}
                                showSingleCourse={showSingleCourse}
                            />
                            : <div className="d-n"></div>
                        }
                        {courseTab === 0 || courseTab === 3 ?
                            <CourseV
                                image='images/courses-author3.png'
                                category='HR & Recruiting'
                                title='HR  Management and Analytics'
                                price={200}
                                author='Leslie Alexander Li'
                                catBgColor='#F89828'
                                courseId={2}
                                showSingleCourse={showSingleCourse}
                            />
                            : <div className="d-n"></div>
                        }
                        {courseTab === 0 || courseTab === 1 ?
                            <CourseV
                                image='images/courses-author4.png'
                                category='Marketing'
                                title='Brand Management & PR Communications'
                                price={530}
                                author='Kristin Watson'
                                catBgColor='#03CEA4'
                                courseId={3}
                                showSingleCourse={showSingleCourse}
                            />
                            : <div className="d-n"></div>
                        }
                        {courseTab === 0 || courseTab === 4 ?
                            <CourseV
                                image='images/courses-author5.png'
                                category='Design'
                                title='Graphic Design Basic'
                                price={500}
                                author='Guy Hawkins'
                                catBgColor='#F52F6E'
                                courseId={4}
                                showSingleCourse={showSingleCourse}
                            />
                            : <div className="d-n"></div>
                        }
                        {courseTab === 0 || courseTab === 2 ?
                            <CourseV
                                image='images/courses-author6.png'
                                category='Management'
                                title='Business Development Management'
                                price={400}
                                author='Dianne Russell'
                                catBgColor='#5A87FC'
                                courseId={5}
                                showSingleCourse={showSingleCourse}
                            />
                            : <div className="d-n"></div>
                        }
                        {courseTab === 0 || courseTab === 5 ?
                            <CourseV
                                image='images/courses-author7.png'
                                category='Development'
                                title='Highload Software Architecture'
                                price={600}
                                author='Brooklyn Simmons'
                                catBgColor='#7772F1'
                                courseId={6}
                                showSingleCourse={showSingleCourse}
                            />
                            : <div className="d-n"></div>
                        }
                        {courseTab === 0 || courseTab === 3 ?
                            <CourseV
                                image='images/courses-author8.png'
                                category='HR & Recruiting'
                                title='Human Resources - Selection and Recruitment'
                                price={150}
                                author='Kathryn Murphy'
                                catBgColor='#F89828'
                                courseId={7}
                                showSingleCourse={showSingleCourse}
                            />
                            : <div className="d-n"></div>
                        }
                        {courseTab === 0 || courseTab === 4 ?
                            <CourseV
                                image='images/courses-author9.png'
                                category='Design'
                                title='User Experience. Human-centered Design'
                                price={240}
                                author='Cody Fisher'
                                catBgColor='#F52F6E'
                                courseId={8}
                                showSingleCourse={showSingleCourse}
                            />
                            : <div className="d-n"></div>
                        }
                    </div>
                    <div className="courses-main-more d-f align-center">
                        <button onClick={handleCourseMore}><img src="images/convert.png" alt="convert" /></button>
                        <div className="main-more-title"> {coursesMore ? "Show less" : "Load-more"}</div>
                    </div>
                </div>
                <div className="createx-tutors"
                    style={{ background: `url("images/courses-testimonials-bg.png") no-repeat`, paddingTop: "80px" }}>
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
                <div className="createx-certificate d-f jc-sb">
                    <div>
                        <div className="createx-certificate-undertitle">Createx certificate</div>
                        <div className="createx-certificate-title">Your expertise will be confirmed</div>
                        <div className="createx-certificate-desc">We are accredited by international professional organizations and institutes:</div>
                        <div className="createx-certificate-accredited d-f">
                            <div><img src="images/org-logo1.png" alt="org-logo1" /></div>
                            <div><img src="images/org-logo2.png" alt="org-logo2" /></div>
                            <div><img src="images/org-logo3.png" alt="org-logo3" /></div>
                        </div>
                    </div>
                    <div><img src="images/certificate.png" alt="certificate" /></div>
                </div>
                <div className="createx-subscribe">
                    <div className="createx-subscribe-undertitle">Don't miss anything</div>
                    <div className="createx-subscribe-title">Subscribe to the Createx School announcements</div>
                    <form action="" className="createx-subscribe-fm d-f">
                        <input type="email" name='email' placeholder='Your working email' />
                        <button>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className={singleCourse ? "single-course-wr" : "d-n"}>
                  <SingleCourse courseId={courseId} />          
            </div>
        </main>
    )
}

export default Courses