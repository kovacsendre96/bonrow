import React, {useState} from 'react';
import {NavContainer,ImgWrapper,LinksWrapper} from '../styles/navStyle';
import bonrowLogo from '../images/bonrow_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import { faSpotify, faDeezer, faAmazon, faInstagram, faYoutube, faApple, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';




const Nav = () =>{

const [isActive,setIsActive]=useState(false);


const ActiveHandler = () =>{

    setIsActive(!isActive);

};


    return(
        <NavContainer>
            <ImgWrapper>
            <Link onClick={ActiveHandler} className="link" to ="/bonrow">
                <img src={bonrowLogo} />
                </Link>
            </ImgWrapper>
{/*             <iframe src="https://open.spotify.com/embed/artist/0JBbrViO0M4a66OAkh0uf2" width="280" height="70" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> 
 */}            <LinksWrapper className={isActive?'active':''}>
               <Link onClick={ActiveHandler} className="link" to ="/bonrow">BIO</Link> 
               <Link onClick={ActiveHandler} className="link" to ="/gallery">GALLÉRIA</Link> 
               <Link onClick={ActiveHandler} className="link" to ="/music">ZENE</Link> 
               <Link onClick={ActiveHandler} className="link" to ="/contact">KAPCSOLAT</Link> 
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
            </LinksWrapper>
           <div onClick={ActiveHandler} className="menu-bar"> < FontAwesomeIcon icon={faBars} size="3x" /></div>
        </NavContainer>
        

    );
};

export default Nav ;