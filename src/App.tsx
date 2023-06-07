import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

const App = () => {
  const [single, setSingle] = React.useState(false)
  const [course, setCourse] = React.useState(0)
  
  const  showSingleCourse = (courseId: number)=> {
      setCourse(courseId)
      setSingle(true)      
  }

  return (
   <>
    <Header/>
    <Main singleCourse={single}  courseId={course} showSingleCourse={showSingleCourse}/>
    <Footer/>
   </>
  )
}

export default App