import React from "react";
import Sdata from "./Sdata";
import "./index.css";
import Card from "./Card";
import Footer from "./Footer";
const Service = () => {
    return (
        <>
            <h1 className="text-center mt-4 mb-3" style={{color:"red"}}> Our Services</h1>
            <div className="row1">
                {Sdata.map((val,index)=>{
                    return <Card imgsrc = {val.imgsrc} title = {val.title} />
                })}
            </div>
            <Footer />
        </>
    );
}
export default Service;