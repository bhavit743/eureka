import React from 'react'

const Track = ({track}) => {
    return (
        <div>
             <div className={'Container'}  > 
             <h2 className='Heading1'> Track {track.id}</h2> 
             <h2 className='Heading'> Track detail</h2>
              </div>
              
        </div>
    )
}

export default Track
