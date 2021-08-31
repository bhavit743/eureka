import React, {useState} from "react";
import { ReactDOM } from "react";
import ReactRouterDOM from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElem";
import { BsFillClockFill } from "react-icons/bs";


const Header = () => {
    const [open, setOpen]=useState(false);
    const [isActive, setActive]=useState(false);
    const handleToggle=()=>{
        setActive(!isActive)
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
                <NavLink to="/page2" id="page2" activeStyle onClick={() => setActive(!isActive)}>
                    <BsFillClockFill /><h1 className={isActive ? "nava" : "navac"}>page2</h1>
                </NavLink>  
                <NavLink to="/page3" id="page3" activeStyle onClick={() => setActive(!isActive)}>
                    <BsFillClockFill /><h1 className={isActive ? "nava" : "navac"}>page3</h1>
                </NavLink> 
                <NavLink to="/page4" id="page4" activeStyle onClick={() => setActive(!isActive)}>
                    <BsFillClockFill /><h1 className={isActive ? "nava" : "navac"}>page4</h1>
                </NavLink> 
                <NavLink to="/page4" id="Competition" activeStyle onClick={() => setActive(!isActive)}>
                    <BsFillClockFill /><h1 className={isActive ? "nava" : "navac"}>Competition</h1>
                </NavLink> 
                <NavLink to="/page4" id="page4" activeStyle onClick={() => setActive(!isActive)}>
                    <BsFillClockFill /><h1 className={isActive ? "nava" : "navac"}>Tracks</h1>
                </NavLink> 
            </NavMenu>
        </Nav>
    )
    
}
export default Header