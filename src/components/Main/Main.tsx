import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Courses from '../../pages/Courses'
import Events from '../../pages/Events'
import About from '../../pages/About'
import Blog from '../../pages/Blog'
import Contacts from '../../pages/Contacts'

type MainProps = {
    singleCourse: boolean
    courseId : number
    showSingleCourse: (courseId: number) => void 
}

const Main = ({singleCourse, courseId, showSingleCourse}: MainProps) => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='courses'
        element={<Courses singleCourse = {singleCourse} courseId={courseId} showSingleCourse={showSingleCourse} />}
      />
      <Route
        path='events'
        element={<Events/>}
      />
      <Route
        path='about'
        element={<About/>}
      />
      <Route
        path='blog'
        element={<Blog/>}
      />
      <Route
        path='contacts'
        element={<Contacts/>}
      />
      <Route
        path='post'
      />
    </Routes>
  )
}

export default Main