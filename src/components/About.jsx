import React from "react";
import Common from "./Common";
import svg2 from '../images/phone_icon_2.svg';

const About = () => {
    return (
        <>
            <Common name="Welcome to about page" imgsrc={svg2} visit="/contact" btname="Contact Now" />

        </>
    )
}
export default About;