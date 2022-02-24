
import { useState } from "react";
import "./about.css";

const About = () => {
    const [name, setName] = useState("");
    const [visible, setVisible] = useState(false);

    const handleShowName = () => {
        setName("Brett Bryant");
        setVisible(true);
    };

    const getMyInfo = () => {
        if (visible) {
            return (
                <div className="about-page">
                    <h1>Brett Bryant</h1>
                    <h6>Dart Supplier/Retired Navy Veteran</h6>
                    <h6>Email: bbryant572@gmail.com</h6>
                </div>
            );
        }   else return "";
    };

    return (
        <div className="about-photo">
            <img src="/images/Me01.jpg" alt="pic of me"></img>
            <div className="about-page">
                {getMyInfo()}
                <button onClick={handleShowName}>Click to see my name</button>
            </div>
        </div>
        
    );
};

export default About;