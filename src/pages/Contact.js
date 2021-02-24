import React, { useState } from 'react';
import { Container } from '../styles/contactStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faDeezer, faAmazon, faInstagram, faYoutube, faApple, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Contact() {


    const [showDanger, setShowDanger] = useState(true);
    const [showSucces, setShowSucces] = useState(true);
    const [showDangerMessage, setShowDangerMessage] = useState(true);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const [nameClass, setNameClass] = useState(false);
    const [emailClass, setEmailClass] = useState(false);
    const [messageClass, setMessageClass] = useState(false);


    const NameHandler = (e) => {
        setName(e.target.value)

    };

    const EmailHandler = (e) => {
        setEmail(e.target.value)

    };

    const MessageHandler = (e) => {
        setMessage(e.target.value)
        
    };


    function sendEmail(e) {
        e.preventDefault();

        if ((name === undefined) || (email === undefined) || (message === undefined)) {
            setMessageClass(true);
            setEmailClass(true);
            setNameClass(true);
            setShowDanger(false);

        }
        else if (message.length < 6) {
            setMessageClass(true);
            setShowDangerMessage(false);

        }

        else {
            e.target.reset();
            setShowSucces(false);
            setShowDanger(true);
            setShowDangerMessage(true);
            setMessage();
            setEmail();
            setName();
            setMessageClass(false);
            setEmailClass(false);
            setNameClass(false);
        }

        /* emailjs.sendForm('template_xbbgjf9', 'template_xbbgjf9', e.target, 'user_rLVLx6iz1DQBWutaDo8UC')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        */
    }







    return (


        <Container>
            <Alert style={{ transition:"0.5s"}} variant="success" className={showSucces ? 'unvisible' : ''}onClose={() => setShowSucces(true)} dismissible>
                <p>  Sikeres üzenetküldés</p>
            </Alert>

            <Alert style={{padding:"0",margin:"0",transition:"0.5s"}}  variant="danger" className={showDanger ? 'unvisible' : ''} onClose={() => setShowDanger(true)} dismissible>
                <Alert.Heading>Hiányos űrlap</Alert.Heading>
                <p>
                    A csillaggal jelölt rész kitöltése kötelező .
              </p>
            </Alert>

            <Alert style={{padding:"0",margin:"0",transition:"0.5s"}}  variant="danger" className={showDangerMessage ? 'unvisible' : ''} onClose={() => setShowDangerMessage(true)} dismissible>
                <Alert.Heading>Hiányos űrlap</Alert.Heading>
                <p>
                   Az üzenetnek legalább 6 karakterből kell állnia.
              </p>
            </Alert>

            <h2>Kapcsolat</h2>
            <form onSubmit={sendEmail} >
                <div className="form-wrapper">
                    <div className="input-wrapper">
                        
                        <label for="name">Név*</label>
                        <input className={`input--text ${nameClass ? 'name-error' : ''}`} type="name" id="name" name="name" size="64" maxlength="64"
                             onChange={NameHandler} />

                        <label for="email">E-mail cím*</label>
                        <input class={`input--text ${emailClass ? 'email-error' : ''}`} type="email" id="email" name="email" size="64" maxlength="64"
                             onChange={EmailHandler} />

                        <label for="phone">Telefonszám</label>
                        <input class="input--text" type="phone" id="phone" name="phone" size="32" maxlength="32"
                            />


                    </div>

                    <div className="message-wrapper">
                        <label>Üzenet*</label>
                        <input class={`input--textarea ${messageClass ? 'message-error' : ''}`} id="message" name="message" rows="10" cols="80"
                            placeholder="Legalább 6 karakter hosszú" onChange={MessageHandler} />
                        <input class="submit__btn" type="submit" name="contactSubmit" value="Elküldés" />
                    </div>

                </div>
            </form>



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



