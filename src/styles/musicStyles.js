
import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Container = styled(motion.div)`
padding-top:80px;

`;

export const AlbumWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:90%;
    margin: 0 auto 0 auto;
    background:black;
  
  
   
    
    
    h2{
        color:white;
        font-size:2rem;
        margin-bottom:10px;
    }
    .album-introduction{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        color:white;
        width:35%;
        height:100%;
        text-align:center;
        
        p{
            width:85%;
        }
      
    }

    @media (max-width:1440px){
        flex-direction:column;

        .album-introduction{
            width:90%;
            height:40%;
        }
    }
    
        @media (max-width:425px){
            p{
                font-size:0.8rem;
            }
            h2{
                font-size:1.5rem;
            }
        
        }
    
   
.music-wrapper{
    
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    width:65%;
    .iframe{
            width:100%;
        }
   
    @media (max-width:1440px){
        grid-template-columns: repeat(3, 1fr);
        width:80%;
    }
    @media (max-width:1024px){
        grid-template-columns: repeat(2, 1fr);
        width:80%;
      
    }
 
    @media (max-width:768px){
        grid-template-columns:1fr;
        width:60%;
   
    }
    @media (max-width:425px){
        grid-template-columns:1fr;
        width:100%;
      
   
    }

    }

`;



export const Song = styled.div`
margin:5px;
padding:10px;



.song-bottom{
width:100%;
height:30px;
background:white;
display:flex;
align-items:center;
justify-content:space-around;

.icon{
    color:black;
}

}

`;
