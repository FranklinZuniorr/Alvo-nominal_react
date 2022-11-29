import { useImperativeHandle, useState } from "react";
import bala from './bala.png';
import reload from './reload.jpg';
import reloadSound from './40E888piCym5.mp3';
import click from './click.mp3';
import parafuso from './parafuso.png';
import casa from './casa.webp';
import './StatusBalas.css';

import {useNavigate} from 'react-router-dom';
import React, {useCallback} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

var reloadsound = new Audio(reloadSound);
var Click = new Audio(click);

function StatusBalas({planodefundo, Opacity, balas, eventRecarga, Tcor, start, opacity}){
    console.log(planodefundo)
    console.log(Opacity)

const navigate = useNavigate();
const home = useCallback(() => navigate('/', {replace: false}), [navigate]);

const [SyStatusBalas, setSystatusBalas] = useState([{
    backgroundColor: "green",
    backgroundImage: "url(" + planodefundo + ")",
    backgroundSize: "40rem",
    width: "100%",
    height: "36%",
    position: "absolute",
    top: "37rem",
    paddingTop: "3rem",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    boxShadow: "rgb(0 0 0 / 66%) 0px -6px 11px 0px",
}]);

const [Sreload, setSreload] = useState([{

}]);

function recarga(){

    eventRecarga();

    if(balas < 5){
    
    reloadsound.load();
    reloadsound.play();
    
    setSreload([{
        animation: "reload 1s ease 0s 1 normal forwards"
    }])

    setTimeout(() => {
        setSreload([{
           
        }])
    }, 1000);
}
}

return(
    <div style={SyStatusBalas[0]} className="StatusBar">
    <img src={bala} className="bala" style={{left: "1rem", opacity: Opacity[0]}}/>
    <img src={bala} className="bala" style={{left: "4rem", opacity: Opacity[1]}}/>
    <img src={bala} className="bala" style={{left: "7rem", opacity: Opacity[2]}}/>
    <img src={bala} className="bala" style={{left: "10rem", opacity: Opacity[3]}}/>
    <img src={bala} className="bala" style={{left: "13rem", opacity: Opacity[4]}}/>
    <img src={reload} className="reload" style={Sreload[0]} onClick={() => {recarga()}}/>

    <img src={parafuso} style={{height: "1.5rem", position: "absolute", top: "1rem", left: "1rem", filter: "drop-shadow(rgb(0, 0, 1) 0px 0px 2px)"}}/>

    <div className="contador">
    <figure className="circle" style={{background: Tcor[0]}}/>
    <figure className="circle" style={{background: Tcor[1]}}/>
    <figure className="circle" style={{background: Tcor[2]}}/>
    <figure className="circle" style={{background: Tcor[3]}}/>
    <figure className="circle" style={{background: Tcor[4]}}/>

    <img className="casa" style={opacity} src={casa} onClick={() => {

        if(start == 0){

            Click.load();
            Click.play();

            setTimeout(() => {
                home();
            }, 250);
        };
        }}/>

    <img src={parafuso} style={{height: "1.5rem", position: "absolute", top: "0.9rem", marginLeft: "14.5rem", filter: "drop-shadow(rgb(0, 0, 1) 0px 0px 2px)"}}/>
    </div>

    </div>
)
}

export default StatusBalas;