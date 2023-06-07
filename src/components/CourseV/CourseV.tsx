import React from 'react'

import './CourseV.css'
import SingleCourse from '../SingleCourse/SingleCourse'

type CourseVProps = {
    image: string
    category: string
    title: string
    price: number
    author: string
    catBgColor: string
    courseId : number
    showSingleCourse: (courseId: number) => void 
        
}

const CourseV = ({ image, category, title, price, author, catBgColor, courseId, showSingleCourse }: CourseVProps) => {
  

    return (
        <div className="course-v" onClick={()=> showSingleCourse(courseId)}>
            <div><img src={image} alt="course-img" /></div>
            <div className="course-v-cat" style={{ backgroundColor: catBgColor, border: `1px solid ${catBgColor}` }}>{category}</div>
            <div className="course-v-title">{title}</div>
            <div className="course-v-info d-f">
                <div className="course-v-price">${price}</div>
                <div className="course-v-author">by {author}</div>
            </div>
        </div >

    )
}

export default CourseV