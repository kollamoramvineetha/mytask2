import {Link} from 'react-router-dom'

import './index.css'

const ProductCard = props => {
  const {productData} = props
  const {title, category, imageUrl, description, price, id} = productData

  return (
    <li className="product-item">
      <Link to={`/products/${id}`} className="link-item">
        <img src={imageUrl} alt="product" className="thumbnail" />
        <h1 className="title">{title}</h1>
        <p className="price-des">{description}</p>
        <p className="brand">by {category}</p>
        <div className="product-details">
          <p className="price">Rs {price}/-</p>
        </div>
      </Link>
    </li>
  )
}
export default ProductCard
