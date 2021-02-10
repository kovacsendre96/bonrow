import styled from 'styled-components';
import peti from '../images/peti.jpg';
import balazs from '../images/balazs.jpg';
import bogdan from '../images/bogdan.jpg';
import feco from '../images/feco.png';

// ============================HEADER============================
export const BioHeaderContainer = styled.div`
    display:flex;
    padding-top:80px;
    height: 100vh;
    
    @media(max-width:1024px){
        flex-direction:column-reverse;
    }
    `;

export const ImgWrapper = styled.div`

width:50%;
height:100%;

@media(max-width:1024px){
    width:100%;
    }

img{
    width:100%;
    height:100%;
    object-fit:cover;
   
}


`;

export const Description = styled.div`
width:50%;
height:100%;
display:flex;
justify-content:center;
align-items:center;

@media(max-width:1024px){
    width:100%;

    }
p{
    color:#000000;
    width:80%;
    font-size:1.5rem;
    text-align:justify;
    
}

`;

// ============================CARDS============================



export const CardsContainer = styled.div`
    padding-top:80px;
    display:flex;
    justify-content:center;
    align-items:center;
    background:black;
  
    
   
`;



export const Card = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column-reverse;
    border: 1px solid white;
    margin: 20px 15px;
    transition:0.5s;
    height:550px;
    width:350px;


    &:first-child{
    background:url(${peti});
    background-size:cover;
    background-position-y:230px;

    }
    &:nth-child(2){
    background:url(${balazs});
    background-size:cover;
    background-position-y:200px;
    }   
    &:nth-child(3){
    background:url(${feco});
    background-size:cover;
    background-position-y:230px;
    } 

    &:nth-child(4){
    background:url(${bogdan});
    background-size:cover;
    background-position-y:200px;
    } 




    &:hover{
        transform:scale(1.05)
    }

    @media(max-width:1024px){
        width:85%;
        height:380px;

    }

    @media(max-width:600px){
       flex-direction:column;
       width:90%;
     
    }
    
`;

export const CardLeft = styled.div`
    width:100%;
    height:50%;
   

    
    h4{
        
        font-size:2rem;
        color:white;
        padding:8px;
        
    }

  
    @media(max-width:1024px){
        img{
        width:55%;     
        }

        @media(max-width:600px){
       flex-direction:row;
       width:100%;
       height:50%;
       h4{
         display:none;  
       }
     
       img{
        width:100%;
        height:100%; 
        object-fit:cover;
        padding:0;
            
        }


       
    }
      

    }
`;

export const CardRight = styled.div`
    width:100%;
    height:50%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    background:#ffffff;

    
    p{
        
        font-size:0.8rem;
        text-align:justify;
        color:black;
    }
    .text-container{
        width:80%;
        display:flex;
        justify-items:center;
        justify-content:center;
        flex-direction:column;
        div{
            text-align:center;
            font-size:0.8rem;
          
            .icon{
                margin:8px;
            }
        }

    }
    .quotes-wrapper-down{
       text-align:end;
       width:70%;
    
      
    }

    .quotes-wrapper-up{
       text-align:start;
       width:70%;
      
    }

    @media(max-width:1024px){
        p{
            font-size:1rem;    
        }
    }
        @media(max-width:600px){
       
       width:100%;
       height:50%;
       p{
        font-size:0.9rem; 
       }
      
       
    }
      

`;