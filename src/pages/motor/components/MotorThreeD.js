import React from 'react'
import { Carousel } from '3d-react-carousal'

class MotorThreeD extends React.Component {
  render() {
    let slides = [
      <img
        src="http://localhost:3000/images/motor/Leoncino_250_gray.jpg"
        alt="1"
      />,
      <img src="https://picsum.photos/800/301/?random" alt="2" />,
      <img src="https://picsum.photos/800/302/?random" alt="3" />,
      <img src="https://picsum.photos/800/303/?random" alt="4" />,
      <img src="https://picsum.photos/800/304/?random" alt="5" />,
    ]
    return (
      <div className="App">
        <header className="App-header">
          <h4 className="App-title">熱門車款</h4>
        </header>
        <br />
        <div style={{ height: '400px', width: '100%' }}>
          <Carousel slides={slides} autoplay={true} interval={3000} />
        </div>
        <br />
        <br />
      </div>
    )
  }
}
export default MotorThreeD
