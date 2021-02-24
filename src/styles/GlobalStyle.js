import { createGlobalStyle } from "styled-components";
import decibel from '../styles/Decibel_2.ttf';
import sedgwick from '../styles/SedgwickAve-Regular.ttf';
import daydream from '../styles/Our-Daydream.ttf';
import lightInBrush from '../styles/Light-In-Brush.ttf';


const GlobalStyle = createGlobalStyle`
@font-face {
    font-family:Decibel ;
    src: url(${decibel});
}
@font-face {
    font-family:Sedgwick ;
    src: url(${sedgwick});
}

@font-face {
    font-family:Daydream ;
    src: url(${daydream});
}
@font-face {
    font-family:lightInBrush ;
    src: url(${lightInBrush});
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lexend Mega', sans-serif;

}
body{
    background:black;
}
   
 h1,h2,h3,h4,h5,h6,a{
        font-family:Daydream;
        

 }
a{
    text-decoration:none;
}


`;

export default GlobalStyle;