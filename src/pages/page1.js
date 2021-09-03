import React,{useRef, useCallback, useEffect} from 'react';
import {BsArrowUpLeft} from "react-icons/bs"
import {useIntersection} from "react-use";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import gsap from "gsap";
import { TimelineLite } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';
import cloud from '../cloud.png';
import plane from '../plane.png';
import bsky from '../hero.png';
import nsky from '../nightsky.jpg';
import logo from '../logo_dark.png'
import logo2 from '../logo_light.png';
import Page4 from './page4';
import '../home.css';
gsap.registerPlugin(ScrollTrigger)
const Page1 = () => {
  let t1 = new TimelineLite({
    scrollTrigger: {
      start: "top top%",
      end: "center top",
      toggleActions: "play none none reverse"
    }
  });
  const statRef = useRef(null);
  const airRef = useRef(null);
  const slideRef = useRef(null);
  const rightRef = useRef(null);
  useEffect(() => {
    t1.to(airRef.current, {
      duration: 0.4,
      delay: 0.1,
      scale: 3.5,
      y: -600,
      x: '-1800%'
    })
    t1.from(".inter",{
      opacity:0
    })
  }, [airRef])
  // useEffect(() => {
  //   t1.to(rightRef.current, {
  //     x: 700,
  //     duration: 0.5
  //   })
  //   t1.to(rightRef.current,{
  //     x: -500,
  //     duration: 2
  //   })
  // }, [rightRef])

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
        centerMode: true,
        centerPadding:"100px",
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
        <div  className="wrapper">
      <div className="dummy" ref={slideRef} style={{position: "relative", height: "100vh"}}>
      <div className="inter" style={{backgroundColor: "white", position: "absolute", top: 0, width: "100%", height: "100%", zIndex: 4}}>
      <img src={logo2} style={{position:"absolute",top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}></img>

      </div>
        <img src={logo} style={{position:"absolute",top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 3}}></img>
      <div style={{width: "100%", height: "100%", backgroundColor: "#1e2f4c", zIndex: 3}}></div>
      <div className="airplane" ref={airRef}>
      <img src={plane}></img>
      </div>
      </div>
      <div className="content" style={{margin: "0px 50px"}}>
      <Fade bottom>
      <h1 style={{marginTop: "70px", color: "#1E2F4C"}}>What is Eureka?</h1>
        <div className="homecont">
        Instated to foster the spirit of entrepreneurship and business acumen among people all around the world, Eureka! fast-tracks the journey from an innovative idea to a commercial success. Eureka! is Asia's largest business model competition accredited independently by CNN and Thomson Reuters. Eureka! prides itself on providing a 360 degree, holistic experience in the 5 months period that it spans. Right from acknowledging that your idea has a potential, to drafting a B-Model and pitching in front of an esteemed panel of investors, this platform has it all!
        </div>
      </Fade>
      <Fade bottom>
      <h1 style={{marginTop: "70px", color: "#1E2F4C"}}>Our Vision</h1>
      <div className="homecont">
      Innovation and entrepreneurship are the wheels that steer the world into a brighter future. Great ideas result in great undertakings which pave the way for glaring success. To facilitate this vision, Eureka! provides a platform for potential ideas and early-stage startups to evaluate their plan in the risk-free environment of a competition. It aims to bridge the gap between ideas and the realization of an enterprise.
      </div>
      </Fade>
      <div className="stats" ref={statRef}>
          <ul>
              <li>
                <div className="circle"></div>
                <div className="statcount">
                <CountUp end={12000} duration={2} redraw={true} >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
                </CountUp>+
                </div>
    </li>
    <li>
                <div className="circle"></div>
                <div className="statcount">
                <CountUp end={12000} duration={2} redraw={true} >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
                </CountUp>+
                </div>
    </li>
    <li>
                <div className="circle"></div>
                <div className="statcount">
                <CountUp end={12000} duration={2} redraw={true} >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
                </CountUp>+
                </div>
    </li>
    <li>
                <div className="circle"></div>
                <div className="statcount">
                <CountUp end={12000} duration={2} redraw={true} >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
                </CountUp>+
                </div>
    </li>
          </ul>
      </div>
      <Page4 />
      </div>
      </div>
    )
}

export default Page1