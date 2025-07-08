import React, { useState } from 'react'
import { FaHouseUser, FaUser, FaCalendar, FaArrowRight } from 'react-icons/fa6'

// brands images
import Brand1 from './Images/Brand-Images/brand-1.png'
import Brand2 from './Images/Brand-Images/brand-2.png'
import Brand3 from './Images/Brand-Images/brand-3.png'
import Brand4 from './Images/Brand-Images/brand-4.png'
import Brand5 from './Images/Brand-Images/brand-5.png'
import Brand6 from './Images/Brand-Images/brand-6.png'

// cards images
import Post1 from './Images/Blog-Cards-Images/post-01.jpg'
import Post2 from './Images/Blog-Cards-Images/post-02.jpg'
import Post3 from './Images/Blog-Cards-Images/post-03.jpg'
import Post4 from './Images/Blog-Cards-Images/post-04.jpg'
import Post5 from './Images/Blog-Cards-Images/post-05.jpg'
import Post6 from './Images/Blog-Cards-Images/post-06.jpg'
import './Blog.css'

function Blog() {
  
  const BrandsImg = [
    Brand1,
    Brand2,
    Brand3,
    Brand4,
    Brand5,
    Brand6
  ];
  
  const Posts = [
    {
      img: Post1,
      person: 'admin',
      date: '04 Nov 24',
      heading: 'Top 8 Amazing Places to Stay in California',
      para: 'There are many variations of but the majority have simply free text.',
      btn: 'Read More'
    },
    {
      img: Post2,
      person: 'admin',
      date: '04 Nov 24',
      heading: 'The surfing man will adventure your mind',
      para: 'There are many variations of but the majority have simply free text.',
      btn: 'Read More'
    },
    {
      img: Post3,
      person: 'admin',
      date: '04 Nov 24',
      heading: 'Top 5 destinations & adventure travel',
      para: 'There are many variations of but the majority have simply free text.',
      btn: 'Read More'
    },
    {
      img: Post4,
      person: 'admin',
      date: '04 Nov 24',
      heading: 'Travel the most beautiful places in the world',
      para: 'There are many variations of but the majority have simply free text.',
      btn: 'Read More'
    },
    {
      img: Post5,
      person: 'admin',
      date: '04 Nov 24',
      heading: 'Journeys are best measured with friends',
      para: 'There are many variations of but the majority have simply free text.',
      btn: 'Read More'
    },
    {
      img: Post6,
      person: 'admin',
      date: '04 Nov 24',
      heading: 'A place where start new life with adventure travel',
      para: 'There are many variations of but the majority have simply free text.',
      btn: 'Read More'
    }
  ];

  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    if(currentCard + 3 >= Posts.length){
      setCurrentCard(0);
    } else {
      setCurrentCard(currentCard + 1);
    }
  };

  const previewCard = () => {
    if(currentCard === 0){
      setCurrentCard(Posts.length - 3);
    } else {
      setCurrentCard(currentCard - 1);
    }
  };
  
  return (
    <div className='blog-body'>
      <div className='blog-content-view'>
        <div className='blog-headings'>
          <h3>Blog & News</h3>
          <div className='blog-heading-pluse-btn'>
            <h1 className='h1'>Our Latest News Update</h1>
            <button><FaHouseUser /> View All Post</button>
          </div>
        </div>
        <div className='blog-cards-view'>
          {Posts.slice(currentCard, currentCard + 3).map((blogpost, i)=>(
            <div key={i} className='blog-card'>
              <div className='blog-card-top'><img src={blogpost.img} alt={`post${i + 1}`}/></div>
              <div className='blog-card-gap'></div>
              <div className='blog-card-bottom'>
                <div className='blog-card-bottom-sub'><span><FaUser className='bg-color'/>{' '}{blogpost.person}</span><span><FaCalendar className='bg-color'/>{' '}{blogpost.date}</span></div>
                <h1>{blogpost.heading}</h1>
                <p>{blogpost.para}</p>
                <button>{blogpost.btn} <FaArrowRight /></button>
              </div>
            </div>
          ))}
        </div>
        <div className='blog-logos'>
          <div className='logos-slide'>
            {BrandsImg.map((Brandimg, index) => (
              <img key={index} src={Brandimg} alt={`brandings ${index}`} />
            ))}
            {BrandsImg.map((Brandimg, index) => (
              <img key={`clone-${index}`} src={Brandimg} alt={`brandings ${index}`} />
            ))}
          </div>
        </div>
      </div>
        <button className='blog-content-btn-left' onClick={previewCard}>&#11160;</button>
        <button className='blog-content-btn-right' onClick={nextCard}>&#11162;</button>
    </div>
  )
}

export default Blog