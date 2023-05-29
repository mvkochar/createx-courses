import React from 'react'

import './CourseV.css'

type CourseVProps = {
    image: string
    category: string
    title: string
    price: number
    author: string
    catBgColor: string
}

const CourseV = ({ image, category, title, price, author, catBgColor }: CourseVProps) => {
    return (
        <div className="course-v">
            <div><img src={image} alt="course-img" /></div>
            <div className="course-v-cat" style={{backgroundColor: catBgColor, border: `1px solid ${catBgColor}`}}>{category}</div>
            <div className="course-v-title">{title}</div>
            <div className="course-v-info d-f">
                <div className="course-v-price">${price}</div>
                <div className="course-v-author">by {author}</div>
            </div>
        </div>
    )
}

export default CourseV