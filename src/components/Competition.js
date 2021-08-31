
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Competition = () => {
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
        <div>
           
           <h2 className='Heading'> Timeline</h2>
           <div className={'Container1'}  ></div> 
           <h2 className='Heading'>Rules and Competition</h2>
           <div className={'Container1'}  ></div> 
           <h2 className='Heading'> FAQs</h2>
           <div className={'Container1'}  ></div> 
        </div>
        </div>
    )
}

export default Competition
