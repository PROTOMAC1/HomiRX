import React from 'react'
import './ShopPage.css'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import Hiddenpage from '../../Hiddenpage'

export default function ShopPage() {
  return (
    <div>
        <Navbar />
        <Hiddenpage />
        <section className='shoppagemain'>
          <div className='shop-header-row'>
            <div className='shop-results'>Showing all 6 results</div>
            <div className='shop-sort'>
              <select>
                <option>Default sorting</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className='shop-grid'>
            {/* Product Card 1 */}
            <div className='shop-card'>
              <img src='https://i.imgur.com/1.png' alt='Block Ruffle Hem Plaid Print Color' />
              <div className='shop-card-meta'>DESIGN, FILM & VIDEOS</div>
              <div className='shop-card-title'>Block Ruffle Hem Plaid Print Color</div>
              <div className='shop-card-price'>$800.00</div>
            </div>
            {/* Product Card 2 */}
            <div className='shop-card'>
              <img src='https://i.imgur.com/2.png' alt='One Shoulder Cutout High Slit Maxi' />
              <div className='shop-card-meta'>DESIGN, LUXURY</div>
              <div className='shop-card-title'>One Shoulder Cutout High Slit Maxi</div>
              <div className='shop-card-price'>$800.00</div>
            </div>
            {/* Product Card 3 */}
            <div className='shop-card'>
              <img src='https://i.imgur.com/3.png' alt='Solid Color Sleeveless Rushed Body' />
              <div className='shop-card-meta'>LUXURY, TECHNOLOGY</div>
              <div className='shop-card-title'>Solid Color Sleeveless Rushed Body</div>
              <div className='shop-card-price'>$800.00</div>
            </div>
            {/* Product Card 4 */}
            <div className='shop-card'>
              <img src='https://i.imgur.com/4.png' alt='Spaghetti Strap High Open Back Maxi' />
              <div className='shop-card-meta'>LUXURY, TECHNOLOGY</div>
              <div className='shop-card-title'>Spaghetti Strap High Open Back Maxi</div>
              <div className='shop-card-price'>$800.00</div>
            </div>
            {/* Product Card 5 */}
            <div className='shop-card'>
              <img src='https://i.imgur.com/5.png' alt='Thick Strap Square Neck Top Hem' />
              <div className='shop-card-meta'>DESIGN, TECHNOLOGY</div>
              <div className='shop-card-title'>Thick Strap Square Neck Top Hem</div>
              <div className='shop-card-price'>$800.00</div>
            </div>
            {/* Product Card 6 */}
            <div className='shop-card'>
              <img src='https://i.imgur.com/6.png' alt='Tropical Print Front Mini Night Dress' />
              <div className='shop-card-meta'>DESIGN, FILM & VIDEOS</div>
              <div className='shop-card-title'>Tropical Print Front Mini Night Dress</div>
              <div className='shop-card-price'>$800.00</div>
            </div>
          </div>
        </section>
        <section className='shoppagefooter'>
            <Footer />
        </section>
    </div>
  )
}
