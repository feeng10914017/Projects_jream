import React from 'react'
import ReactDOM from 'react-dom'
import Coverflow from 'react-coverflow'

var fn = function () {
  /* do you want */
}

class MotorThreeDX extends React.Component {
  render() {
    return (
      <div>
        <Coverflow
          height={500}
          displayQuantityOfSide={1}
          navigation={false}
          enableHeading={true}
        >
          <img
            src="http://localhost:3000/images/motor/Imperiake 400 紅.jpg"
            alt="Imperiake 400"
            data-action="http://localhost:3000/motorlist/2"
          />
          <img
            src="http://localhost:3000/images/motor/Leoncino_250_gray.jpg"
            alt="Leoncino_250"
            data-action="http://localhost:3000/motorlist/3"
          />
          <img
            src="http://localhost:3000/images/motor/2019 Tracer 900 GT.jpg"
            alt="Tracer 900 GT"
            data-action="http://localhost:3000/motorlist/4"
          />
        </Coverflow>
      </div>
    )
  }
}

export default MotorThreeDX
