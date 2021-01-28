import React, { useState, useEffect } from 'react'
import { Col } from 'react-bootstrap'
import $ from 'jquery'
function testMarquee() {
  return (
    <>
      <div style={{ height: '400px', width: '300px', background: 'blue' }}>
        <ul

        //   id="marquee" class="marquee"
        >
          <li>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed a
            nulla. Lorem ipsum dolor sit amet, consectetuer.
          </li>
          <li>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos hymenaeos. Fusce tincidunt adipiscing,massa. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos hymenaeos. Fusce tincidunt adipiscing,massa.
          </li>
          <li>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos hymenaeos. Fusce tincidunt adipiscing,massa.
          </li>
          <li>
            Mauris ullamcorper euismod leo. Nulla congue tellus vitae ante at
            pede eu ligula lacinia. Integer sed sapien, rutrum nec.
          </li>
          <li>
            Aliquam erat volutpat. Fusce dolor. Vestibulum ornare congue turpis
            sollicitudin nunc elit. Nullam erat neque, facilisis quis.
          </li>
          <li>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Nam non eros sed facilisis, bibendum eu.
          </li>
        </ul>
        <Col
          lg={{ span: 10, offset: 1 }}
          md={12}
          xs={12}
          className="homeMarquee"
        >
          <div id="breaking-news-container">
            <div id="breaking-news-colour" class="slideup animated"></div>
            <h6 className="breaking-news-title delay-animated slideinHome">
              &nbsp;&nbsp;News&nbsp;&nbsp;
            </h6>
            <a
              className="breaking-news-headline delay-animated2 fadein marquee"
              href
            >
              {/* <div>{replace % 3 === 0 ? aa : replace % 3 === 1 ? bb : cc}</div> */}
            </a>
          </div>
        </Col>
      </div>
    </>
  )
}

export default testMarquee

// import React from 'react'
// import { Row, Card, Button, Form, Modal } from 'react-bootstrap'

// function testMarquee() {
//   return (
//     <>
//       <ul
//       //   id="marquee" class="marquee"
//       >
//         <li>
//           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed a nulla.
//           Lorem ipsum dolor sit amet, consectetuer.
//         </li>
//         <li>
//           Class aptent taciti sociosqu ad litora torquent per conubia nostra,
//           per inceptos hymenaeos. Fusce tincidunt adipiscing,massa. Class aptent
//           taciti sociosqu ad litora torquent per conubia nostra, per inceptos
//           hymenaeos. Fusce tincidunt adipiscing,massa.
//         </li>
//         <li>
//           Class aptent taciti sociosqu ad litora torquent per conubia nostra,
//           per inceptos hymenaeos. Fusce tincidunt adipiscing,massa.
//         </li>
//         <li>
//           Mauris ullamcorper euismod leo. Nulla congue tellus vitae ante at pede
//           eu ligula lacinia. Integer sed sapien, rutrum nec.
//         </li>
//         <li>
//           Aliquam erat volutpat. Fusce dolor. Vestibulum ornare congue turpis
//           sollicitudin nunc elit. Nullam erat neque, facilisis quis.
//         </li>
//         <li>
//           Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
//           ridiculus mus. Nam non eros sed facilisis, bibendum eu.
//         </li>
//       </ul>
//     </>
//   )
// }
// export default testMarquee
