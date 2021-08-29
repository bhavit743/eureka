import Incentives  from "./components/Incentives";
import './App.css'
import { useState } from "react";
import Tracks from "./components/Tracks";
import Zonals from "./components/Zonals";
import Competition from "./components/Competition";

const App = () => {
  const [tracks,settracks] = useState([

    {
      id: 1,
      
    },
    {
      id : 2,
      
    },
    {
      id : 3,
      
    },

  ])
  const [zones,setZones] = useState([

    {
      id: 1,
      
    },
    {
      id : 2,
      
    },
    {
      id : 3,
      
    },

  ])
  return (
    <div>
    {/* <Tracks tracks={tracks} /> */}
    {/* <Zonals zones={zones} /> */}
  <Competition />
    </div>
  )
}

export default App


 





