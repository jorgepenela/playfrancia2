import React, { useRef, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebookF, FaVimeoV, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

//https://www.npmjs.com/package/pure-react-carousel
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import "/node_modules/flag-icons/css/flag-icons.min.css";
import './css/main.scss';
import Pack1 from "./Pack1";
import Pack2 from "./Pack2";
import Pack3 from "./Pack3";
import Pack4 from "./Pack4";
import Pack5 from "./Pack5";
import Pack6 from "./Pack6";
import Pack7 from "./Pack7";


function Home() {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (<>
        <div id="myApp">

            <header id="header" className="flexlg">
                <img src="./assets/mancha.png" alt="Mancha" className="mancha" />
                <div className="lg20">
                    <a href='#home'>
                        <img src="./assets/playpatagonia.png" alt="Play Patagonia" id="logo" />
                    </a>
                </div>
                <nav className="lg80">
                    <ul className="navigation xs">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#experiencia">Experiencia</a></li>
                        <li><a href="#pack">Packs</a></li>
                        <li><a href="#fixture">Fixture</a></li>
                        <li><a href="#footer">Contacto</a></li>
                    </ul>
                    <ul id='contactUl'>
                        <li>
                            <a href="mailto:info@playpatagonia.com" target="_blank" rel='nofollow'>info@playpatagonia.com</a>
                        </li>
                        <li>
                            (+54 11)2150-1900
                        </li>
                    </ul>
                    <ul id="socialUl">
                        <li>
                            <a href="#a" target="_blank"><FaFacebookF /></a>
                        </li>
                        <li>
                            <a href="#a" target="_blank"><FaVimeoV /></a>
                        </li>
                        <li>
                            <a href="#a" target="_blank"><FaTwitter /></a>
                        </li>
                        <li>
                            <a href="#a" target="_blank"><FaLinkedinIn /></a>
                        </li>
                        <li>
                            <a href="#a" target="_blank"><FaInstagram /></a>
                        </li>
                    </ul>
                    <a href="mailto:info@playpatagonia.com" target="_blank" id="cta" className="cta">QUIERO IR AL MUNDIAL</a>
                    <button id="burger">
                        <GiHamburgerMenu />
                    </button>
                </nav>
            </header>

            <div id="burgerMob" className="xs" onClick={handleOpen}>
                <GiHamburgerMenu></GiHamburgerMenu>
            </div>
            <nav id="menu" className={open ? 'open' : 'ardilla'}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#experiencia">Experiencia</a></li>
                    <li><a href="#packs">Packs</a></li>
                    <li><a href="#fixture">Fixture</a></li>
                    <li><a href="#footer">Contacto</a></li>
                </ul>
                <ul className="social">
                    <li>
                        <a href="" target="_blank"><FaFacebookF></FaFacebookF></a>
                    </li>
                    <li>
                        <a href="" target="_blank"><FaVimeoV></FaVimeoV></a>
                    </li>
                    <li>
                        <a href="" target="_blank"><FaTwitter></FaTwitter></a>
                    </li>
                    <li>
                        <a href="" target="_blank"><FaLinkedinIn></FaLinkedinIn></a>
                    </li>
                    <li>
                        <a href="" target="_blank"><FaInstagram></FaInstagram></a>
                    </li>
                </ul>
            </nav>
            <a href="mailto:info@playpatagonia.com" className="cta xs" id="ctaMob" target="_blank">Quiero ir al mundial</a>

            <main>
                <section id="home">
                    <div className="flexlg">
                        <article className="lg50">
                            <h4>VIAJAMOS A NUEVA ZELANDA , VIAJAMOS A INGLATERRA, VIAJAMOS A JAPÓN,</h4>
                            <h1>
                                <span className="span1">AHORA TOCA FRANCIA,</span><br />
                                <span className="span2">ESTA COPA <strong>ES PARA VOS</strong></span>
                            </h1>
                            <div className="box">
                                <span>Viajá a la copa del mundo 2023 con Los Pumas. <a href="#packs" className="cta">VER PAQUETES</a></span>
                            </div>
                        </article>
                        <article className="lg50">
                            <img src="./assets/rugbiers-lg.png" alt="rugbiers" className="rugbiers" />
                        </article>
                    </div>

                </section>
                <section id="experiencia">
                    <img src="./assets/mancha.png" alt="mancha" className="manchaExp" />
                    <div className="box">
                        <div className="flexlg text-center">
                            <article className="xs">
                                <h2>Viví la experiencia
                                    <span style={{ "color": "#fff" }}>Play Patagonia</span>
                                </h2>
                            </article>
                            <article className="lg60">
                                <video width="320" height="240" controls>
                                    <source src="./assets/videoJapon.mp4" type="video/mp4"></source>
                                </video>
                            </article>
                            <article className="lg40">
                                <h2 style={{ "color": "orange" }}>Viví la experiencia  <br />
                                    <span>Play Patagonia</span>
                                </h2>
                                <p>
                                    Viví una experiencia única, entradas preferenciales, hospedaje con Los Pumas, visitas a los entrenamientos y eventos inigualables.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>
                <section id="packs">
                    <h2>Viajá con los Pumas</h2>
                    <div className="packWrapper">

                        <Pack1></Pack1>
                        <Pack2></Pack2>
                        <Pack3></Pack3>
                        <Pack4></Pack4>
                        <Pack5></Pack5>
                        <Pack6></Pack6>
                        <Pack7></Pack7>

                    </div>
                </section>
                <section id="fixture">
                    <img src="./assets/fixture.jpg" alt="Fixture" />
                </section>
                <footer id="footer">
                    <div className="box">
                        <div className="flexlg">
                            <div className="lg60">
                                <p>
                                    Av Dorrego 1789 - Piso 1 - Oficina 101 - Oficina 102 - Palermo (+54 11) 2150-1900 <br />
                                    info@playpatagonia.com <br />
                                    EVyT 13951 - IATA 55505376 Copyright Ⓒ 2023 - Play Patagonia
                                </p>
                            </div>
                            <div className="lg40">
                                <img src="./assets/playpatagonia.png" alt="Play Patagonia" />
                                <img src="./assets/uar.png" alt="UAR" />
                                <img src="./assets/art.png" alt="ART" />
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div> {/* #myApp */}
    </>);
}


export default Home;