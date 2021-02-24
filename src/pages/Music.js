import React from 'react';
import { Container, AlbumWrapper, MusicWrapper, Song } from '../styles/musicStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faDeezer, faAmazon } from '@fortawesome/free-brands-svg-icons';
import {pageAnimation} from '../styles/animation';



const Music = () => {

    return (
        <Container  variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <AlbumWrapper>
                <div className='album-introduction'>
                    <h2>Valahonnan ugyanoda</h2>
                    <p>Valahonnan elindultunk. Több irányba tartunk. Ugyanoda érkezünk.</p>

                </div>
                <div className="music-wrapper">

                    <Song>
                        <iframe className='iframe' width="250" height="200" src="https://www.youtube.com/embed/mYmxmQq-4jA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className='song-bottom'>
                            <a target="blanc" href="https://www.amazon.com/Valaki-m%C3%A1s/dp/B0868YVRXG/ref=sr_1_5?dchild=1&keywords=bonrow&qid=1607513877&sr=8-5"> <FontAwesomeIcon className='icon' icon={faAmazon} /> </a>
                            <a target="blanc" href="https://www.deezer.com/en/album/137792402"><FontAwesomeIcon className='icon' icon={faDeezer} /></a>
                            <a target="blanc" href="https://open.spotify.com/track/3buX5Ecfi6k3eohUVQI9sU"><FontAwesomeIcon className='icon' icon={faSpotify} /></a>
                        </div>
                    </Song>

                    <Song>
                        <iframe className='iframe' width="250" height="200" src="https://www.youtube.com/embed/Sx8wu5Zar9U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className='song-bottom'>
                            <a target="blanc" href="https://www.amazon.com/Valaki-m%C3%A1s/dp/B0868YVRXG/ref=sr_1_5?dchild=1&keywords=bonrow&qid=1607513877&sr=8-5"> <FontAwesomeIcon className='icon' icon={faAmazon} /> </a>
                            <a target="blanc" href="https://www.deezer.com/en/album/137792402"><FontAwesomeIcon className='icon' icon={faDeezer} /></a>
                            <a target="blanc" href="https://open.spotify.com/track/3buX5Ecfi6k3eohUVQI9sU"><FontAwesomeIcon className='icon' icon={faSpotify} /></a>
                        </div>
                    </Song>

                    <Song>
                        <iframe className='iframe' width="250" height="200" src="https://www.youtube.com/embed/855EVRaxSPI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className='song-bottom'>
                            <a target="blanc" href="https://www.amazon.com/Valaki-m%C3%A1s/dp/B0868YVRXG/ref=sr_1_5?dchild=1&keywords=bonrow&qid=1607513877&sr=8-5"> <FontAwesomeIcon className='icon' icon={faAmazon} /> </a>
                            <a target="blanc" href="https://www.deezer.com/en/album/137792402"><FontAwesomeIcon className='icon' icon={faDeezer} /></a>
                            <a target="blanc" href="https://open.spotify.com/track/3buX5Ecfi6k3eohUVQI9sU"><FontAwesomeIcon className='icon' icon={faSpotify} /></a>
                        </div>
                    </Song>

                    <Song>
                        <iframe className='iframe' width="250" height="200" src="https://www.youtube.com/embed/LqQP5bx3Xjk?list=OLAK5uy_nEZGP9cXzYXPa4b-anlTeOFonuoMKatls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className='song-bottom'>
                            <a target="blanc" href="https://www.amazon.com/Valaki-m%C3%A1s/dp/B0868YVRXG/ref=sr_1_5?dchild=1&keywords=bonrow&qid=1607513877&sr=8-5"> <FontAwesomeIcon className='icon' icon={faAmazon} /> </a>
                            <a target="blanc" href="https://www.deezer.com/en/album/137792402"><FontAwesomeIcon className='icon' icon={faDeezer} /></a>
                            <a target="blanc" href="https://open.spotify.com/track/3buX5Ecfi6k3eohUVQI9sU"><FontAwesomeIcon className='icon' icon={faSpotify} /></a>
                        </div>
                    </Song>

                    <Song>
                        <iframe className='iframe' width="250" height="200" src="https://www.youtube.com/embed/uK8rN28dq_E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className='song-bottom'>
                            <a target="blanc" href="https://www.amazon.com/Valaki-m%C3%A1s/dp/B0868YVRXG/ref=sr_1_5?dchild=1&keywords=bonrow&qid=1607513877&sr=8-5"> <FontAwesomeIcon className='icon' icon={faAmazon} /> </a>
                            <a target="blanc" href="https://www.deezer.com/en/album/137792402"><FontAwesomeIcon className='icon' icon={faDeezer} /></a>
                            <a target="blanc" href="https://open.spotify.com/track/3buX5Ecfi6k3eohUVQI9sU"><FontAwesomeIcon className='icon' icon={faSpotify} /></a>
                        </div>
                    </Song>

                </div>
            </AlbumWrapper>

           
        </Container>

    );
};

export default Music;


