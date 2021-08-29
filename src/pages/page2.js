import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import 'bootstrap/dist/css/bootstrap.min.css';

const Page2 = () => {
    return (
        <div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" style={{justifyContent: "center", borderBottom: "none" }}>
                <Tab eventKey="home" title="Sponsors">
                    <h1 style={{textAlign: "center"}}>Title Sponsors</h1>
                    <ul className="team">
                    <li></li>
                    </ul>
                    <h1 style={{textAlign: "center"}}>Associate Title Sponsors</h1>
                    <ul className="team">
                    <li></li>
                    <li></li>
                    <li></li>
                    </ul>
                    <h1 style={{textAlign: "center"}}>Platinum Sponsors</h1>
                    <ul className="team">
                    <li></li>
                    <li></li>
                    <li></li>
                    </ul>
                    <h1 style={{textAlign: "center"}}>Gold Sponsors</h1>
                    <ul className="team">
                    <li></li>
                    <li></li>
                    <li></li>
                    </ul>
                </Tab>
                <Tab eventKey="profile" title="Associates" style={{justifyContent: "center" }}>
                    <ul className="team">
                    <li></li>
                    <li></li>
                    <li></li>
                    </ul>
                </Tab>
                <Tab eventKey="contact" title="Outreach Partners" style={{justifyContent: "center" }}>
                <ul className="team">
                    <li></li>
                    <li></li>
                    <li></li>
                    </ul>
                </Tab>
            </Tabs>
        </div>
    )
}

export default Page2