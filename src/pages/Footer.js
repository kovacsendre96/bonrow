import React from 'react';
import styled from 'styled-components';

const Footer = () =>{
return(
<FooterStyle>
    <p>Copyright © 2020 Bonrow • Created and Designed : <a target="_blanc" href="https://kovacsendre96.github.io/myPortfolio/">Kovács Endre</a> </p>
</FooterStyle>
);
};
export default Footer;

const FooterStyle = styled.div`

width:100%;
height:40px;
color:white;
font-size:0.6rem;
text-align:center;


a{
    color:green;
    font-weight:bold;
}
`; 
