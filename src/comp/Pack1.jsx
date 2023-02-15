import { FaRegMoon, FaStar, FaShip } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";
import { MdSportsRugby } from 'react-icons/md';

//https://www.npmjs.com/package/pure-react-carousel
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


function Pack1() {
    return (<>

        <article id="pack1" className="pack">
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={5}
            >
                <Slider>
                    <Slide index={0}>
                        <div className="cardHead">
                            <div className="flex">
                                <div className="lg30">
                                    <h3>PACK #1</h3>
                                </div>
                                <div className="lg60 text-right">
                                    <span className="clubmed">EXCLUSIVO CLUB MED</span>
                                </div>
                            </div>
                            <div className="flex">
                                <div >
                                    <FaRegMoon></FaRegMoon> 3 NOCHES
                                </div>
                                <div >
                                    +
                                </div>
                                <div >
                                    <MdSportsRugby></MdSportsRugby> 2 PARTIDOS
                                </div>
                            </div>
                        </div>
                        <div className="cardBody">
                            <div className="flex">
                                <div className="xs50">
                                    <p>
                                    <span className="fi fi-gb-eng"></span> VS. <span className="fi fi-ar"></span>
                                    </p>
                                </div>
                                <div className="xs50">
                                    <p>
                                        <span className="fi fi-za"></span> VS. <span className="fi fi-gb-sct"></span>
                                    </p>
                                </div>
                            </div>
                            <h3 className="hosPumas">
                                Pensión completa<br />Servicio Exclusivo
                            </h3>
                            <h4>Barco Club Med 2 <FaShip></FaShip></h4>
                            <h4 className="price">                                
                                Desde <strong>USD 3.390</strong> Final</h4>
                        </div>


                    </Slide>
                    <Slide index={1}>
                        <div className="cardHead hospedaje">
                            <h3 className="title">
                                Hospedaje
                            </h3>
                            <span className="clubmed clubmed2">EXCLUSIVO CLUB MED</span>
                        </div>
                        <div className="cardBody">
                            <h4>
                                3 noches de alojamiento en Barco Med 2 (puerto de Marsella)
                            </h4>
                            <div className="scrolleable">
                                <p>
                                    • Habitación Club Cabin <br />
                                    • <strong>Pensión completa</strong> (desde la cena del 8/9  hasta el desayuno del 11/09). <br />
                                    • <strong>Bebidas premium ilimitadas</strong> (excepto champagne). <br />
                                    • <strong>Acceso a servicios exclusivos</strong> del Barco Club Med 2. <br />
                                    • Fiesta abordo durante la primer y última noche.
                                </p>
                            </div>
                        </div>
                    </Slide>
                    <Slide index={2}>
                        <div className="cardHead partidos">
                            <h3 className="title">Partidos</h3>
                        </div>
                        <div className="cardBody">
                            <p>
                            <strong>9/9 Argentina vs. Inglaterra</strong>
                            </p>
                            <div className="flex">
                                <div className="xs40">
                                    <span className="fi fi-ar"></span> VS. <span className="fi fi-gb-eng"></span>
                                </div>
                                <div className="xs60">
                                    Entradas CAT. 2 <br />
                                    Estadio Marsella
                                </div>
                            </div>
                            <p>
                            <strong>10/9 Sudáfrica vs. Escocia</strong>
                            </p>
                            <div className="flex">
                                <div className="xs40">
                                    <div className="span fi fi-za"></div> VS. <span className="fi fi-gb-sct"></span>
                                </div>
                                <div className="xs60">
                                    Entradas CAT. 2 <br />
                                    Estadio Marsella
                                </div>
                            </div>
                        </div>

                    </Slide>
                    <Slide index={3}>
                        <div className="cardHead upgrade">
                            <h3>UPGRADE 1</h3>
                            <h4>EXTENSIÓN 3 NTS EN NIZA</h4>
                        </div>
                        <div className="cardBody">
                            <h4 className="price">
                                Desde <strong>USD 889</strong> Final
                            </h4>
                            <div className="scrolleable">
                                <p>
                                    3 noches de alojamiento en Niza <br />
                                    Hotel 4<FaStar></FaStar>  con desayuno <br />
                                    Traslado Aeropuerto | Hotel | Aeropuerto
                                </p>

                            </div>
                        </div>
                    </Slide>
                    <Slide>
                        <div className="cardHead upgrade2">
                            <h3>UPGRADE 2</h3>
                            <h4>EXTENSIÓN 3 NTS EN NIZA + NTS EN MILAN</h4>
                        </div>
                        <div className="cardBody">
                            <h4 className="price">
                                Desde <strong>USD 1.599</strong> Final
                            </h4>
                            <div className="scroleable">
                                3 noches de alojamiento en Niza
                                Hotel 4<FaStar></FaStar> con desayuno <br />
                                3 noches de alojamiento en Milan
                                Hotel 4<FaStar></FaStar> con desayuno <br />
                                Traslado Aeropuerto | Hotel | Aeropuerto
                            </div>
                        </div>
                    </Slide>
                </Slider>

                <ButtonBack> <GrPrevious/></ButtonBack>
                <DotGroup />
                <ButtonNext><GrNext></GrNext></ButtonNext>
                <div className="disclaimer">
                    PRECIO DE REFERENCIA HASTA AGOTAR STOCK Y PUEDE VARIAR AL MOMENTO DE LA COTIZACION. NO INCLUYE IMPUESTOS.
                </div>
            </CarouselProvider>
        </article>
    </>);
}

export default Pack1;