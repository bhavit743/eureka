import React, {useState} from "react";
import { ReactDOM } from "react";
import ReactRouterDOM from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElem";
import { BsFillClockFill } from "react-icons/bs";
import Tabs from "./NavbarElem";

const Header = () => {
    const [open, setOpen]=useState(false);
    var [isActive, setActive]=useState(false);
    var [isActive2, setActive2]=useState(false);
    var [isActive3, setActive3]=useState(false);
    var [isActive4, setActive4]=useState(false);
    var [isActive5, setActive5]=useState(false);
    var [isActive6, setActive6]=useState(false);
    var [isActive7, setActive7]=useState(false);

    const handleToggle=()=>{
        setActive(isActive=true)  
        setActive2(isActive2=false)       
        setActive3(isActive3=false)  
        setActive4(isActive4=false)  
        setActive5(isActive5=false)  
        setActive6(isActive6=false)  
        setActive7(isActive7=false)  
    }
    const handleToggle2=()=>{
        setActive2(isActive2=true)  
        setActive(isActive=false)       
        setActive3(isActive3=false)  
        setActive4(isActive4=false)  
        setActive5(isActive5=false)  
        setActive6(isActive6=false)  
        setActive7(isActive7=false)
    }
    const handleToggle3=()=>{
        setActive3(isActive3=true)  
        setActive(isActive=false)       
        setActive2(isActive2=false)  
        setActive4(isActive4=false) 
        setActive5(isActive5=false)  
        setActive6(isActive6=false)  
        setActive7(isActive7=false) 
    }
    const handleToggle4=()=>{
        setActive4(isActive4=true)  
        setActive(isActive=false)       
        setActive2(isActive2=false)  
        setActive3(isActive3=false)
        setActive5(isActive5=false)  
        setActive6(isActive6=false)  
        setActive7(isActive7=false) 
    }
    const handleToggle5=()=>{
        setActive5(isActive5=true)  
        setActive(isActive=false)       
        setActive2(isActive2=false)  
        setActive3(isActive3=false)
        setActive4(isActive4=false)  
        setActive6(isActive6=false)  
        setActive7(isActive7=false) 
    }
    const handleToggle6=()=>{
        setActive6(isActive6=true)  
        setActive(isActive=false)       
        setActive2(isActive2=false)  
        setActive3(isActive3=false)
        setActive5(isActive5=false)  
        setActive4(isActive4=false)  
        setActive7(isActive7=false) 
    }
    const handleToggle7=()=>{
        setActive7(isActive7=true)  
        setActive(isActive=false)       
        setActive2(isActive2=false)  
        setActive3(isActive3=false)
        setActive5(isActive5=false)  
        setActive6(isActive6=false)  
        setActive4(isActive4=false) 
    }
    
    return (
        <Nav>
            <NavLink to="/">
                <h1>Eureka</h1>
            </NavLink>
            <Bars open={open} onClick={() => setOpen(!open)} />
            <NavMenu open={open}>
                <NavLink to="/page1" id="page1" activeStyle onClick={handleToggle}>
                    <BsFillClockFill /><h1 className={isActive ? "nava" : "navac"}>page1</h1>
                    
                </NavLink> 
                <NavLink to="/page2" id="page2" activeStyle onClick={handleToggle2}>
                    <BsFillClockFill /><h1 className={isActive2 ? "nava" : "navac"}>page2</h1>
                </NavLink>  
                <NavLink to="/page3" id="page3" activeStyle onClick={handleToggle3}>
                    <BsFillClockFill /><h1 className={isActive3 ? "nava" : "navac"}>page3</h1>
                </NavLink> 
                <NavLink to="/page4" id="page4" activeStyle onClick={handleToggle4}>
                    <BsFillClockFill /><h1 className={isActive4 ? "nava" : "navac"}>page4</h1>
                </NavLink>
                <NavLink to="/page4" id="page4" activeStyle onClick={handleToggle5}>
                    <BsFillClockFill /><h1 className={isActive5 ? "nava" : "navac"}>page5</h1>
                </NavLink>  
                <NavLink to="/page4" id="page4" activeStyle onClick={handleToggle6}>
                    <BsFillClockFill /><h1 className={isActive6 ? "nava" : "navac"}>page6</h1>
                </NavLink> 
                <NavLink to="/page4" id="page4" activeStyle onClick={handleToggle7}>
                    <BsFillClockFill /><h1 className={isActive7 ? "nava" : "navac"}>page7</h1>
                </NavLink> 
            </NavMenu>
            {/* <Tabs>
        <div label="Gator">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Croc">
          After 'while, <em>Crocodile</em>!
        </div>
        <div label="Sarcosuchus">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs> */}
        </Nav>
        
            
    
    )
    
}
export default Header