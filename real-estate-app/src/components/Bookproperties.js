import React, { useState } from 'react'
import './Bookproperties.css'
import { FaHouseUser, FaArrowRight, FaExpand, FaBed, FaShower } from 'react-icons/fa6'
import Book1 from './Images/Book-Images/book-image1.jpg'
import Book2 from './Images/Book-Images/book-image2.jpg'

const Bookproperties = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const BookImages = [
        {
            img: Book1,
            location: 'New.Mexico',
            size: '150m',
            bed: 'bed 3',
            bath: 'bath 3'
        },
        {
            img: Book2,
            location: 'New.Mexico',
            size: '150m',
            bed: 'bed 4',
            bath: 'bath 3'
        }
    ];

    const nextImage = () => {
        setCurrentImage((prev) => 
            prev === BookImages.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImage((prev) => 
            prev === 0 ? BookImages.length - 1 : prev - 1
        );
    };

    return (
        <div className='book-body'>
            <div className='book-content'>
                <div className='book-content-headings-1'>
                    <h1>Bookproperties</h1>
                </div>
                <div className='book-content-headings-2'>
                    <span>Discover Your Perfect Property Match</span>
                    <button><FaHouseUser /> Add Properties</button>
                </div>
                <div className='book-content-view'>
                    <div className='book-content-img-view'>
                        <img 
                            src={BookImages[currentImage].img} 
                            alt={`Property ${currentImage + 1}`}
                        />
                        <div className='book-image-overlay'>
                            <div className='book-image-info'>
                                <div className='bii1'>
                                    <p>Premium</p>
                                    <h1>LUXURY HOME</h1>
                                </div>
                                <div className='bii2'>
                                    <p>Location</p>
                                    <h1>{BookImages[currentImage].location}</h1>
                                </div>
                                <p><FaExpand /> Size: {BookImages[currentImage].size}</p>
                                <p><FaBed /> {BookImages[currentImage].bed}</p>
                                <p><FaShower /> {BookImages[currentImage].bath}</p>
                                <h2>$456.00<span><img /></span></h2>
                                <button>View Details <FaArrowRight /></button>
                            </div>
                        </div>
                        <div className='book-navigation'>
                            <button className='book-nav-btn book-nav-left' onClick={prevImage}>
                                &#11160;
                            </button>
                            <button className='book-nav-btn book-nav-right' onClick={nextImage}>
                                &#11162;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bookproperties