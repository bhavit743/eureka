
import Zonal from "./Zonal"
const Zonals = ({ zones }) => {
    return (
        <div style={{display : "flex", flexWrap : "wrap",}}>

        {zones.map((zone, index) => (
          <Zonal key={index} zone={zone} />
        ))}
      </div>
    )
}

export default Zonals
