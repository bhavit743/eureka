import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';
import CountUp, {startAnimation} from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Page1 = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      var settings2 = {
        rows:1,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding:"20px",
        responsive:[
        {
          breakpoint: 850,
          settings:{
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 550,
          settings:{
            slidesToShow: 1,
          }
        }
      ]
      };
    const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
      <div>
        <h3>Slide {num}</h3>
      </div>
    ));
    
    return (
        <div style={{margin: "0px 50px" }}>
      <Slider {...settings} className="sliderhero">{renderSlides()}</Slider>
      <Fade bottom>
      <h1 style={{marginTop: "70px"}}>What is Eureka?</h1>
        <div className="homecont">About Eureka!!</div>
      </Fade>
      <Fade bottom>
      <h1 style={{marginTop: "70px"}}>Our Vision</h1>
      <div className="homecont">Vision!!</div>
      </Fade>
      <div className="stats">
          <ul>
              <li>
                <CountUp end={12000} duration={2} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
                </CountUp>+
    </li>
              <li>
              <CountUp end={150} duration={2} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
                </CountUp>+
              </li>
              <li>
              <CountUp end={50} duration={2} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
                </CountUp>
              </li>
              <li>
              <CountUp end={22} duration={2} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
                </CountUp>
              </li>
          </ul>
      </div>
      <Slider {...settings2} className="sliderhero2">
        <div className="testimonial">
          <h3>Testimonial</h3>
        </div>
        <div className="testimonial">
          <h3>Testimonial</h3>
        </div>
        <div className="testimonial">
          <h3>Testimonial</h3>
        </div>
        <div className="testimonial">
          <h3>Testimonial</h3>
        </div>
        <div className="testimonial">
          <h3>Testimonial</h3>
        </div>
        <div className="testimonial">
          <h3>Testimonial</h3>
        </div>
        <div className="testimonial">
          <h3>Testimonial</h3>
        </div>
        <div className="testimonial">
          <h3>Testimonial</h3>
        </div>
      </Slider>

      </div>
    )
}

export default Page1