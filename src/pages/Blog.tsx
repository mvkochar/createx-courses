import React from 'react'
import "./Blog.css"
import BlogCard from '../components/BlogCard/BlogCard'

const Blog = () => {
    const [typeNum, setTypeNum] = React.useState(0)

    const handleTypeNum = (num: number) => {
        setTypeNum(num)
    }

    const [selectedCategory, setSelectedCategory] = React.useState<String>("all");

    // This function is triggered when the select changes
    const selectChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      setSelectedCategory(value);
    };

    return (
        <main>
            <div className="blog-caption">
                <div className="blog-undertitle">Our Blog</div>
                <h2 className="blog-title">Createx School Journal</h2>
            </div>
            <div className="blog-controls d-f jc-sb">
                <div className="blog-controls-tabs d-f">
                    <button
                        className={typeNum === 0 ? 'controls-tabs-btn tabs-btn-active' : 'controls-tabs-btn'}
                        onClick={() => handleTypeNum(0)}
                    >
                        All
                    </button>
                    <button
                        className={typeNum === 1 ? 'controls-tabs-btn tabs-btn-active' : 'controls-tabs-btn'}
                        onClick={() => handleTypeNum(1)}
                    >
                        Articles
                    </button>
                    <button
                        className={typeNum === 2 ? 'controls-tabs-btn tabs-btn-active' : 'controls-tabs-btn'}
                        onClick={() => handleTypeNum(2)}
                    >
                        Videos
                    </button>
                    <button
                        className={typeNum === 3 ? 'controls-tabs-btn tabs-btn-active' : 'controls-tabs-btn'}
                        onClick={() => handleTypeNum(3)}
                    >
                        Podcasts
                    </button>
                </div>
                <form action="" className="blog-controls-fm d-f">
                    <div className="controls-fm-select d-f align-center">
                        <label htmlFor="categorySelect">Blog category</label>
                        <select name="categorySelect" id="categorySelect" onChange={selectChangeCategory}>
                            <option value="all">all themes</option>
                            <option value="marketing">Marketing</option>
                            <option value="management">Management</option>
                            <option value="development">Development</option>
                            <option value="design">Design</option>
                            <option value="hr">HR & Recruiting</option>
                        </select>
                    </div>
                    <div className="controls-fm-search d-f">
                        <input type="text" name='searchQuery' placeholder='Search blog...' />
                        <button><img src="images/search.png" alt="search" /></button>
                    </div>
                </form>
            </div>
            <div className="blog-box d-f jc-sb">
                {(typeNum === 0 || typeNum === 3) && (selectedCategory === 'all' || selectedCategory === "marketing") ?
                    <BlogCard
                        image='images/post1.png'
                        blogType='Podcast'
                        category='Marketing'
                        date='September 4, 2020'
                        time={36}
                        title='What is traffic arbitrage and does it really make money?'
                        desc='Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...'
                    />
                    : <div className="d-n"></div>
                }
                {(typeNum === 0 || typeNum === 1) && (selectedCategory === 'all' || selectedCategory === "development") ?
                    <BlogCard
                        image='images/post4.png'
                        blogType='Article'
                        category='Development'
                        date='September 1, 2020'
                        title='How to choose the first programming language for a beginner'
                        desc='Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui...'
                    />
                    : <div className="d-n"></div>
                }
                {(typeNum === 0 || typeNum === 2) && (selectedCategory === 'all' || selectedCategory === "design") ? 
                    <BlogCard
                        image='images/post5.png'
                        blogType='Video'
                        category='Design'
                        date='August 8, 2020'
                        time={40}
                        title='Should you choose a creative profession if you are attracted to creativity?'
                        desc='Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...'
                    />
                    : <div className="d-n"></div>
                }
                {(typeNum === 0 || typeNum === 1) && (selectedCategory === 'all' || selectedCategory === "hr") ? 
                    <BlogCard
                        image='images/post6.png'
                        blogType='Article'
                        category='HR & Recruiting'
                        date='August 3, 2020'
                        title='HR statistics: job search,  interviews, hiring and recruiting'
                        desc='Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing aenean nisl. 
                        Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor, massa vivamus. 
                        A molestie id semper fermentum pretium...'
                        cardWidth='705px'
                    />
                    : <div className="d-n"></div>
                }
                {(typeNum === 0 || typeNum === 2) && (selectedCategory === 'all' || selectedCategory === "management") ? 
                    <BlogCard
                        image='images/post7.png'
                        blogType='Video'
                        category='Management'
                        date='August 2, 2020'
                        time={45}
                        title='What to do and who to talk to if you want to get feedback on the product'
                        desc='Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus. 
                            Curabitur nisl tincidunt eros venenatis...'
                        cardWidth='495px'
                    />
                    : <div className="d-n"></div>
                }
                {(typeNum === 0 || typeNum === 3) && (selectedCategory === 'all' || selectedCategory === "design") ?
                    <BlogCard
                        image='images/post8.png'
                        blogType='Podcast'
                        category='Design'
                        date='July 28, 2020'
                        time={36}
                        title='What are color profiles and how they work in graphic design'
                        desc='Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...'
                    />
                    : <div className="d-n"></div>
                }
                {(typeNum === 0 || typeNum === 2) && (selectedCategory === 'all' || selectedCategory === "management") ?
                    <BlogCard
                        image='images/post9.png'
                        blogType='Video'
                        category='Management'
                        date='July 15, 2020'
                        time={45}
                        title='Startup: how to build a team that will live longer than a year'
                        desc='Nisi, massa ut sit faucibus et diam. Faucibus at malesuada at justo scelerisque in nisi, urna...'
                    />
                    : <div className="d-n"></div>
                }
                {(typeNum === 0 || typeNum === 1) && (selectedCategory === 'all' || selectedCategory === "marketing") ?
                    <BlogCard
                        image='images/post10.png'
                        blogType='Article'
                        category='Marketing'
                        date='July 9, 2020'
                        title='How to get customers to love your business from the start'
                        desc='Malesuada in augue mi feugiat morbi a aliquet enim. Elementum lacus, pellentesque etiam arcu tristique ac...'
                    />
                    : <div className="d-n"></div>
                }
            </div>
            <div className="blog-pages d-f align-center">
                <div className="blog-pages-item pages-item__active">1</div>
                <div className="blog-pages-item">2</div>
                <div className="blog-pages-item">3</div>
                <div className="blog-pages-item">4</div>
                <div><img src="images/arrow-right2.png" alt="arrow-right2" /></div>
            </div>
            <div className="blog-subscribe d-f jc-sb align-center">
                <div><img src="images/blog-subscribe.png" alt="blog-subscribe" /></div>
                <div>
                    <h3 className="blog-subscribe-title">Want to get the best articles weekly? Subscribe to our newsletter!</h3>
                    <form action="" className="blog-subscribe-fm">
                        <div className="email-bl d-f">
                            <input type="email" name="email" placeholder='Your working email' />
                            <button>Subscribe</button>
                        </div>
                        <div className="check-bl d-f align-center">
                            <input type="checkbox" name="agree" id="agree" />
                            <label htmlFor="agree">I agree to receive communications from Createx Online School</label>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Blog