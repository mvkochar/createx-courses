import React from 'react'
import "./SingleCourse.css"
import { coursesArray } from '../CoursesArray/CoursesArray'
import CourseH from '../CourseH/CourseH'


type SingleCourseProps = {
  courseId: number
}

const SingleCourse = ({ courseId }: SingleCourseProps) => {

  const [lessonFirstDesc, setLessonFirstDesc] = React.useState(false)
  const [lessonSecondDesc, setLessonSecondDesc] = React.useState(false)
  const [lessonThirdDesc, setLessonThirdDesc] = React.useState(false)
  const [lessonFourthDesc, setLessonFourthDesc] = React.useState(false)
  const [lessonFifthDesc, setLessonFifthDesc] = React.useState(false)
  const [lessonSixthDesc, setLessonSixthDesc] = React.useState(false)
  const [lessonSeventhDesc, setLessonSeventhDesc] = React.useState(false)
  const [lessonEighthDesc, setLessonEighthDesc] = React.useState(false)

  const handleLessonFirstDesc = () => {
    setLessonFirstDesc((prevState) => {
      return (
        !prevState
      )
    })
  }

  const handleLessonSecondDesc = () => {
    setLessonSecondDesc((prevState) => {
      return (
        !prevState
      )
    })
  }

  const handleLessonThirdDesc = () => {
    setLessonThirdDesc((prevState) => {
      return (
        !prevState
      )
    })
  }

  const handleLessonFourthDesc = () => {
    setLessonFourthDesc((prevState) => {
      return (
        !prevState
      )
    })
  }

  const handleLessonFifthDesc = () => {
    setLessonFifthDesc((prevState) => {
      return (
        !prevState
      )
    })
  }

  const handleLessonSixthDesc = () => {
    setLessonSixthDesc((prevState) => {
      return (
        !prevState
      )
    })
  }

  const handleLessonSeventhDesc = () => {
    setLessonSeventhDesc((prevState) => {
      return (
        !prevState
      )
    })
  }

  const handleLessonEighthDesc = () => {
    setLessonEighthDesc((prevState) => {
      return (
        !prevState
      )
    })
  }

  return (
    <div className="single-course">
      <div className="single-course-caption">
        <div className="single-course-undertitle">Course</div>
        <h2 className="single-course-title">{coursesArray[courseId].title}</h2>
      </div>
      <div className="single-course-main d-f jc-sb">
        <div>
          <div className="course-main-title">About the course</div>
          <p className="course-main-desc">
            Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis,
            felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas
            libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes,
            pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus
            nunc tincidunt tortor, mi nulla pellentesque...
          </p>
          <div className="course-main-learn">
            <div className="main-learn-title">You will learn:</div>
            <div className="main-learn-box d-f">
              <div className="main-learn-item"></div>
              <div className="main-learn-item d-f align-center">
                <div><img src="images/check.png" alt="check" /></div>
                <p>A fermentum in morbi pretium aliquam adipiscing donec tempus.</p>
              </div>
              <div className="main-learn-item d-f align-center">
                <div><img src="images/check.png" alt="check" /></div>
                <p>Vulputate placerat amet pulvinar lorem nisl.</p>
              </div>
              <div className="main-learn-item d-f align-center">
                <div><img src="images/check.png" alt="check" /></div>
                <p>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</p>
              </div>
              <div className="main-learn-item d-f align-center">
                <div><img src="images/check.png" alt="check" /></div>
                <p>Etiam duis lobortis in fames ultrices commodo nibh.</p>
              </div>
              <div className="main-learn-item d-f align-center">
                <div><img src="images/check.png" alt="check" /></div>
                <p>Fringilla in nec risus congue venenatis pretium posuere nec.</p>
              </div>
              <div className="main-learn-item d-f align-center">
                <div><img src="images/check.png" alt="check" /></div>
                <p>Cursus eu pretium, vulputate tempus quam massa sed at.</p>
              </div>
            </div>

          </div>
        </div>
        <div className="course-main-info">
          <div className="main-info-box d-f">
            <div className="main-info-item">
              <div className="main-info-undertitle">Dates</div>
              <div className="main-info-title">Sept 7 - Nov 2</div>
              <div className="main-info-desc">Metus turpis sit lorem lacus, in elit tellus lacus.</div>
            </div>
            <div className="main-info-item">
              <div className="main-info-undertitle">Duration</div>
              <div className="main-info-title">2 months - 8 lessons</div>
              <div className="main-info-desc">Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.</div>
            </div>
            <div className="main-info-item">
              <div className="main-info-undertitle">Price</div>
              <div className="main-info-title">${coursesArray[courseId].price} per month</div>
              <div className="main-info-desc">
                Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.
              </div>
            </div>
          </div>
          <button>Join the course</button>
        </div>
      </div>
      <div className="single-course-middle">
        <div className="single-course-creator d-f jc-sb">
          <div><img src={coursesArray[courseId].image} alt="curator" /></div>
          <div>
            <div className="course-creator-undertitle">Course creator</div>
            <div className="course-creator-title">{coursesArray[courseId].author}</div>
            <div className="course-creator-subtitle">Senior UX designer in IT Product Company</div>
            <div className="course-creator-info d-f">
              <div className="creator-info-item d-f">
                <div><img src="images/star.png" alt="star" /></div>
                <h5>4.9 rate</h5>
              </div>
              <div className="creator-info-item d-f">
                <div><img src="images/play2.png" alt="play" /></div>
                <h5>4 courses</h5>
              </div>
              <div className="creator-info-item d-f">
                <div><img src="images/profile2.png" alt="profile" /></div>
                <h5>350 students</h5>
              </div>
            </div>
            <p className="course-creator-desc">
              Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis,
              vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat.
              Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie
              laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non.
              Nam vel aliquam tristique sollicitudin interdum quam.
            </p>
            <div className="course-creator-social d-f">
              <div><img src="images/social1.png" alt="social" /></div>
              <div><img src="images/social8.png" alt="social" /></div>
              <div><img src="images/social4.png" alt="social" /></div>
              <div><img src="images/social6.png" alt="social" /></div>
            </div>
          </div>

        </div>
        <div className="single-course-steps">
          <div className="course-steps-undertitle">Main steps</div>
          <h3 className="course-steps-title">Online learning process</h3>
          <div className="course-steps-box d-f">
            <div className="course-steps-item">
              <div className="steps-item-main d-f align-center">
                <div className="steps-item-num">01</div>
                <div><img src="images/line2.png" alt="line" /></div>
              </div>
              <div className="steps-item-title">Watching online video lectures</div>
              <p className="steps-item-desc">
                Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.
              </p>
            </div>
            <div className="course-steps-item">
              <div className="steps-item-main d-f align-center">
                <div className="steps-item-num">02</div>
                <div><img src="images/line2.png" alt="line" /></div>
              </div>
              <div className="steps-item-title">Passing test</div>
              <p className="steps-item-desc">
                Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim ad tempor est ea.
              </p>
            </div>
            <div className="course-steps-item">
              <div className="steps-item-main d-f align-center">
                <div className="steps-item-num">03</div>
                <div><img src="images/line2.png" alt="line" /></div>
              </div>
              <div className="steps-item-title">Curator's feedback</div>
              <p className="steps-item-desc">
                Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.
              </p>
            </div>
            <div className="course-steps-item">
              <div className="steps-item-main d-f align-center">
                <div className="steps-item-num item-num__red">04</div>
                <div><img src="images/line2.png" alt="line" /></div>
              </div>
              <div className="steps-item-title">Corrections if needed</div>
              <p className="steps-item-desc">
                Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.
              </p>
            </div>
          </div>
        </div>
        <div className="single-course-discount">
          <div className="course-discount-main d-f jc-sb">
            <h4 className="course-discount-title">20% discount for early birds!</h4>
            <div className="course-discount-times d-f">
              <div className="discount-times-item">
                <div className="times-item-title">06</div>
                <div className="times-item-subtitle">Days</div>
              </div>
              <div className="discount-times-item">
                <div className="times-item-title">18</div>
                <div className="times-item-subtitle">Hours</div>
              </div>
              <div className="discount-times-item">
                <div className="times-item-title">24</div>
                <div className="times-item-subtitle">Mins</div>
              </div>
              <div className="discount-times-item">
                <div className="times-item-title">12</div>
                <div className="times-item-subtitle">Sec</div>
              </div>
            </div>
          </div>
          <form action="" className="course-discount-fm d-f">
            <div className="input-bl">
              <label htmlFor="fullName">Full name</label>
              <input type="text" name='fullName' id='fullName' placeholder='Your full name' />
            </div>
            <div className="input-bl">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder='Your working email' />
            </div>
            <div className="input-bl">
              <label htmlFor="phone">Phone</label>
              <input type="tel" name="phone" id="phone" placeholder='Your phone number' />
            </div>
            <button>Join the course</button>
          </form>
        </div>
        <div className="single-course-benefit d-f jc-sb">
          <div>
            <div className="course-benefit-undertitle">For whom</div>
            <h3 className="course-benefit-title">Who will benefit from the course:</h3>
          </div>
          <div className="course-benefit-box d-f">
            <div className="course-benefit-item d-f">
              <div><img src="images/check.png" alt="check" /></div>
              <h5>Specialists with more than 1 year of active work experience</h5>
            </div>
            <div className="course-benefit-item d-f">
              <div><img src="images/check.png" alt="check" /></div>
              <h5>
                Mobile app designers who want to improve their skills in solving business problems, creating
                and testing human-centered interfaces
              </h5>
            </div>
            <div className="course-benefit-item d-f">
              <div><img src="images/check.png" alt="check" /></div>
              <h5>Professional designers who want to feel more confident in UX</h5>
            </div>
            <div className="course-benefit-item d-f">
              <div><img src="images/check.png" alt="check" /></div>
              <h5>Specialists who would like to structure their knowledge, fill in the gaps</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="single-course-program d-f jc-sb align-center">
        <div>
          <div className="course-program-undertitle">Course program</div>
          <h3 className="course-program-title">What will you learn</h3>
          <div className="course-program-box d-f">
            <div className="course-program-item d-f">
              <button onClick={handleLessonFirstDesc}>
                <img src={lessonFirstDesc ? "images/minus.png" : "images/plus.png"} alt="plus/minus" />
              </button>
              <div>
                <h5><span>Lesson 1.</span>Aliquet lectus urna viverra in odio.</h5>
                <p className={!lessonFirstDesc ? "d-n" : ""}>
                  Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare.
                  Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed.
                  Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.
                </p>
              </div>
            </div>
            <div className="course-program-item d-f">
              <button onClick={handleLessonSecondDesc}>
                <img src={lessonSecondDesc ? "images/minus.png" : "images/plus.png"} alt="plus/minus" />
              </button>
              <div>
                <h5><span>Lesson 2.</span>Orci commodo, viverra orci mollis ut euismod.</h5>
                <p className={!lessonSecondDesc ? "d-n" : ""}>
                  Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare.
                  Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed.
                  Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.
                </p>
              </div>
            </div>
            <div className="course-program-item d-f">
              <button onClick={handleLessonThirdDesc}>
                <img src={lessonThirdDesc ? "images/minus.png" : "images/plus.png"} alt="plus/minus" />
              </button>
              <div>
                <h5><span>Lesson 3.</span>Sagittis vitae facilisi rutrum amet mauris quisque vel.</h5>
                <p className={!lessonThirdDesc ? "d-n" : ""}>
                  Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare.
                  Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed.
                  Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.
                </p>
              </div>
            </div>
            <div className="course-program-item d-f">
              <button onClick={handleLessonFourthDesc}>
                <img src={lessonFourthDesc ? "images/minus.png" : "images/plus.png"} alt="plus/minus" />
              </button>
              <div>
                <h5><span>Lesson 4.</span>In id dolor quis nunc, urna hendrerit pharetra.</h5>
                <p className={!lessonFourthDesc ? "d-n" : ""}>
                  Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare.
                  Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed.
                  Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.
                </p>
              </div>
            </div>
            <div className="course-program-item d-f">
              <button onClick={handleLessonFifthDesc}>
                <img src={lessonFifthDesc ? "images/minus.png" : "images/plus.png"} alt="plus/minus" />
              </button>
              <div>
                <h5><span>Lesson 5.</span>Est, ut tempus id rutrum facilisi.</h5>
                <p className={!lessonFifthDesc ? "d-n" : ""}>
                  Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare.
                  Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed.
                  Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.
                </p>
              </div>
            </div>
            <div className="course-program-item d-f">
              <button onClick={handleLessonSixthDesc}>
                <img src={lessonSixthDesc ? "images/minus.png" : "images/plus.png"} alt="plus/minus" />
              </button>
              <div>
                <h5><span>Lesson 6.</span>Amet nec in pellentesque.</h5>
                <p className={!lessonSixthDesc ? "d-n" : ""}>
                  Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare.
                  Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed.
                  Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.
                </p>
              </div>
            </div>
            <div className="course-program-item d-f">
              <button onClick={handleLessonSeventhDesc}>
                <img src={lessonSeventhDesc ? "images/minus.png" : "images/plus.png"} alt="plus/minus" />
              </button>
              <div>
                <h5><span>Lesson 7.</span>Massa vel arcu mauris, id vel rhoncus mattis quis.</h5>
                <p className={!lessonSeventhDesc ? "d-n" : ""}>
                  Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare.
                  Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed.
                  Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.
                </p>
              </div>
            </div>
            <div className="course-program-item d-f">
              <button onClick={handleLessonEighthDesc}>
                <img src={lessonEighthDesc ? "images/minus.png" : "images/plus.png"} alt="plus/minus" />
              </button>
              <div>
                <h5><span>Lesson 8.</span>Neque, cursus sapien nullam id.</h5>
                <p className={!lessonEighthDesc ? "d-n" : ""}>
                  Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare.
                  Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed.
                  Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div><img src="images/course-program.png" alt="course-program" /></div>
      </div>
      <div className="single-course-submiddle">
        <div className="single-course-testimonials">
          <div className="course-testimonials-undertitle">Testimonial</div>
          <h3 className="course-testimonials-title">What our students say</h3>
          <div className="course-testimonials-box d-f jc-sb">
            <button><img src="images/prev-btn.png" alt="prev-btn" /></button>
            <div className="course-testimonials-content d-f">
              <div><img src="images/braces.png" alt="braces" /></div>
              <div>
                <p className="course-testimonials-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis
                  fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non.
                  Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.
                </p>
                <div className="course-testimonials-author d-f">
                  <div><img src="images/review1.png" alt="review1" /></div>
                  <div>
                    <div className="testimonials-author-name">Eleanor Pena</div>
                    <div className="testimonials-author-position">Student, {coursesArray[courseId].title}</div>
                  </div>
                </div>
              </div>
            </div>
            <button><img src="images/next-btn.png" alt="next-btn" /></button>
          </div>

        </div>
        <div className="single-course-request d-f jc-sb">
          <div><img src="images/course-request.png" alt="course-request" /></div>
          <div>
            <div className="course-request-undertitle">Leave a request now and get 20% off!</div>
            <h3 className="course-request-title">Register for the course</h3>
            <form action="" className='course-request-fm'>
              <div className="input-bl">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" name='fullName' id="fullName" placeholder='Your full name' />
              </div>
              <div className="input-bl">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id="email" placeholder='Your working email' />
              </div>
              <div className="input-bl">
                <label htmlFor="phone">Phone</label>
                <input type="tel" name='phone' id="phone" placeholder='Your phone number' />
              </div>
              <button>Join the course</button>
            </form>
          </div>
        </div>
      </div>
      <div className="single-course-other">
        <div className="course-other-undertitle">Check other courses</div>
        <div className='d-f jc-sb'>
          <h3 className="course-other-title">You may also like</h3>
          <div className="course-other-controls d-f">
            <button><img src="images/prev-btn.png" alt="prev-btn" /></button>
            <button><img src="images/next-btn.png" alt="next-btn" /></button>
          </div>
        </div>
        <div className="course-other-box d-f jc-sb">
          <CourseH
            image='images/featured-author1.png'
            category='Marketing'
            title='The Ultimate Google Ads Training Course'
            price={100}
            author='Jerome Bell'
            catBgColor='#03CEA4'
          />
          <CourseH
            image='images/featured-author2.png'
            category='Management'
            title='Product Management Fundamentals'
            price={480}
            author='Marvin McKinney'
            catBgColor='#5A87FC'
          />
        </div>
        <div className="course-other-action d-f">
          <h5>Do you want more courses?</h5>
          <button>View all courses</button>
        </div>
      </div>
    </div>
  )
}

export default SingleCourse