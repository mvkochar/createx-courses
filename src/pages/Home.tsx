import React from 'react'
import './Home.css'
import CourseH from '../components/CourseH/CourseH'

const Home = () => {
  return (
    <main>
      <div className="createx-main">
        <div className="createx-main-box d-f jc-sb align-center">
          <div className='createx-main-info'>
            <div className="main-info-show d-f align-center">
              <div><img src="images/show.png" alt="show" /></div>
              <div className="info-show-title">Play showreel</div>
            </div>
            <h2 className="main-info-title">Enjoy studying with Createx Online Courses</h2>
            <div className="main-info-actions d-f">
              <button className="info-actions-about">About us</button>
              <button className="info-actions-explore">Explore courses</button>
            </div>
          </div>
          <div><img src="images/illustration.png" alt="illustration" /></div>

        </div>
        <div className="createx-main-stats d-f align-center">
          <div className="main-stats-item d-f align-center">
            <div className="stats-item-count">1200</div>
            <div className="stats-item-title">Students graduated</div>
          </div>
          <div><img src="images/ellipse.png" alt="ellipse" /></div>
          <div className="main-stats-item d-f align-center">
            <div className="stats-item-count">84</div>
            <div className="stats-item-title">Completed courses</div>
          </div>
          <div><img src="images/ellipse.png" alt="ellipse" /></div>
          <div className="main-stats-item d-f align-center">
            <div className="stats-item-count">16</div>
            <div className="stats-item-title">Qualified tutors</div>
          </div>
          <div><img src="images/ellipse.png" alt="ellipse" /></div>
          <div className="main-stats-item d-f align-center">
            <div className="stats-item-count">5</div>
            <div className="stats-item-title">Years of experience</div>
          </div>
        </div>
      </div>
      <div className="createx-about d-f jc-sb">
        <div><img src="images/createx-about.png" alt="createx-about" /></div>
        <div>
          <div className="createx-about-undertitle">Who we are</div>
          <div className="createx-about-title">Why Createx?</div>
          <div className="createx-about-box">
            <div className="createx-about-item d-f">
              <div style={{ marginTop: "5px" }}><img src="images/check.png" alt="check" /></div>
              <div className="about-item-title">A fermentum in morbi pretium aliquam adipiscing donec tempus.</div>
            </div>
            <div className="createx-about-item d-f">
              <div style={{ marginTop: "5px" }}><img src="images/check.png" alt="check" /></div>
              <div className="about-item-title">Vulputate placerat amet pulvinar lorem nisl.</div>
            </div>
            <div className="createx-about-item d-f">
              <div style={{ marginTop: "5px" }}><img src="images/check.png" alt="check" /></div>
              <div className="about-item-title">Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</div>
            </div>
            <div className="createx-about-item d-f">
              <div style={{ marginTop: "5px" }}><img src="images/check.png" alt="check" /></div>
              <div className="about-item-title">Etiam duis lobortis in fames ultrices commodo nibh.</div>
            </div>
            <div className="createx-about-item d-f">
              <div style={{ marginTop: "5px" }}><img src="images/check.png" alt="check" /></div>
              <div className="about-item-title">Tincidunt sagittis neque sem ac eget.</div>
            </div>
            <div className="createx-about-item d-f">
              <div style={{ marginTop: "5px" }}><img src="images/check.png" alt="check" /></div>
              <div className="about-item-title">Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</div>
            </div>
          </div>
          <button className='createx-about-btn'>More about us</button>
        </div>
      </div>
      <div className="createx-featured">
        <div className="createx-featured-undertitle">Ready to learn?</div>
        <div className="d-f jc-sb">
          <div className="createx-featured-title">Featured Courses</div>
          <button className='createx-featured-view'>View all courses</button>
        </div>
        <div className="createx-featured-box d-f">
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
          <CourseH
            image='images/featured-author3.png'
            category='HR & Recruiting'
            title='HR Management and Analytics'
            price={200}
            author='Leslie Alexander Li'
            catBgColor='#F89828'
          />
          <CourseH
            image='images/featured-author4.png'
            category='Marketing'
            title='Brand Management & PR Communications'
            price={530}
            author='Kristin Watson'
            catBgColor='#03CEA4'
          />
          <CourseH
            image='images/featured-author5.png'
            category='Management'
            title='Business Development Management'
            price={400}
            author='Dianne Russell'
            catBgColor='#5A87FC'
          />
          <CourseH
            image='images/featured-author6.png'
            category='Design'
            title='Graphic Design Basic'
            price={500}
            author='Guy Hawkins'
            catBgColor='#F52F6E'
          />
        </div>
      </div>
      <div className="createx-benefits">
        <div className="createx-benefits-undertitle">Our benefits</div>
        <div className="createx-benefits-title">That's how we do it</div>
        <div className="createx-benefits-tabs d-f">
          <button className="benefits-tabs-item tabs-item__active">Experienced Tutors</button>
          <button className="benefits-tabs-item">Feedback & Support</button>
          <button className="benefits-tabs-item">24/7 Online Library</button>
          <button className="benefits-tabs-item">Community</button>
        </div>
        <div className="createx-benefits-box d-f jc-sb align-center">
          <div>
            <div className="benefits-info-title">Only practicing tutors</div>
            <p className="benefits-info-desc">
              Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras
              massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam
              diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.
            </p>
          </div>
          <div><img src="images/benefits-illustration.png" alt="benefits-illustration" /></div>
        </div>
      </div>
      <div className="createx-events">
        <div className="createx-events-undertitle">Our events</div>
        <div className="createx-events-title">Lectures & workshops</div>
        <div className="createx-events-box">
          <div className="createx-events-item d-f align-center">
            <div className='events-item-info d-f align center'>
              <div className='events-item-date'>05</div>
              <div>
                <div className='events-item-month'>August</div>
                <div className='events-item-time'>11:00 - 14:00</div>
              </div>
            </div>
            <div>
              <div className="events-item-title">Formation of the organizational structure of the company in the face of uncertainty.</div>
              <div className="events-item-cat">Online master-class</div>
            </div>
            <button className='events-item-btn'>View more</button>
          </div>
          <div className="createx-events-item d-f align-center">
            <div className='events-item-info d-f align center'>
              <div className='events-item-date'>24</div>
              <div>
                <div className='events-item-month'>July</div>
                <div className='events-item-time'>11:00 - 12:30</div>
              </div>
            </div>
            <div>
              <div className="events-item-title">Building a customer service department. Best Practices.</div>
              <div className="events-item-cat">Online lecture</div>
            </div>
            <button className='events-item-btn'>View more</button>
          </div>
          <div className="createx-events-item d-f align-center">
            <div className='events-item-info d-f align center'>
              <div className='events-item-date'>16</div>
              <div>
                <div className='events-item-month'>July</div>
                <div className='events-item-time'>10:00 - 13:00</div>
              </div>
            </div>
            <div>
              <div className="events-item-title">How to apply methods of speculative design in practice. World building prototyping.</div>
              <div className="events-item-cat">Online lecture</div>
            </div>
            <button className='events-item-btn'>View more</button>
          </div>
        </div>
        <div className="createx-events-more d-f">
          <div className="events-more-title">Do you want more?</div>
          <button className='events-more-btn'>Explore all events</button>
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
      <div className="createx-tutors">
        <div className="createx-tutors-undertitle">Best tutors are all here</div>
        <div className="createx-tutors-title">Meet our team</div>
        <div className="createx-tutors-team d-f">
          <div className="tutors-team-member">
            <div className="team-member-img"><img src="images/team/team1.png" alt="team1" /></div>
            <div className="team-member-name">Dianne Russell</div>
            <div className="team-member-position">Founder and CEO</div>
          </div>
          <div className="tutors-team-member">
            <div className="team-member-img"><img src="images/team/team2.png" alt="team2" /></div>
            <div className="team-member-name">Jerome Bell</div>
            <div className="team-member-position">Founder and Program Director</div>
          </div>
          <div className="tutors-team-member">
            <div className="team-member-img"><img src="images/team/team3.png" alt="team3" /></div>
            <div className="team-member-name">Kristin Watson</div>
            <div className="team-member-position">Marketer, Curator of Marketing Course</div>
          </div>
          <div className="tutors-team-member">
            <div className="team-member-img"><img src="images/team/team4.png" alt="team4" /></div>
            <div className="team-member-name">Marvin McKinney</div>
            <div className="team-member-position">PM, Curator of Management Course</div>
          </div>
        </div>
        <div className="createx-tutors-testimonials">
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

export default Home