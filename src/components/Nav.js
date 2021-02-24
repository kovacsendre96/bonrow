import React, {useState} from 'react';
import {NavContainer,ImgWrapper,LinksWrapper} from '../styles/navStyle';
import bonrowLogo from '../images/bonrow_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';





const Nav = () =>{

const [isActive,setIsActive]=useState(false);


const ActiveHandler = () =>{

    setIsActive(!isActive);

};


    return(
        <NavContainer>
            <ImgWrapper>
                <img src={bonrowLogo} />
            </ImgWrapper>
           {/*  <iframe src="https://open.spotify.com/embed/artist/0JBbrViO0M4a66OAkh0uf2" width="280" height="70" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
            <LinksWrapper className={isActive?'active':''}>
               <Link onClick={ActiveHandler} className="link" to ="/">BIO</Link> 
               <Link onClick={ActiveHandler} className="link" to ="/gallery">GALLÉRIA</Link> 
               <Link onClick={ActiveHandler} className="link" to ="/music">ZENE</Link> 
               <Link onClick={ActiveHandler} className="link" to ="/contact">KAPCSOLAT</Link> 
       
            </LinksWrapper>
           <div onClick={ActiveHandler} className="menu-bar"> < FontAwesomeIcon icon={faBars} size="3x" /></div>
        </NavContainer>
        

    );
};

export default Nav ;