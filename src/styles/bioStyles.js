import styled from 'styled-components';
import bonrowCrew from '../images/bonrow-crew.jpg';


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

width:60%;
height:100%;
background:url(${bonrowCrew});
background-size:cover; 
background-repeat:no-repeat;
background-position:center;

@media(max-width:1024px){
    width:100%;
    height:65%;
    background-position:top;
    }
  


    



`;

export const Description = styled.div`
width:40%;
height:100%;
display:flex;
justify-content:center;
align-items:center;



    @media(max-width:1024px){
        width:100%;
    height:35%;
    
    p{
        font-size:0.9rem !important;
    }
    }

    @media(max-width:900px){
   
    
    p{
        font-size:0.7rem !important;
    }

    }
p{
    color:#000000;
    width:80%;
    font-size:1.3rem;
    text-align:justify;
    
}

`;

// ============================CARDS============================

export const MainContainer= styled.div`
padding-top:80px;
padding-bottom:80px;
background:black;
h2{
    color:#ffffff;
    text-align:center;
    font-size:2.5rem;
}
.slider{
    width:84%;
    margin: 0 auto 0 auto;
}

    
`;

export const CardsContainer = styled.div`
    padding-top:80px;
    display:flex;
    justify-content:center;
    align-items:center;
    background:black;

   
`;



export const Card = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column-reverse;
    margin-right:10px;
    margin-left:10px;
    transition:0.5s;
    height:490px;
    width:340px;
       
 




    &:hover{
        
    }

    @media(max-width:1200px){
        height:400px;
        width:320px;
        margin: 0 auto 0 auto;

       

    }

    @media(max-width:900px){
       flex-direction:row;
       width:400px;
       height:250px; 
       margin:0 auto 0 auto ;
    }

    @media(max-width:450px){

       width:300px;
       height:300px;
     
    }
    
`;

export const CardLeft = styled.div`
    width:100%;
    height:50%;
   

    
    h4{
        
        text-align:center;
        font-size:2rem;
        color:white;
        padding:8px;
        
        
    }

  
    @media(max-width:1024px){
    }

        @media(max-width:900px){
       width:50%;
       height:100%;
      

       
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
        
        font-size:0.61rem;
        
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

    @media(max-width:1200px){
        p{
            font-size:0.5rem;    
        }
    }
  
        @media(max-width:900px){
       width:50%;
       height:100%;
   
       p{
        font-size:0.45rem; 
       }
      
       
    }
      

`;