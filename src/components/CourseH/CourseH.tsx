import React from 'react'
import './CourseH.css'

type CourseHProps = {
    image: string
    category: string
    title: string
    price: number
    author: string
    catBgColor: string
}

const CourseH =
    ({ image,
        category,
        title,
        price,
        author,
        catBgColor }: CourseHProps) => {
        return (
            <div className="course-h d-f align-center">
                <div style={{height: "214px"}}><img src={image} alt="course-h" /></div>
                <div>
                    <div className="course-h-cat" style={{backgroundColor: catBgColor, border: `1px solid ${catBgColor}`}}>{category}</div>
                    <div className="course-h-title">{title}</div>
                    <div className="course-h-info d-f">
                        <div className="course-h-price">${price}</div>
                        <div className="course-h-author">by {author}</div>
                    </div>
                </div>
            </div>
        )
    }

export default CourseH