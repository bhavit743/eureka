
import Track from "./Track"

const Tracks = ({ tracks }) => {
    return (
      <>
        {tracks.map((track, index) => (
          <Track key={index} track={track} />
        ))}
      </>
    )
  }
  
  export default Tracks

