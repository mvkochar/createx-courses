import React from 'react'
import './Events.css'
import SingleEvent from '../components/SingleEvent/SingleEvent'

type Event = {
  category: string
  title: string
  speaker?: string
  speakerPhoto?: string
  speakerPosition?: string
  date?: string
  time?: string
}

const Events = () => {
  const [viewType, setViewType] = React.useState(1)
  const [selectedCategory, setSelectedCategory] = React.useState<String>("all")
  const [selectedSort, setSelectedSort] = React.useState<String>("newest")
  const [singleEvent, setSingleEvent] = React.useState(false)
  const [event, setEvent] = React.useState(0)

  let eventsArr: Event[] = [
    {
      category: 'online lecture',
      title: 'Formation of the organizational structure of the company in the face of uncertainty',
      speaker: 'Kathryn Murphy',
      speakerPhoto: 'images/speaker-image.png',
      speakerPosition: 'Analyst and Marketing specialist in IT company',
      date: 'August 5',
      time: '11:00 - 14:00'
    },

    {
      category: 'online lecture',
      title: 'Building a customer service department. Best Practices.',
      speaker: 'Kathryn Murphy',
      speakerPhoto: 'images/speaker-image.png',
      speakerPosition: 'Analyst and Marketing specialist in IT company',
      date: 'July 24',
      time: '11:00 - 12:30'
    },

    {
      category: 'online workshop',
      title: 'How to apply methods of speculative design in practice. World building prototyping.',
      speaker: 'Kathryn Murphy',
      speakerPhoto: 'images/speaker-image.png',
      speakerPosition: 'Analyst and Marketing specialist in IT company',
      date: 'July 16',
      time: '10:00 - 13:00'
    },

    {
      category: 'online workshop',
      title: 'Find and evaluate: search and assessment tools for candidates.',
      speaker: 'Kathryn Murphy',
      speakerPhoto: 'images/speaker-image.png',
      speakerPosition: 'Analyst and Marketing specialist in IT company',
      date: 'July 10',
      time: '9:00 - 14:00'
    },

    {
      category: 'online master-class',
      title: 'Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI',
      speaker: 'Kathryn Murphy',
      speakerPhoto: 'images/speaker-image.png',
      speakerPosition: 'Analyst and Marketing specialist in IT company',
      date: 'June 27',
      time: '15:00 - 19:00'
    },

    {
      category: 'online lecture',
      title: 'Marketing or growth hacking: main differences and what business needs.',
      speaker: 'Kathryn Murphy',
      speakerPhoto: 'images/speaker-image.png',
      speakerPosition: 'Analyst and Marketing specialist in IT company',
      date: 'June 15',
      time: '11:00 - 12:00'
    },

    {
      category: 'online lecture',
      title: 'How to brief a client and present your design to approve it from the first show.',
      speaker: 'Kathryn Murphy',
      speakerPhoto: 'images/speaker-image.png',
      speakerPosition: 'Analyst and Marketing specialist in IT company',
      date: 'June 2',
      time: '11:00 - 13:00'
    },

    {
      category: 'online lecture',
      title: 'Who is a project manager and do I want to be PM?',
      speaker: 'Kathryn Murphy',
      speakerPhoto: 'images/speaker-image.png',
      speakerPosition: 'Analyst and Marketing specialist in IT company',
      date: 'May 29',
      time: '11:00 - 12:00'
    },

    {
      category: 'online lecture',
      title: "The company's business page as an additional tool to support the announcement of vacancies.",
      speaker: 'Kathryn Murphy',
      speakerPhoto: 'images/speaker-image.png',
      speakerPosition: 'Analyst and Marketing specialist in IT company',
      date: 'May 18',
      time: '10:00 - 12:00'
    }

  ]

  const handleViewType = (type: number) => {
    setViewType(type)
    console.log(viewType)
  }

  // This function is triggered when the select changes
  const selectChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedCategory(value);
  };

  // This function is triggered when the select changes
  const selectChangeSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedSort(value);
  };

  const showSingleEvent = (eventId: number) => {
    setEvent(eventId)
    setSingleEvent(true)
  }

  return (
    <main>
      <div className={singleEvent ? "d-n" : "events-wr"}>
        <div className="events-main">
          <div className="events-main-undertitle">Our events</div>
          <h3 className="events-main-title">Lectures, workshops & master-classes</h3>
          <form className="events-main-controls d-f align-center">
            <div className='main-controls-category d-f align-center'>
              <label htmlFor="categorySelect">Event category</label>
              <select name="categorySelect" id="categorySelect" onChange={selectChangeCategory}>
                <option value="all">all themes</option>
                <option value="masterClass">Online master-class</option>
                <option value="lecture">Online lecture</option>
                <option value="workshop">Online workshop</option>
              </select>
            </div>
            <div className="main-controls-sort d-f align-center">
              <label htmlFor="categorySort">Sort by</label>
              <select name="categorySort" id="categorySort" onChange={selectChangeSort}>
                <option value="newest">newest</option>
                <option value="oldest">oldest</option>
              </select>
            </div>
            <div className="main-controls-show d-f align-center">
              <label htmlFor="eventsCount">Show</label>
              <input type="number" name="eventsCount" id="eventsCount" min={1} max={10} placeholder='9' />
              <p>events per page</p>
            </div>
            <div className="main-controls-search d-f">
              <input type="text" placeholder='Search event' />
              <button><img src="images/search.png" alt="search" /></button>
            </div>
            <div className="main-controls-view d-f">
              <button
                onClick={(event) => {
                  event.preventDefault()
                  handleViewType(1)
                }}
              >
                <img src={viewType === 1 ? "images/list-active.png" : "images/list.png"} alt="list" />
              </button>
              <button
                onClick={(event) => {
                  event.preventDefault()
                  handleViewType(2)
                }}
              >
                <img src={viewType === 2 ? "images/grid-active.png" : "images/grid.png"} alt="grid" />
              </button>
            </div>
          </form>
          <div
            className={viewType === 1 ? "events-main-box d-f" : "d-n"}
            style={selectedSort === "newest" ? { flexDirection: "column" } : { flexDirection: "column-reverse" }}
          >
            <div className={selectedCategory === "all" || selectedCategory === "masterClass" ? "events-main-item d-f" : "d-n"} >
              <div className='main-item-caption d-f'>
                <div className='main-item-date'>05</div>
                <div>
                  <div className="main-item-month">August</div>
                  <div className="main-item-time">11:00 - 14:00</div>
                </div>
              </div>
              <div>
                <div className='main-item-title'>Formation of the organizational structure of the company in the face of uncertainty.</div>
                <div className='main-item-cat'>Online master-class</div>
              </div>
              <button className='main-item-more' onClick={() => showSingleEvent(0)}>View more</button>
            </div>
            <div className={selectedCategory === "all" || selectedCategory === "lecture" ? "events-main-item d-f" : "d-n"}>
              <div className='main-item-caption d-f'>
                <div className='main-item-date'>24</div>
                <div>
                  <div className="main-item-month">July</div>
                  <div className="main-item-time">11:00 - 12:30</div>
                </div>
              </div>
              <div>
                <div className='main-item-title'>Building a customer service department. Best Practices.</div>
                <div className='main-item-cat'>Online lecture</div>
              </div>
              <button className='main-item-more' onClick={() => showSingleEvent(1)}>View more</button>
            </div>
            <div className={selectedCategory === "all" || selectedCategory === "workshop" ? "events-main-item d-f" : "d-n"}>
              <div className='main-item-caption d-f'>
                <div className='main-item-date'>16</div>
                <div>
                  <div className="main-item-month">July</div>
                  <div className="main-item-time">10:00 - 13:00</div>
                </div>
              </div>
              <div>
                <div className='main-item-title'>How to apply methods of speculative design in practice. World building prototyping.</div>
                <div className='main-item-cat'>Online workshop</div>
              </div>
              <button className='main-item-more' onClick={() => showSingleEvent(2)}>View more</button>
            </div>
            <div className={selectedCategory === "all" || selectedCategory === "workshop" ? "events-main-item d-f" : "d-n"}>
              <div className='main-item-caption d-f'>
                <div className='main-item-date'>10</div>
                <div>
                  <div className="main-item-month">July</div>
                  <div className="main-item-time">9:00 - 14:00</div>
                </div>
              </div>
              <div>
                <div className='main-item-title'>Find and evaluate: search and assessment tools for candidates.</div>
                <div className='main-item-cat'>Online workshop</div>
              </div>
              <button className='main-item-more' onClick={() => showSingleEvent(3)}>View more</button>
            </div>
            <div className={selectedCategory === "all" || selectedCategory === "masterClass" ? "events-main-item d-f" : "d-n"}>
              <div className='main-item-caption d-f'>
                <div className='main-item-date'>27</div>
                <div>
                  <div className="main-item-month">June</div>
                  <div className="main-item-time">15:00 - 19:00</div>
                </div>
              </div>
              <div>
                <div className='main-item-title'>Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI.</div>
                <div className='main-item-cat'>Online master-class</div>
              </div>
              <button className='main-item-more' onClick={() => showSingleEvent(4)}>View more</button>
            </div>
            <div className={selectedCategory === "all" || selectedCategory === "lecture" ? "events-main-item d-f" : "d-n"}>
              <div className='main-item-caption d-f'>
                <div className='main-item-date'>15</div>
                <div>
                  <div className="main-item-month">June</div>
                  <div className="main-item-time">10:00 - 12:00</div>
                </div>
              </div>
              <div>
                <div className='main-item-title'>Marketing or growth hacking: main differences and what business needs.</div>
                <div className='main-item-cat'>Online lecture</div>
              </div>
              <button className='main-item-more' onClick={() => showSingleEvent(5)}>View more</button>
            </div>
            <div className={selectedCategory === "all" || selectedCategory === "lecture" ? "events-main-item d-f" : "d-n"}>
              <div className='main-item-caption d-f'>
                <div className='main-item-date'>02</div>
                <div>
                  <div className="main-item-month">June</div>
                  <div className="main-item-time">11:00 - 13:00</div>
                </div>
              </div>
              <div>
                <div className='main-item-title'>How to brief a client and present your design to approve it from the first show.</div>
                <div className='main-item-cat'>Online lecture</div>
              </div>
              <button className='main-item-more' onClick={() => showSingleEvent(6)}>View more</button>
            </div>
            <div className={selectedCategory === "all" || selectedCategory === "lecture" ? "events-main-item d-f" : "d-n"}>
              <div className='main-item-caption d-f'>
                <div className='main-item-date'>29</div>
                <div>
                  <div className="main-item-month">May</div>
                  <div className="main-item-time">11:00 - 12:00</div>
                </div>
              </div>
              <div>
                <div className='main-item-title'>Who is a project manager and do I want to be PM?</div>
                <div className='main-item-cat'>Online lecture</div>
              </div>
              <button className='main-item-more' onClick={() => showSingleEvent(7)}>View more</button>
            </div>
            <div className={selectedCategory === "all" || selectedCategory === "lecture" ? "events-main-item d-f" : "d-n"}>
              <div className='main-item-caption d-f'>
                <div className='main-item-date'>18</div>
                <div>
                  <div className="main-item-month">May</div>
                  <div className="main-item-time">10:00 - 12:00</div>
                </div>
              </div>
              <div>
                <div className='main-item-title'>
                  The company's business page as an additional tool to support the announcement of vacancies.
                </div>
                <div className='main-item-cat'>Online lecture</div>
              </div>
              <button className='main-item-more' onClick={() => showSingleEvent(8)}>View more</button>
            </div>
          </div>
          <div
            className={viewType === 2 ? "events-main-box d-f" : "d-n"}
            style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <div
              className={selectedCategory === "all" || selectedCategory === "masterClass" ? "events-main-card" : "d-n"}
              style={selectedSort === "oldest" ? { order: 9 } : { order: 1 }}
            >
              <div className="main-card-date">05 Aug</div>
              <div className="main-card-time">11:00 - 14:00</div>
              <div className="main-card-title">Formation of the organizational structure of the company in the face of uncertainty.</div>
              <div className="main-card-cat">Online master-class</div>
              <button className="main-card-more" onClick={() => showSingleEvent(0)}>View more</button>
            </div>
            <div
              className={selectedCategory === "all" || selectedCategory === "lecture" ? "events-main-card" : "d-n"}
              style={selectedSort === "oldest" ? { order: 8 } : { order: 2 }}
            >
              <div className="main-card-date">24 Jul</div>
              <div className="main-card-time">11:00 - 12:30</div>
              <div className="main-card-title">Building a customer service department. Best Practices.</div>
              <div className="main-card-cat">Online lecture</div>
              <button className="main-card-more" onClick={() => showSingleEvent(1)}>View more</button>
            </div>
            <div
              className={selectedCategory === "all" || selectedCategory === "workshop" ? "events-main-card" : "d-n"}
              style={selectedSort === "oldest" ? { order: 7 } : { order: 3 }}
            >
              <div className="main-card-date">16 Jul</div>
              <div className="main-card-time">10:00 - 13:00</div>
              <div className="main-card-title">How to apply methods of speculative design in practice. World building prototyping.</div>
              <div className="main-card-cat">Online workshop</div>
              <button className="main-card-more" onClick={() => showSingleEvent(2)}>View more</button>
            </div>
            <div
              className={selectedCategory === "all" || selectedCategory === "workshop" ? "events-main-card" : "d-n"}
              style={selectedSort === "oldest" ? { order: 6 } : { order: 4 }}
            >
              <div className="main-card-date">10 Jul</div>
              <div className="main-card-time">9:00 - 14:00</div>
              <div className="main-card-title">Find and evaluate: search and assessment tools for candidates.</div>
              <div className="main-card-cat">Online workshop</div>
              <button className="main-card-more" onClick={() => showSingleEvent(3)}>View more</button>
            </div>
            <div
              className={selectedCategory === "all" || selectedCategory === "masterClass" ? "events-main-card" : "d-n"}
              style={selectedSort === "oldest" ? { order: 5 } : { order: 5 }}
            >
              <div className="main-card-date">27 Jun</div>
              <div className="main-card-time">15:00 - 19:00</div>
              <div className="main-card-title">Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI.</div>
              <div className="main-card-cat">Online master-class</div>
              <button className="main-card-more" onClick={() => showSingleEvent(4)}>View more</button>
            </div>
            <div
              className={selectedCategory === "all" || selectedCategory === "lecture" ? "events-main-card" : "d-n"}
              style={selectedSort === "oldest" ? { order: 4 } : { order: 6 }}
            >
              <div className="main-card-date">15 Jun</div>
              <div className="main-card-time">11:00 - 12:00</div>
              <div className="main-card-title">Marketing or growth hacking: main differences and what business needs.</div>
              <div className="main-card-cat">Online lecture</div>
              <button className="main-card-more" onClick={() => showSingleEvent(5)}>View more</button>
            </div>
            <div
              className={selectedCategory === "all" || selectedCategory === "lecture" ? "events-main-card" : "d-n"}
              style={selectedSort === "oldest" ? { order: 3 } : { order: 7 }}
            >
              <div className="main-card-date">02 Jun</div>
              <div className="main-card-time">11:00 - 13:00</div>
              <div className="main-crd-tile">How to brief a client and present your design to approve it from the first show.</div>
              <div className="main-card-cat">Online lecture</div>
              <button className="main-card-more" onClick={() => showSingleEvent(6)}>View more</button>
            </div>
            <div
              className={selectedCategory === "all" || selectedCategory === "lecture" ? "events-main-card" : "d-n"}
              style={selectedSort === "oldest" ? { order: 2 } : { order: 8 }}
            >
              <div className="main-card-date">29 May</div>
              <div className="main-card-time">11:00 - 12:00</div>
              <div className="main-card-title">Who is a project manager and do I want to be PM?</div>
              <div className="main-card-cat">Online lecture</div>
              <button className="main-card-more" onClick={() => showSingleEvent(7)}>View more</button>
            </div>
            <div
              className={selectedCategory === "all" || selectedCategory === "lecture" ? "events-main-card" : "d-n"}
              style={selectedSort === "oldest" ? { order: 1 } : { order: 9 }}
            >
              <div className="main-card-date">18 May</div>
              <div className="main-card-time">10:00 - 12:00</div>
              <div className="main-card-title">The company's business page as an additional tool to support the announcement of vacancies.</div>
              <div className="main-card-cat">Online lecture</div>
              <button className="main-card-more" onClick={() => showSingleEvent(8)}>View more</button>
            </div>
          </div>
          <div className="events-main-pages d-f">
            <div className="main-pages-item pages-item__active">1</div>
            <div className="main-pages-item">2</div>
            <div className="main-pages-item">3</div>
            <div className="main-pages-item">4</div>
            <button><img src="images/next-btn.png" alt="next" /></button>
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
      </div>
      <div className={singleEvent ? "single-event-wr" : "d-n"}>
        <SingleEvent
          category={eventsArr[event].category}
          title={eventsArr[event].title}
          speaker={eventsArr[event].speaker}
          speakerPhoto={eventsArr[event].speakerPhoto}
          speakerPosition={eventsArr[event].speakerPosition}
          date={eventsArr[event].date}
          time={eventsArr[event].time}
        />
      </div>
    </main>
  )
}

export default Events