import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
      const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
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

      <h1 style={{marginTop: "70px"}}>What is Eureka?</h1>
        <div className="homecont">About Eureka!!</div>

      <h1 style={{marginTop: "70px"}}>Our Vision</h1>
      <div className="homecont">Vision!!</div>

      <div className="stats">
          <ul>
              <li>Stat 1</li>
              <li>Stat 2</li>
              <li>Stat 3</li>
              <li>Stat 4</li>
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