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
