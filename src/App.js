<<<<<<< HEAD
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


 





=======
import logo from './Cave-min (2).jpg';
import './App.css';
import Header from './components/Header/index';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from './pages';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';

function App() {
  return (
    <Router>
      <Header />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/page1' exact component={Page1} />  
      <Route path='/page2' exact component={Page2} />
      <Route path='/page3' exact component={Page3} />  
      <Route path='/page4' exact component={Page4} />    
    </Switch>
    </Router>
    
  );
}

export default App;
>>>>>>> 3e4e39781f27f5587a17b6b7a41dafe5b669378e
