import React from "react";
import logo from "./../download.png"
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
const Track = ({ track }) => {
  return (
    <div>
      <div className={"Container"}>
        <div className="title-t">
          <h2 className="Heading"> Track {track.id}</h2>
        </div>
        <div className="content-t" >
       
        <div className="image-c-t">
          <img src={logo} alt="Eureka" className="image-t" />
        </div>
        <div className="text-t">
         <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et 
         </p>
         <br />
         <p> Prize Money </p>
         <br />
         <button> Eligibility</button>
        </div>
  
        
       
       
               </div>
               
      </div>
      <br />
    </div>
  );
};

export default Track;



/* <MDBCard style={{ maxWidth: "540px" }}>
            <MDBRow classNameName="g-0">
              <MDBCol md="4">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                  alt="..."
                  fluid
                />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </MDBCardText>
                  <MDBCardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard> */

// <div class="ticket-container">
// 				<div class="ticket__content">
// 					<h4 class="ticket__movie-title">Blade Runner 2049</h4>
// 					<p class="ticket__movie-slogan">
// 						More human than human is our motto.
// 					</p>
// 					<p class="ticket__current-price">$28.00</p>
// 					<p class="ticket__old-price">$44.99</p>
// 					<button class="ticket__buy-btn">Buy now</button>
// 				</div>
// 			</div>