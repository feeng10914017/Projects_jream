import React from 'react'
import { Carousel } from '3d-react-carousal'
import '../../styles/motor/motor.scss'
import { Link } from 'react-router-dom'

class MotorThreeD extends React.Component {
  render() {
    let slides = [
      <Link to={'/'} className="p-0">
        <img src="http://localhost:3000/images/motor/BOLT950.jpg" alt="1" />
      </Link>,
      <Link to={'/'} className="p-0">
        <img
          src="http://localhost:3000/images/motor/Leoncino_250_gray.jpg"
          alt="1"
        />
      </Link>,
      <Link to={'/'} className="p-0">
        <img
          src="http://localhost:3000/images/motor/small_Img/13_GSX - S750.jpg"
          alt="1"
        />
      </Link>,
    ]

    return (
      <div className="App">
        <header className="App-header">
          <h4 className="App-title">熱門車款</h4>
        </header>
        <div
          style={{
            height: '500px',
            width: '100%',
            background: '#cacaca',
            paddingTop: '2rem',
          }}
        >
          <Carousel slides={slides} autoplay={true} interval={3000} />
        </div>
      </div>
    )
  }
}
export default MotorThreeD
