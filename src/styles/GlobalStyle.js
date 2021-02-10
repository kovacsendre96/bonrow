import { createGlobalStyle } from "styled-components";
import decibel from '../styles/Decibel_2.ttf';
import sedgwick from '../styles/SedgwickAve-Regular.ttf';


const GlobalStyle = createGlobalStyle`
@font-face {
    font-family:Decibel ;
    src: url(${decibel});
}
@font-face {
    font-family:Sedgwick ;
    src: url(${sedgwick});
}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lexend Mega', sans-serif;
}
   
 h1,h2,h3,h4,h5,h6,a{
        font-family:Decibel;

 }



`;

export default GlobalStyle;