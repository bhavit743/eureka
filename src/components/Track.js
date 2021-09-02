
import logo from "./../download.png"



const Track = ({ track }) => {
  const cardsData = [{
    name: "test-1",
    header: "With Only Header",
    open: true
  }]
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




            