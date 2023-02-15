import { FaRegMoon, FaStar } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";
import { MdSportsRugby } from 'react-icons/md';

//https://www.npmjs.com/package/pure-react-carousel
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';



function Pack4() {
    return (
        <>
            <article id="pack4" className="pack">

                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={4}
                >
                    <Slider>
                        <Slide index={0}>
                            <div className="cardHead">
                                <h3>PACK #4</h3>
                                <div className="flex">
                                    <div>
                                        <FaRegMoon></FaRegMoon> 6 NOCHES
                                    </div>
                                    <div>
                                        +
                                    </div>
                                    <div>
                                        <MdSportsRugby></MdSportsRugby> 2 PARTIDOS
                                    </div>
                                </div>
                            </div>
                            <div className="cardBody">
                                <div className="flex">
                                    <div className="lg50">
                                        <p>
                                            <span className="fi fi-ar"></span> VS. <span className="fi fi-ws"></span>
                                        </p>
                                    </div>
                                    <div className="lg50">
                                        <p>
                                            <span className="fi fi-ie"></span> VS. <span className="fi fi-za"></span>
                                        </p>
                                    </div>
                                </div>


                                <h4>HOTEL 3<FaStar></FaStar></h4>
                                <h4 className="price">Desde <strong>USD 2.189</strong> Final</h4>
                                <h4>HOTEL 4<FaStar></FaStar></h4>
                                <h4 className="price">Desde <strong>USD 2.719</strong> Final</h4>
                            </div>


                        </Slide>
                        <Slide index={1}>
                            <div className="cardHead hospedaje">
                                <h3 className="title">Hospedaje</h3>
                            </div>
                            <div className="cardBody">
                                <p>
                                    3 noches de alojamiento en Saint Etienne
                                    y 3 noches de alojamiento en París - Hotelería con desayuno.
                                </p>
                                <h4>HOTEL 3<FaStar></FaStar></h4>
                                <h4 className="price">Desde <strong>USD 2.189</strong> final</h4>

                                <h4>HOTEL 4<FaStar></FaStar></h4>
                                <h4 className="price">Desde <strong>USD 2.719</strong> final</h4>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className="cardHead partidos">
                                <h3 className="title">Partidos</h3>
                            </div>
                            <div className="cardBody">
                                <p>
                                    <strong>22/9 Argentina vs Samoa</strong>
                                </p>
                                <div className="flex">
                                    <div className="xs40">
                                        <span className="fi fi-ar"></span> VS. <span className="fi fi-ws"></span>
                                    </div>
                                    <div className="xs60">
                                        Entradas CAT. 3 <br />
                                        Estadio Saint-Ettiene
                                    </div>
                                </div>
                                <p>
                                    <strong>23/9 21hs. Irlanda vs Sudáfrica</strong>
                                </p>
                                <div className="flex">
                                    <div className="xs40">
                                        <span className="fi fi-ie"></span> VS. <span className="fi fi-za"></span>
                                    </div>
                                    <div className="xs60">
                                        Entradas CAT. 4 <br />
                                        Estadio París
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={3}>
                            <div className="cardHead upgrade">
                                <h3>UPGRADE</h3>
                            </div>
                            <div className="cardBody">
                                <p>
                                    Consultar Upgrade de entras u otros servicio
                                </p>
                            </div>
                        </Slide>
                    </Slider>

                    <ButtonBack> <GrPrevious /></ButtonBack>
                    <DotGroup />
                    <ButtonNext> <GrNext /></ButtonNext>
                    <div className="disclaimer">
                        PRECIO DE REFERENCIA HASTA AGOTAR STOCK Y PUEDE VARIAR AL MOMENTO DE LA COTIZACION. NO INCLUYE IMPUESTOS.
                    </div>
                </CarouselProvider>

            </article>

        </>
    );
}

export default Pack4;