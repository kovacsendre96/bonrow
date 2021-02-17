import React from 'react';
import { Container } from '../styles/contactStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faDeezer, faAmazon, faInstagram, faYoutube, faApple, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';




const Contact = () => {

    return (

        <Container>
            <h2>Kapcsolat</h2>
            <div className="form-wrapper">
                <div className="input-wrapper">
                    <input class="input--text" type="text" id="fullName" name="fullName" size="64" maxlength="64"
                        placeholder="Teljes név" />
                    <input class="input--text" type="text" id="email" name="email" size="64" maxlength="64"
                        placeholder="Email" />
                    <input class="input--text" type="text" id="phone" name="phone" size="32" maxlength="32"
                        placeholder="Telefonszám" />


                </div>

                <div className="message-wrapper">
                    <textarea class="input--textarea" id="message" name="message" rows="10" cols="80"
                        placeholder="Üzenet"></textarea>
                    <input class="submit__btn" type="submit" name="contactSubmit" value="Elküldés" />
                </div>

            </div>
            <div className="icon-wrapper">
                <a href="https://www.facebook.com/bonrowzenekar"> <FontAwesomeIcon className='icon' icon={faFacebook} /></a>
                <a href="https://www.instagram.com/bonrowzenekar"> <FontAwesomeIcon className='icon' icon={faInstagram} /></a>
                <a href="https://www.youtube.com/channel/UC--PZb3qB5W-_l_QoqQAzOw"> <FontAwesomeIcon className='icon' icon={faYoutube} /></a>
                <a href="https://www.amazon.com/s?k=Bonrow&i=digital-music&search-type=ss&ref=ntt_srch_drd_B0868Y379M"> <FontAwesomeIcon className='icon' icon={faAmazon} /></a>
                <a href="https://open.spotify.com/artist/0JBbrViO0M4a66OAkh0uf2"> <FontAwesomeIcon className='icon' icon={faSpotify} /></a>
                <a href="https://music.apple.com/us/artist/bonrow/1504128798"> <FontAwesomeIcon className='icon' icon={faApple} /></a>
                <a href="https://www.deezer.com/en/artist/89121102"> <FontAwesomeIcon className='icon' icon={faDeezer} /></a>
                <a href="https://www.tiktok.com/music/Valaki-más-6807537169331144706"> <FontAwesomeIcon className='icon' icon={faTiktok} /></a>

            </div>
        </Container>

    );
};

export default Contact;