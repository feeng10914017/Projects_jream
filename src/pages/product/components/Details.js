import React, { useContext, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from './DataProvider'
// import * as ProductData from './ProductData.json'
import Colors from './Colors'
import Sizes from './Sizes'
import DetailsThumb from './DetailsThumb'
import { Link, withRouter } from 'react-router-dom'

function Details(props) {
  console.log(props)
  const { id } = useParams()
  const value = useContext(DataContext)
  const [products] = value.products
  const addCart = value.addCart
  

  const [index, setIndex] = useState(0)
  const imgDiv = useRef()

  const details = products.filter((product, index) => {
    return product._id === id
  })

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    // console.log(left, top, width, height)
    // console.log(e.pageX, e.pageY)
    // console.log(e.pageX - left, e.pageY - top)
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
  }

  return (
    <>
      {console.log(details)}
      {details.map((product) => (
        <div className="details" key={product._id}>
          <div
            className="img-container"
            onMouseMove={handleMouseMove}
            style={{ backgroundImage: `url(${product.images[index]})` }}
            ref={imgDiv}
            onMouseLeave={() =>
              (imgDiv.current.style.backgroundPosition = `center`)
            }
          />

          <div className="box-details">
            <h4 title={product.title}>{product.title}</h4>
            <h5>${product.price}</h5>
            <Colors colors={product.colors} />
            <Sizes sizes={product.sizes} />
            <p>{product.description}</p>
            <p>{product.content}</p>
            <DetailsThumb images={product.images} setIndex={setIndex} />
            <Link
              to="/cart"
              className="cart"
              onClick={() => addCart(product._id)}
            >
              Add to cart
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default withRouter(Details)
