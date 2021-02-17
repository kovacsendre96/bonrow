
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import { faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { CardsContainer, Card, CardLeft, CardRight, MainContainer } from '../styles/bioStyles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import peti from '../images/peti.jpg';
import balazs from '../images/balazs.jpg';
import bogdan from '../images/bogdan.jpg';
import feco from '../images/feco.jpg';

const BioCards = () => {


    var settings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (


        <MainContainer>
            <h2>Tagok</h2>
            <Slider className='slider'{...settings}>
                <CardsContainer>
                    <Card >
                        <CardLeft style={{ background: `url(${peti})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
                            <h4>Peti</h4>

                        </CardLeft>

                        <CardRight>
                            <div className='quotes-wrapper-up'> <FontAwesomeIcon className='quotes' icon={faQuoteRight} /></div>

                            <div className='text-container'>
                                <p>'96-ban láttam meg a napvilágot egy szép májusi reggelen, amikor az angyalok dalolták a Sultans of swinget. A 80-as és 90-es évek rock zenéi voltak azok
                                a számok amik meghatározták az ízlésemet.Komolyabban, zenekari szinten 2017-ben kezdtem el gitározni. Instrumentális tudásomra annyit mondanék,
                                hogy 3,6 (Nem jó, de nem is tragikus)
                        </p>
                                <div>

                                    <a target="blanc" class="socialA" href="https://www.facebook.com/peter.koncz.54"><FontAwesomeIcon className='icon' size="2x" icon={faFacebook} /></a>
                                    <a target="blanc" class="socialA" href="https://www.instagram.com/peterkoncz96/?hl=hu"><FontAwesomeIcon className='icon' size="2x" icon={faInstagram} /></a>

                                </div>
                            </div>
                            <div className='quotes-wrapper-down'><FontAwesomeIcon className='quotes' icon={faQuoteLeft} /></div>

                        </CardRight>
                    </Card>
                </CardsContainer>
                <CardsContainer>
                    <Card >
                        <CardLeft style={{ background: `url(${balazs})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
                            <h4>Balázs</h4>

                        </CardLeft>

                        <CardRight>
                            <div className='quotes-wrapper-up'> <FontAwesomeIcon className='quotes' icon={faQuoteRight} /></div>
                            <div className='text-container'>
                                <p>Az emberek gyakran úgy gondolják, hogy antiszoc vagyok és depressziós, ezért elkezdtem dalokat írni, hogy igazat adjak nekik.
                                Elsőként 10 évesen vettem hangszert a kezembe, majd azon a napon megírtam az Oasis – Wonderwall című számát magyar szöveggel, egy akkordra hangszerelve.
                                Ennek az lett a vége, hogy szüleim inkább beírattak egy zeneiskolába. Mára messzebb jutottam, mint bárki hitte volna, hiszen négy akkordos számokat is
                                simán meg tudok írni.
                           </p>
                                <div>


                                    <a target="blanc" class="socialA" href="https://www.facebook.com/bbazsa"><FontAwesomeIcon className='icon' size="2x" icon={faFacebook} /></a>
                                    <a target="blanc" class="socialA" href="https://instagram.com/balazs_bohm?igshid=rlpa2or5mzoi"><FontAwesomeIcon className='icon' size="2x" icon={faInstagram} /></a>
                                </div>
                            </div>

                            <div className='quotes-wrapper-down'><FontAwesomeIcon className='quotes' icon={faQuoteLeft} /></div>
                        </CardRight>
                    </Card>
                </CardsContainer>
                <CardsContainer>
                    <Card >
                        <CardLeft style={{ background: `url(${feco})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
                            <h4>Feri</h4>

                        </CardLeft>

                        <CardRight>
                            <div className='quotes-wrapper-up'> <FontAwesomeIcon className='quotes' icon={faQuoteRight} /></div>
                            <div className='text-container'>

                                <p>
                                    Annó haverokkal alapítottunk egy együttest de nem voltak vele komolyabb szándékaink. Ezután játszottam egy orosházi zenekarban 3 évig,
                                    ami egy progresszív folk rock zenekar volt.
                                    Instrumentális vonalon is mozogtam egy ideig, valamint a pop rock stílusban is kipróbáltam magam. Ezt szeretném itt is tovább vinni.
                    </p>
                                <div>


                                    <a target="blanc" class="socialA" href="https://www.facebook.com/ferenc.nyiri.7"><FontAwesomeIcon className='icon' size="2x" icon={faFacebook} /></a>
                                    <a target="blanc" class="socialA" href="https://instagram.com/feconyiri?igshid=g6c1mzy4kuer"><FontAwesomeIcon className='icon' size="2x" icon={faInstagram} /></a>
                                </div>
                            </div>
                            <div className='quotes-wrapper-down'><FontAwesomeIcon className='quotes' icon={faQuoteLeft} /></div>
                        </CardRight>
                    </Card>
                </CardsContainer>
                <CardsContainer>
                    <Card>
                        <CardLeft style={{ background: `url(${bogdan})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
                            <h4>Bogdán</h4>

                        </CardLeft>

                        <CardRight>
                            <div className='quotes-wrapper-up'> <FontAwesomeIcon className='quotes' icon={faQuoteRight} /></div>
                            <div className='text-container'>
                                <p>
                                    Több rockbandában voltam alapító és dobos. Illetve több metál bandában basszusgitároztam és volt pár sindwing project is,
                                    ahol basszeroztam vagy énekeltem. Pop, rock és punk ötvözését szeretem leginkább a zenében. Kedvenceim a 90-es évek alterrock szerzeményi.
                    </p>
                                <div>


                                    <a target="blanc" class="socialA" href="https://www.facebook.com/vincze.bobo"> <FontAwesomeIcon className='icon' size="2x" icon={faFacebook} /></a>
                                    <a target="blanc" class="socialA" href="https://instagram.com/bogdan.vincze?igshid=1kuk5582umdwj"><FontAwesomeIcon className='icon' size="2x" icon={faInstagram} /></a>
                                </div>

                            </div>
                            <div className='quotes-wrapper-down'><FontAwesomeIcon className='quotes' icon={faQuoteLeft} /></div>
                        </CardRight>
                    </Card>

                </CardsContainer>
            </Slider>
        </MainContainer>






    );
};

export default BioCards;