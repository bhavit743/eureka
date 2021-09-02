import logo from "./../download.png"
const Incentives = () => {
    return (
        <div >
            <h2 classNameName='Heading'> Common Incentives</h2>
         {/* <div classNameName={'Container'}  >
         </div> */}

                 

{/* <ul className="car" >
  <li>
    <a href="#" className="card">
      <img src="" className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <img src={logo} alt="" className="card__thumb" />
          <div className="card__header-text">
            <h3 className="card__title">kim Cattrall</h3>
            <span className="card__status">3 hour ago</span>
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
</ul> */}
<div class="row row-cols-1 row-cols-md-5 g-4">
  <div class="col" style={{margin : "20px",
    }}>
    <div class="card"  >
      <img src={logo} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
       
      </div>
    </div>
  </div>
  <div class="col"  style={{margin : "20px",
    }}>
    <div class="card">
      <img src={logo} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h5 class="card-desc">Card desc</h5>
      </div>
    </div>
  </div>
  <div class="col"  style={{margin : "20px",
    }}>
    <div class="card">
      <img src={logo} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
       
      </div>
    </div>
  </div>
  </div>




         
            <h2 classNameName='Heading'> Track-wise Incentives</h2>
            <div className={'Container'}  ></div>
            <h2 className='Heading'> Zone-wise Incentives</h2>
            <div className={'Container'}  ></div>
        </div>   
    )
}

export default Incentives
