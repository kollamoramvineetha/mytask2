/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/alt-text */
import {Carousel} from 'react-responsive-carousel'

import {Link} from 'react-router-dom'
import Header from '../Header'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import './index.css'

const Home = () => (
  <>
    <Header />y
    <div>
      <div className="home-container">
        <div className="home-content">
          <Carousel>
            <div>
              <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png" />
            </div>
            <div>
              <img src="https://t4.ftcdn.net/jpg/02/16/47/35/240_F_216473592_NefHePTpMfvYMNjD3UQTUVJy7DFPwqKA.jpg" />
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0533/2089/files/ecommerce-website-design-fashion-KITH.jpg?6843313061812410569" />
            </div>
          </Carousel>
          <Link to="/products">
            <button type="button" className="shop-now-button">
              Shop Now
            </button>
          </Link>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-desktop-img"
        />
      </div>
    </div>
  </>
)
export default Home
