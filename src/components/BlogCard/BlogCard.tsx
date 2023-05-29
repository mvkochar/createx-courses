import React from 'react'
import './BlogCard.css'


type BlogCardProps = {
    image: string
    blogType: string
    category: string
    date: string
    time?: number
    title: string
    desc: string
    cardWidth?: string
}


const getTypeBG = (blType: string) => {
    let res = '#FFFFFF url(';

    switch (blType) {
        case "Podcast":
            res = res + '"images/mic.png"'
            break
        case "Video":
            res = res + '"images/play.png"'
            break
        case "Article":
            res = res + '"images/files.png"'
            break
    }

    res = res + ") no-repeat 8px"
    console.log(res)

    return res
}

const getActionType = (blType: string) => {
    let res;

    switch (blType) {
        case "Podcast":
            res = "Listen"
        break
        case "Video":
            res = "Watch"
        break
        case "Article":
            res = "Read"
        break      
    }

    return res
}


    const BlogCard = ({ image, blogType, category, date, time, title, desc, cardWidth = "390px"}: BlogCardProps) => {
        return (
            <div className='blog-card' style={{ width: cardWidth }}>
                <div className="blog-card-main">
                    <div
                        className="blog-card-type"
                        style={{ background: getTypeBG(blogType) }}
                    >
                        {blogType}
                    </div>
                    <div><img src={image} alt="blog-img" /></div>
                </div>
                <div className="blog-card-info d-f">
                    <div className="blog-card-category">{category}</div>
                    <div
                        className="blog-card-date"
                        style={blogType === "Article" ? { borderRight: 0 } : { borderRight: "1px solid #787A80" }}
                    >
                        {date}
                    </div>
                    <div className={blogType === "Article" ? "d-n" : "blog-card-time"}>{time} min</div>
                </div>
                <div className="blog-card-title">{title}</div>
                <p className="blog-card-desc">{desc}</p>
                <div className="blog-card-action d-f">
                    <div className="card-action-title">{getActionType(blogType)}</div>
                    <button><img src="images/arrow-right.png" alt="arrow-right" /></button>
                </div>
            </div>
        )
    }

    export default BlogCard