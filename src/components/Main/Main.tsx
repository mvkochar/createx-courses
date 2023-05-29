import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Courses from '../../pages/Courses'
import Events from '../../pages/Events'
import About from '../../pages/About'
import Blog from '../../pages/Blog'
import Contacts from '../../pages/Contacts'

const Main = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='courses'
        element={<Courses/>}
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