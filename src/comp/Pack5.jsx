import { FaRegMoon, FaStar, FaTicketAlt } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";
import { MdSportsRugby } from 'react-icons/md';

//https://www.npmjs.com/package/pure-react-carousel
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';



function Pack5() {
    return (
        <>
            <article id="pack5" className="pack">

                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={4}
                >
                    <Slider>
                        <Slide index={0}>
                            <div className="cardHead">
                                <h3>PACK #5</h3>
                                <div className="flex">
                                    <div>
                                        <FaRegMoon></FaRegMoon> 3 NOCHES
                                    </div>
                                    <div>
                                        +
                                    </div>
                                    <div>
                                        <MdSportsRugby></MdSportsRugby> 1 PARTIDO
                                    </div>
                                </div>
                            </div>
                            <div className="cardBody">
                                <p>
                                    <span className="fi fi-ar"></span> VS. <span className="fi fi-cl"></span>
                                </p>

                                <h4>HOTEL 3<FaStar></FaStar></h4>
                                <h4 className="price">Desde <strong>USD 1.359</strong> Final</h4>
                                <h4>HOTEL 4<FaStar></FaStar></h4>
                                <h4 className="price">Desde <strong>USD 1.619</strong> Final</h4>
                            </div>


                        </Slide>
                        <Slide index={1}>
                            <div className="cardHead hospedaje">
                                <h3 className="title">Hospedaje</h3>
                            </div>
                            <div className="cardBody">
                                <p>
                                    3 noches de alojamiento en Nantes y hotelería con desayuno
                                </p>
                                <h4>HOTEL 3<FaStar></FaStar></h4>
                                <h4 className="price">Desde <strong>USD 1.359</strong> final</h4>

                                <h4>HOTEL 4<FaStar></FaStar></h4>
                                <h4 className="price">Desde <strong>USD 1.619</strong> final</h4>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className="cardHead partidos">
                                <h3 className="title">Partidos</h3>
                            </div>
                            <div className="cardBody">
                                <p>
                                    <strong>30/9 Argentina vs Chile</strong>
                                </p>
                                <p>
                                    <span className="fi fi-ar"></span> VS. <span className="fi fi-cl"></span>
                                </p>
                                <p>
                                    Entradas CAT. 3 <br />
                                    Estadio Nantes
                                </p>


                            </div>
                        </Slide>
                        <Slide index={3}>
                            <div className="cardHead upgrade">
                                <h3><FaTicketAlt></FaTicketAlt><br />UPGRADE <br />ENTRADAS</h3>                                
                            </div>
                            <div className="cardBody">
                                <p>
                                    Entradas Categoría 1 <br />
                                    <span className="price">
                                        USD 119
                                    </span>
                                </p>
                                <p>
                                    Entradas Categoría 2 <br />
                                    <span className="price">
                                        USD 39
                                    </span>
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

export default Pack5;