import { useState } from 'react';
import './home.css';
import react from './react.png';
import App from '../App';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import React, {useCallback} from 'react';
import click from './click.mp3';
import parafuso from './parafuso.png';

var Click = new Audio(click);

function Home(){

const navigate = useNavigate();
const jogar = useCallback(() => navigate('/jogando', {replace: false}), [navigate]);

const [click, setClick] = useState({});

return(
<div className="apresenta">
<div className="bloco">

<img src={parafuso} style={{height: "2rem", position: "absolute", top: "1rem", left: "1rem", filter: "drop-shadow(rgb(0, 0, 1) 0px 0px 2px)"}}/>
<img src={parafuso} style={{height: "2rem", position: "absolute", top: "1rem", left: "38rem", filter: "drop-shadow(rgb(0, 0, 1) 0px 0px 2px)"}}/>
<img src={parafuso} style={{height: "2rem", position: "absolute", top: "24rem", left: "1rem", filter: "drop-shadow(rgb(0, 0, 1) 0px 0px 2px)"}}/>
<img src={parafuso} style={{height: "2rem", position: "absolute", top: "24rem", left: "38rem", filter: "drop-shadow(rgb(0, 0, 1) 0px 0px 2px)"}}/>

<div className="titulo">
Alvo Nominal
</div>

<div className="subT">
Aplicação de aprendizado interativo.
</div>


<div className="jogar" style={click} onClick={() => {setClick({animation: "click 0.2s ease 0s 1 normal none",});

Click.load();
Click.play();

setTimeout(() => {
    setClick({});
    jogar();
}, 200);
;}}>
<div className="subT2">
Jogar
</div>
</div>


<div className="subT3">
Acerte o máximo possível de preposições que constituem a regência nominal. 
</div>

<img src={react} className="react"></img>
</div>
</div>
);
};

export default Home;