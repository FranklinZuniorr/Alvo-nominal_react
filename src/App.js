import logo from './logo.svg';
import './App.css';
import mira from './mira2.png';
import buraco from './buraco.png';
import tiro from './tiro.png';
import fundo from './fundo.jpg';
import parafuso from './parafuso.png';
import estrela from './estrela.png';
import like from './like.png';
import sad from './sad.png';
import cuidado from './cuidado.png';

import SomTiro from './shoot.mp3';
import bip from './bip.mp3';
import erro from './erro.mp3';
import ponto from './ponto.mp3';
import NovoRecord from './record.mp3';
import StatusBalas from './StatusBalas/StatusBalas';

import {useNavigate} from 'react-router-dom';
import React, {useCallback, useEffect} from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

var tempo = 0;
var novoRecord = new Audio(NovoRecord);
var Somtiro = new Audio(SomTiro);
var Bip = new Audio(bip);
var PontoErro = [new Audio(ponto), new Audio(erro)];
var balas = 5;

var time = 0;
var start = 0;
var corVermelho = "radial-gradient(circle at 57px 2px, rgb(255 0 9), rgb(61 2 2))";

var bug;

var add = 0;

if(localStorage.getItem("record") == null){
  var define = 0;
}else{
  define = localStorage.getItem("record");
}

