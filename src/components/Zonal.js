import React from 'react'

const Zonal = ({ zone }) => {
    return (
        <div className="cont">
               <div className={'Container'}  ></div>
            <div className="textbox">
                <h1 class="h1">
                Zone {zone.id}
                 </h1>
                    <p>
                <b> 
              Zone {zone.id} Desriptions.</b>
            
           
                </p>
            </div>
        </div>
    )
}

export default Zonal
