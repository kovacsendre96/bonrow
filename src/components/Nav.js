import React, {useState} from 'react';
import {NavContainer,ImgWrapper,LinksWrapper} from '../styles/navStyle';
import bonrowLogo from '../images/bonrow_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';





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
               <a>BIO</a> 
               <a>GALLÉRIA</a> 
               <a>ZENE</a> 
               <a>KAPCSOLAT</a> 
            </LinksWrapper>
           <div onClick={ActiveHandler} className="menu-bar"> < FontAwesomeIcon icon={faBars} size="3x" /></div>
        </NavContainer>
        

    );
};

export default Nav ;