function App() {

  const [conquista, setConquista] = useState({
    color: "#353535",
    padding: "0.7rem",
    borderRadius: "1rem",
    border: "0.2rem solid #ac6d00",
    zIndex: "1",
    position: "absolute",
    height: "2.5rem",
    display: "none",
    alignItems: "center",
    boxShadow: "0px 6px 11px 0px #000000a8",
    background: "linear-gradient(0deg, #FFFFFF 0%, #FFF7A5 0%, #fff 100%)",
    left: "12rem",
    top: "-1rem",
  });
  const [opacity, setopacity] = useState({opacity: "1"});

  //Tela inicial.
  const navigate = useNavigate();
  const home = useCallback(() => navigate('/', {replace: false}), [navigate]);
  //Tela inicial.

  //Pontos.
  const [Pontos, setPontos] = useState(0);
  const [Record, setRecord] = useState(define);
  //Pontos.

  //Tremer fundo.
  const [treme, setTreme] = useState({});
  //Tremer fundo.

  //Reação.
  const [re, setRe] = useState(cuidado);
  const [Sre, setSre] = useState({
    width: "5rem",
    left: "27rem",
    position: "absolute",
    filter: "drop-shadow(0px 3px 3px rgb(0, 0, 0.6 ))",
  });
  
  function chamaConquista(){
    
    novoRecord.load();
    novoRecord.play();

    setConquista({
      color: "#353535",
      padding: "0.7rem",
      borderRadius: "1rem",
      border: "0.2rem solid #ac6d00",
      zIndex: "1",
      position: "absolute",
      height: "2.5rem",
      display: "flex",
      alignItems: "center",
      boxShadow: "0px 6px 11px 0px #000000a8",
      background: "linear-gradient(0deg, #FFFFFF 0%, #FFF7A5 0%, #fff 100%)",
      left: "12rem",
      top: "-1rem",
      animation: "novorecord 1s ease 0s 1 normal forwards",
    });

    setTimeout(() => {
      setConquista({
        color: "#353535",
        padding: "0.7rem",
        borderRadius: "1rem",
        border: "0.2rem solid #ac6d00",
        zIndex: "1",
        position: "absolute",
        height: "2.5rem",
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 6px 11px 0px #000000a8",
        background: "linear-gradient(0deg, #FFFFFF 0%, #FFF7A5 0%, #fff 100%)",
        left: "12rem",
        top: "-1rem",
        animation: "novorecordexit 1s ease 0s 1 normal forwards",
      });
    }, 1000);

    setTimeout(() => {
      setConquista({
        color: "#353535",
        padding: "0.7rem",
        borderRadius: "1rem",
        border: "0.2rem solid #ac6d00",
        zIndex: "1",
        position: "absolute",
        height: "2.5rem",
        display: "none",
        alignItems: "center",
        boxShadow: "0px 6px 11px 0px #000000a8",
        background: "linear-gradient(0deg, #FFFFFF 0%, #FFF7A5 0%, #fff 100%)",
        left: "12rem",
        top: "-1rem",
      });
    }, 2000);
  }

  function mudaRe(x){

    if(x == 1){
      PontoErro[1].load();
      PontoErro[1].play();
      setRe(sad);
      setSre({
        width: "5rem",
        left: "27rem",
        position: "absolute",
        filter: "drop-shadow(0px 3px 3px rgb(0, 0, 0.6 ))",
        animation: "rea 1s ease 0s 1 normal none",
      });

      setTimeout(() => {
        setSre({
          width: "5rem",
          left: "27rem",
          position: "absolute",
          filter: "drop-shadow(0px 3px 3px rgb(0, 0, 0.6 ))",
          animation: "reaAt 1s ease 0s 1 normal none",
        });
        setRe(cuidado);
      }, 1000);
    }

    else if(x == 2){
      PontoErro[0].load();
      PontoErro[0].play();
      setRe(like);
      setSre({
        width: "5rem",
        left: "27rem",
        position: "absolute",
        filter: "drop-shadow(0px 3px 3px rgb(0, 0, 0.6 ))",
        animation: "rea 1s ease 0s 1 normal none",
      });

      setTimeout(() => {
        setSre({
          width: "5rem",
          left: "27rem",
          position: "absolute",
          filter: "drop-shadow(0px 3px 3px rgb(0, 0, 0.6 ))",
          animation: "reaAt 1s ease 0s 1 normal none",
        });
        setRe(cuidado);
      }, 1000);
    }
  };
  //Reação.

  //Filtro start.
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const [BancoDeDados, setBancoDeDados] = useState([
    {item: <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => {certo()}}>a</div>,
    e: "certo"},
    {item: <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => {certo()}}>por</div>,
    e: "certo"},
    {item: <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => {certo()}}>para</div>,
    e: "certo"},
    {item: <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => {certo()}}>com</div>,
    e: "certo"},
    {item: <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => {certo()}}>em</div>,
    e: "certo"},
    {item: <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => {certo()}}>contra</div>,
    e: "certo"},
    {item: <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => {certo()}}>sobre</div>,
    e: "certo"},
    {item: <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => {certo()}}>de</div>,
    e: "certo"},
    {item: <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => {certo()}}>entre</div>,
    e: "certo"},
    {item: <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => {certo()}}>sob</div>,
    e: "certo"},
    {item: <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => {errado()}}>bonito</div>,
    e: "errado"},
    {item: <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => {errado()}}>feio</div>,
    e: "errado"},
    {item: <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => {errado()}}>nós</div>,
    e: "errado"},
    {item: <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => {errado()}}>assim</div>,
    e: "errado"},
    {item: <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => {errado()}}>correr</div>,
    e: "errado"},
    {item: <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => {errado()}}>é</div>,
    e: "errado"},
    {item: <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => {errado()}}>abrir</div>,
    e: "errado"},
    {item: <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => {errado()}}>carro</div>,
    e: "errado"},
    {item: <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => {errado()}}>eles</div>,
    e: "errado"},
    {item: <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => {errado()}}>elas</div>,
    e: "errado"},
    {item: <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => {errado()}}>moto</div>,
    e: "errado"},
    {item: <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => {errado()}}>verde</div>,
    e: "errado"},
    {item: <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => {errado()}}>sol</div>,
    e: "errado"},
  ]);

  const [filtro, setfiltro] = useState([
    BancoDeDados[getRandomInt(22)],
    BancoDeDados[getRandomInt(22)],
    BancoDeDados[getRandomInt(22)],
    BancoDeDados[getRandomInt(22)]
  ]);
  
  verifica();

  const [Filtro, setFiltro] = useState([
    filtro[0].item,
    filtro[1].item,
    filtro[2].item,
    filtro[3].item
  ]);

  //Filtro start.

  //Estado das balas.
  const [Opacity, setOpacity] = useState([1,1,1,1,1]);
  //Estado das balas.

  //Estado do tempo.
  const [Tcor, setTcor] = useState([
    "radial-gradient(circle at 57px 2px, #19ff00, #1d6918)",
    "radial-gradient(circle at 57px 2px, #19ff00, #1d6918)",
    "radial-gradient(circle at 57px 2px, #19ff00, #1d6918)",
    "radial-gradient(circle at 57px 2px, #19ff00, #1d6918)",
    "radial-gradient(circle at 57px 2px, #19ff00, #1d6918)" 
  ]);
  //Estado do tempo.

  //Movimentação da mira.
  const [Smira, setSmira] = useState([{
    position: "absolute",
    bottom: "0.8rem",
    zIndex: "6",
    width: "8rem",
    filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
    animation: "myAnim 3s linear 0s infinite normal forwards",
    writable: "true"
  }]);

  const [Stiro, setTiro] = useState([{
    position: "absolute",
    bottom: "-1.2rem",
    zIndex: "0",
    width: "11rem",
    filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
    opacity: "0",
    writable: "true"
  }]);

  const [Sburaco, setBuraco] = useState([{
    position: "absolute",
    bottom: "3rem",
    zIndex: "5",
    width: "2rem",
    filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
    opacity: "0",
    writable: "true"
  }]);

  const [BlocoAgrupa, setBlocoAgrupa] = useState([{
    position: "absolute",
    bottom: "9.6rem",
    left: "6.17rem",
    display: "flex",
    width: "auto",
    height: "auto",
    borderRadius: "10px",
    fontSize: "1.2rem",
    color: "white",
    textShadow: "0px 3px 2px rgba(0,0,0,0.6)",
    animation: "Newalvos 1s ease 0s 1 normal forwards"
  }]);
  //Movimentação da mira.

  //Contagem de balas.
  useEffect(() => {contagemDeBalas()}, [])
  function contagemDeBalas(){
    if(balas == 5){
      setOpacity([1,1,1,1,1]);
    }

    else if(balas == 4){
      setOpacity([1,1,1,1,0.5]);
    }

    else if(balas == 3){
      setOpacity([1,1,1,0.5,0.5]);
    }

    else if(balas == 2){
      setOpacity([1,1,0.5,0.5,0.5]);
    }

    else if(balas == 1){
      setOpacity([1,0.5,0.5,0.5,0.5]);
    }

    else if(balas == 0){
      setOpacity([0.5,0.5,0.5,0.5,0.5]);
    }
  }
  //Contagem de balas.

  //Fader.
  const [fd, setFd] = useState({
    width: "100%",
    backgroundColor: "black",
    height: "100%",
    zIndex: "7",
    color: "white",
    fontSize: "3rem",
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    scale: "3"
  });
  //Fader.

  //Contagem de tempo.
  function contagemDeTempo(){
    if(time == 0){
      setTcor([
        "radial-gradient(circle at 57px 2px, #19ff00, #1d6918)",
        "radial-gradient(circle at 57px 2px, #19ff00, #1d6918)",
        "radial-gradient(circle at 57px 2px, #19ff00, #1d6918)",
        "radial-gradient(circle at 57px 2px, #19ff00, #1d6918)",
        "radial-gradient(circle at 57px 2px, #19ff00, #1d6918)" 
      ]);
    }

    else if(time == 1){
      Bip.load();
      Bip.play();
      setTcor([
        "radial-gradient(circle at 57px 2px, #19ff00, #1d6918)",
        "radial-gradient(circle at 57px 2px, #19ff00, #1d6918)",
        "radial-gradient(circle at 57px 2px, #19ff00, #1d6918)",
        "radial-gradient(circle at 57px 2px, #19ff00, #1d6918)",
        corVermelho 
      ]);
    }

    else if(time == 2){
      Bip.load();
      Bip.play();
      setTcor([
        "radial-gradient(circle at 57px 2px, #19ff00, #1d6918)",
        "radial-gradient(circle at 57px 2px, #19ff00, #1d6918)",
        "radial-gradient(circle at 57px 2px, #19ff00, #1d6918)",
        corVermelho,
        corVermelho 
      ]);
    }

    else if(time == 3){
      Bip.load();
      Bip.play();
      setTcor([
        "radial-gradient(circle at 57px 2px, #19ff00, #1d6918)",
        "radial-gradient(circle at 57px 2px, #19ff00, #1d6918)",
        corVermelho,
        corVermelho,
        corVermelho 
      ]);
    }

    else if(time == 4){
      Bip.load();
      Bip.play();
      setTcor([
        "radial-gradient(circle at 57px 2px, #19ff00, #1d6918)",
        corVermelho,
        corVermelho,
        corVermelho,
        corVermelho 
      ]);
    }

    else if(time == 5){
      Bip.load();
      Bip.play();
      setTcor([
        corVermelho,
        corVermelho,
        corVermelho,
        corVermelho,
        corVermelho
      ]);

        setTimeout(() => {
          setFd({
            width: "100%",
            backgroundColor: "black",
            height: "100%",
            zIndex: "7",
            color: "red",
            fontSize: "3rem",
            fontFamily: "fantasy",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "fader 5s ease 0s 1 normal forwards",
            scale: "3"
          });
        }, 1000);

        setTimeout(() => {
          setFd({
            width: "100%",
            backgroundColor: "black",
            height: "100%",
            zIndex: "7",
            color: "white",
            fontSize: "3rem",
            display: "flex",
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            scale: "3"
          });
        }, 5100);

        setopacity({opacity: "1"});

        setTimeout(() => {

          setfiltro([
            BancoDeDados[getRandomInt(22)],
            BancoDeDados[getRandomInt(22)],
            BancoDeDados[getRandomInt(22)],
            BancoDeDados[getRandomInt(22)]
          ]);
    
          verifica();
          
          start = 0;
          add = 0;
          setPontos(add);
          time = 0;
          contagemDeTempo();
          contagemDeBalas(); 
          home();
        }, 3500);
    }
  }

  function Ctempo(){

      setTimeout(() => {

        contagemDeTempo();

        time++;

        if(time <= 5){
          Ctempo();
        }
      }, 1000);
      
    }
  
  //Contagem de tempo.

  //Certo e errado.
  function verifica(){
    if(filtro[0].e == "errado" && filtro[1].e == "errado" && filtro[2].e == "errado" && filtro[3].e == "errado"){
      setfiltro([
        BancoDeDados[getRandomInt(22)],
        BancoDeDados[getRandomInt(22)],
        BancoDeDados[getRandomInt(22)],
        BancoDeDados[getRandomInt(22)]
      ]);
    }
  }

  function certo() {
    
    if(balas > 0 && tempo == 0){

    setopacity({opacity: "0.5"});
    mudaRe(2);

    add = add + 1
    setPontos(add)

    setTimeout(() => {
      setfiltro([
        BancoDeDados[getRandomInt(22)],
        BancoDeDados[getRandomInt(22)],
        BancoDeDados[getRandomInt(22)],
        BancoDeDados[getRandomInt(22)]
      ]);

      verifica();
    }, 1000);

    if(add > define){
      define = add;
      localStorage.setItem("record", define);
      setRecord(add);
      chamaConquista();
    }

    if(add > 0 && add < 10){
      time = 0;
    }

    if(add > 10){
      time = 2;
    }
  }
  };

  function errado(){

    if(balas > 0 && tempo == 0){

      start = 1;

      time = 5;
      contagemDeTempo();
      contagemDeBalas(); 
    
      mudaRe(1);
      add = 0;
      setPontos(add)
  };
  };
  //Certo e errado.

  function miraPos(x){

    console.log(filtro[0].e + filtro[1].e + filtro[2].e + filtro[3].e)

    setTimeout(() => {
      setTreme({animation: "tremer 0.2s ease 0s 1 normal forwards"});
    }, 100);

    setTimeout(() => {
      setTreme({});
    }, 1200);
    
    if(start == 0){
    Ctempo();
    start = 1;
    }

  
    
    console.log(balas)
    balas--;
    

    contagemDeBalas(); 
    
    setTimeout(() => {
      setBlocoAgrupa([{
        position: "absolute",
        bottom: "9.6rem",
        left: "6.17rem",
        display: "flex",
        width: "auto",
        height: "auto",
        borderRadius: "10px",
        fontSize: "1.2rem",
        color: "white",
        textShadow: "0px 3px 2px rgba(0,0,0,0.6)"
      }]);
    }, 100);

    setTimeout(() => {
      setBlocoAgrupa([{
        position: "absolute",
        bottom: "9.6rem",
        left: "6.17rem",
        display: "flex",
        width: "auto",
        height: "auto",
        borderRadius: "10px",
        fontSize: "1.2rem",
        color: "white",
        textShadow: "0px 3px 2px rgba(0,0,0,0.6)",
        animation: "Newalvos 1s ease 0s 1 normal forwards"
      }]);
    }, 500);

    if(x == 1 && tempo == 0){
    Somtiro.load()
    Somtiro.play()

    tempo = 1;
    console.log("Click")
    setSmira([{
      position: "absolute",
      bottom: "9rem",
      left: "5.15rem",
      zIndex: "5",
      width: "8rem",
      filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
      animation: "boom 0.3s ease 0s 1 normal forwards",
      writable: "true"
    }]);

    setTimeout(() => {
      setSmira([{
      position: "absolute",
      bottom: "0.8rem",
      zIndex: "5",
      width: "8rem",
      filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
      animation: "inicia 0.2s ease 0s 1 normal forwards",
      writable: "true"
    }]);
    }, 500);

    setTimeout(() => {
      setSmira([{
      position: "absolute",
      bottom: "0.8rem",
      zIndex: "5",
      width: "8rem",
      filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
      animation: "myAnim 3s linear 0s infinite normal forwards",
      writable: "true"
    }]);
    tempo = 0;
    }, 600);

    //Efeitos.
    setTiro([{
      position: "absolute",
      bottom: "7rem",
      left: "4rem",
      zIndex: "0",
      width: "11rem",
      filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
      opacity: "100",
      animation: "tiroIn 0.2s ease 0s 1 normal forwards",
      writable: "true"
    }]);

    setTimeout(() => {
      setTiro([{
        position: "absolute",
        bottom: "7rem",
        left: "4rem",
        zIndex: "0",
        width: "11rem",
        filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
        opacity: "0",
        animation: "tiroOut 0.2s ease 0s 1 normal forwards",
        writable: "true"
      }]);
    }, 200);

    setTimeout(() => {
      setTiro([{
    position: "absolute",
    bottom: "-1.2rem",
    zIndex: "0",
    width: "11rem",
    filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
    opacity: "0",
    writable: "true"
      }]);
    }, 210);

    setBuraco([{
      position: "absolute",
      bottom: "11.4rem",
      left: "8rem",
      zIndex: "4",
      width: "2rem",
      filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
      opacity: "100",
      animation: "buracoIn 1s ease 0s 1 normal forwards",
      writable: "true"
    }]);

    setTimeout(() => {
      setBuraco([{
        position: "absolute",
        bottom: "11.4rem",
        left: "8rem",
        zIndex: "4",
        width: "2rem",
        filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
        opacity: "100",
        animation: "buracoOut 1s ease 0s 1 normal forwards",
        writable: "true"
      }]);
    }, 200);

    setTimeout(() => {
      setBuraco([{
        position: "absolute",
        bottom: "3rem",
        zIndex: "4",
        width: "2rem",
        filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
        opacity: "0",
        writable: "true"
      }]);
    }, 2100);

    //Efeitos.
  }

  else if(x == 2 && tempo == 0){
    Somtiro.load()
    Somtiro.play()

    tempo = 1;
    console.log("Click")
    setSmira([{
      position: "absolute",
      bottom: "9rem",
      left: "11.13rem",
      zIndex: "5",
      width: "8rem",
      filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
      animation: "boom 0.3s ease 0s 1 normal forwards",
      writable: "true"
    }]);

    setTimeout(() => {
      setSmira([{
      position: "absolute",
      bottom: "0.8rem",
      zIndex: "5",
      width: "8rem",
      filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
      animation: "inicia 0.2s ease 0s 1 normal forwards",
      writable: "true"
    }]);
    }, 500);

    setTimeout(() => {
      setSmira([{
      position: "absolute",
      bottom: "0.8rem",
      zIndex: "5",
      width: "8rem",
      filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
      animation: "myAnim 3s linear 0s infinite normal forwards",
      writable: "true"
    }]);
    tempo = 0;
    }, 600);

    //Efeitos.
    setTiro([{
      position: "absolute",
      bottom: "7rem",
      left: "9.6rem",
      zIndex: "0",
      width: "11rem",
      filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
      opacity: "100",
      animation: "tiroIn 0.2s ease 0s 1 normal forwards",
      writable: "true"
    }]);

    setTimeout(() => {
      setTiro([{
        position: "absolute",
        bottom: "7rem",
        left: "9.6rem",
        zIndex: "0",
        width: "11rem",
        filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
        opacity: "0",
        animation: "tiroOut 0.2s ease 0s 1 normal forwards",
        writable: "true"
      }]);
    }, 200);

    setTimeout(() => {
      setTiro([{
    position: "absolute",
    bottom: "-1.2rem",
    zIndex: "0",
    width: "11rem",
    filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
    opacity: "0",
    writable: "true"
      }]);
    }, 210);

    setBuraco([{
      position: "absolute",
      bottom: "11.4rem",
      left: "14rem",
      zIndex: "4",
      width: "2rem",
      filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
      opacity: "100",
      animation: "buracoIn 1s ease 0s 1 normal forwards",
      writable: "true"
    }]);

    setTimeout(() => {
      setBuraco([{
        position: "absolute",
        bottom: "11.4rem",
        left: "14rem",
        zIndex: "4",
        width: "2rem",
        filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
        opacity: "100",
        animation: "buracoOut 1s ease 0s 1 normal forwards",
        writable: "true"
      }]);
    }, 200);

    setTimeout(() => {
      setBuraco([{
        position: "absolute",
        bottom: "3rem",
        zIndex: "4",
        width: "2rem",
        filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
        opacity: "0",
        writable: "true"
      }]);
    }, 2100);

    //Efeitos.
  }

  else if(x == 3 && tempo == 0){
    Somtiro.load()
    Somtiro.play()

    tempo = 1;
    console.log("Click")
    setSmira([{
      position: "absolute",
      bottom: "9rem",
      left: "17.13rem",
      zIndex: "5",
      width: "8rem",
      filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
      animation: "boom 0.3s ease 0s 1 normal forwards",
      writable: "true"
    }]);

    setTimeout(() => {
      setSmira([{
      position: "absolute",
      bottom: "0.8rem",
      zIndex: "5",
      width: "8rem",
      filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
      animation: "inicia2 0.2s ease 0s 1 normal forwards",
      writable: "true"
    }]);
    }, 500);

    setTimeout(() => {
      setSmira([{
      position: "absolute",
      bottom: "0.8rem",
      zIndex: "5",
      width: "8rem",
      filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
      animation: "myAnim 3s linear 0s infinite normal forwards",
      writable: "true"
    }]);
    tempo = 0;
    }, 600);

    //Efeitos.
    setTiro([{
      position: "absolute",
      bottom: "7rem",
      left: "15.6rem",
      zIndex: "0",
      width: "11rem",
      filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
      opacity: "100",
      animation: "tiroIn 0.2s ease 0s 1 normal forwards",
      writable: "true"
    }]);

    setTimeout(() => {
      setTiro([{
        position: "absolute",
        bottom: "7rem",
        left: "15.6rem",
        zIndex: "0",
        width: "11rem",
        filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
        opacity: "0",
        animation: "tiroOut 0.2s ease 0s 1 normal forwards",
        writable: "true"
      }]);
    }, 200);

    setTimeout(() => {
      setTiro([{
    position: "absolute",
    bottom: "-1.2rem",
    zIndex: "0",
    width: "11rem",
    filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
    opacity: "0",
    writable: "true"
      }]);
    }, 210);

    setBuraco([{
      position: "absolute",
      bottom: "11.4rem",
      left: "20rem",
      zIndex: "4",
      width: "2rem",
      filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
      opacity: "100",
      animation: "buracoIn 1s ease 0s 1 normal forwards",
      writable: "true"
    }]);

    setTimeout(() => {
      setBuraco([{
        position: "absolute",
        bottom: "11.4rem",
        left: "20rem",
        zIndex: "4",
        width: "2rem",
        filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
        opacity: "100",
        animation: "buracoOut 1s ease 0s 1 normal forwards",
        writable: "true"
      }]);
    }, 200);

    setTimeout(() => {
      setBuraco([{
        position: "absolute",
        bottom: "3rem",
        zIndex: "4",
        width: "2rem",
        filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
        opacity: "0",
        writable: "true"
      }]);
    }, 2100);

    //Efeitos.
  }

  else if(x == 4 && tempo == 0){
    Somtiro.load()
    Somtiro.play()

    tempo = 1;
    console.log("Click")
    setSmira([{
      position: "absolute",
      bottom: "9rem",
      left: "23.13rem",
      zIndex: "5",
      width: "8rem",
      filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
      animation: "boom 0.3s ease 0s 1 normal forwards",
      writable: "true"
    }]);

    setTimeout(() => {
      setSmira([{
      position: "absolute",
      bottom: "0.8rem",
      zIndex: "5",
      width: "8rem",
      filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
      animation: "inicia2 0.2s ease 0s 1 normal forwards",
      writable: "true"
    }]);
    }, 500);

    setTimeout(() => {
      setSmira([{
      position: "absolute",
      bottom: "0.8rem",
      zIndex: "5",
      width: "8rem",
      filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
      animation: "myAnim 3s linear 0s infinite normal forwards",
      writable: "true"
    }]);
    tempo = 0;
    }, 600);

    //Efeitos.
    setTiro([{
      position: "absolute",
      bottom: "7rem",
      left: "21.6rem",
      zIndex: "0",
      width: "11rem",
      filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
      opacity: "100",
      animation: "tiroIn 0.2s ease 0s 1 normal forwards",
      writable: "true"
    }]);

    setTimeout(() => {
      setTiro([{
        position: "absolute",
        bottom: "7rem",
        left: "21.6rem",
        zIndex: "0",
        width: "11rem",
        filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
        opacity: "0",
        animation: "tiroOut 0.2s ease 0s 1 normal forwards",
        writable: "true"
      }]);
    }, 200);

    setTimeout(() => {
      setTiro([{
    position: "absolute",
    bottom: "-1.2rem",
    zIndex: "0",
    width: "11rem",
    filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
    opacity: "0",
    writable: "true"
      }]);
    }, 210);

    setBuraco([{
      position: "absolute",
      bottom: "11.4rem",
      left: "26rem",
      zIndex: "4",
      width: "2rem",
      filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
      opacity: "100",
      animation: "buracoIn 1s ease 0s 1 normal forwards",
      writable: "true"
    }]);

    setTimeout(() => {
      setBuraco([{
        position: "absolute",
        bottom: "11.4rem",
        left: "26rem",
        zIndex: "4",
        width: "2rem",
        filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
        opacity: "100",
        animation: "buracoOut 1s ease 0s 1 normal forwards",
        writable: "true"
      }]);
    }, 200);

    setTimeout(() => {
      setBuraco([{
        position: "absolute",
        bottom: "3rem",
        zIndex: "4",
        width: "2rem",
        filter: "drop-shadow(2px 2px 2px rgb(0, 0, 0))",
        opacity: "0",
        writable: "true"
      }]);
    }, 2100);

    //Efeitos.
  
  }
  //Movimentação da mira.
  }
  
  function recarga(){
    if(balas < 5){
    balas = 5;
    contagemDeBalas();
    }
  }
  
  return (
    <div className="apresenta">

    <div style={fd}>ERROU!</div>

    <div className="Tabela">
    <div style={conquista}>
    <img src={estrela} style={{position: "absolute", width: "4rem", left: "3.8rem", top: "-2.5rem",
    filter: "drop-shadow(0px 1px 2px rgb(0, 0, 0.6 ))", }}></img>
    Novo record: {Record}
    </div>
    <div className="PontosAtuais">Pontos atuais: {Pontos}</div>
    <div className="PontosRecord">Melhor pontuação: {Record}</div>
    <img src={re} style={Sre}/>

    <img src={parafuso} style={{height: "1rem", position: "absolute", top: "0.5rem", left: "0.5rem", filter: "drop-shadow(rgb(0, 0, 1) 0px 0px 2px)"}}/>
    <img src={parafuso} style={{height: "1rem", position: "absolute", top: "0.5rem", left: "34.5rem", filter: "drop-shadow(rgb(0, 0, 1) 0px 0px 2px)"}}/>
    <img src={parafuso} style={{height: "1rem", position: "absolute", top: "4.5rem", left: "0.5rem", filter: "drop-shadow(rgb(0, 0, 1) 0px 0px 2px)"}}/>
    <img src={parafuso} style={{height: "1rem", position: "absolute", top: "4.5rem", left: "34.5rem", filter: "drop-shadow(rgb(0, 0, 1) 0px 0px 2px)"}}/>
    </div>
    
    <div className="blocoTotal" style={treme}>

    <img src={parafuso} style={{height: "2rem", position: "absolute", top: "1rem", left: "1rem", filter: "drop-shadow(rgb(0, 0, 1) 0px 0px 2px)"}}/>
    <img src={parafuso} style={{height: "2rem", position: "absolute", top: "1rem", left: "33rem", filter: "drop-shadow(rgb(0, 0, 1) 0px 0px 2px)"}}/>
    <img src={parafuso} style={{height: "2rem", position: "absolute", top: "19rem", left: "1rem", filter: "drop-shadow(rgb(0, 0, 1) 0px 0px 2px)"}}/>
    <img src={parafuso} style={{height: "2rem", position: "absolute", top: "19rem", left: "33rem", filter: "drop-shadow(rgb(0, 0, 1) 0px 0px 2px)"}}/>
    
    <div className="info">Acerte as preposições que constituem a regência nominal.</div>

    <div style={BlocoAgrupa[0]}>

    <div className="bloco1" >
    <div className="alvos" onClick={() => {if(balas > 0){miraPos(1);}}}>{filtro[0].item}</div></div>

    <div className="bloco2" >
    <div className="alvos" onClick={() => {if(balas > 0){miraPos(2);}}}>{filtro[1].item}</div></div>

    <div className="bloco3" >
    <div className="alvos" onClick={() => {if(balas > 0){miraPos(3);}}}>{filtro[2].item}</div></div>

    <div className="bloco4" >
    <div className="alvos" onClick={() => {if(balas > 0){miraPos(4);}}}>{filtro[3].item}</div></div>
    </div>
    <img src={mira} style={Smira[0]}/>
    <img src={buraco} style={Sburaco[0]}/>
    <img src={tiro} style={Stiro[0]}/>
    </div>

    <StatusBalas planodefundo = {fundo} Opacity = {Opacity} balas = {balas} eventRecarga={recarga}
    Tcor = {Tcor} start = {start} opacity = {opacity}/>
    </div>
  );
}

export default App;
