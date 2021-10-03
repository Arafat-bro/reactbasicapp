import React from "react";
import svg from '../images/mobile_guy.svg';
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common name="Grow Your Business With" imgsrc={svg} visit="/service" btname="Get Started" brand={<span className="brand_name">Arafat Bro</span>}/>
        </>
    )
}
export default Home;