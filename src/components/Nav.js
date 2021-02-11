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

            <LinksWrapper className={isActive?'active':''}>
               <Link className="link" to ="/">BIO</Link> 
               <Link className="link" to ="/gallery">GALLÉRIA</Link> 
               <Link className="link" to ="/zene">ZENE</Link> 
               <Link className="link" to ="/kapcsolat">KAPCSOLAT</Link> 
            </LinksWrapper>
           <div onClick={ActiveHandler} className="menu-bar"> < FontAwesomeIcon icon={faBars} size="3x" /></div>
        </NavContainer>
        

    );
};

export default Nav ;