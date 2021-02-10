import styled from 'styled-components';


export const NavContainer = styled.div`
    height:80px;
    width:100%;
    background:#000000;
    display:flex;
    padding-right:25px;
    position:fixed;
    z-index:1;
    color:#ffffff;
    @media(max-width: 768px){
        justify-content:space-between;
    } 
    
    .menu-bar{
        display:none;
        align-items:center;
        cursor:pointer;
        
        
        @media(max-width: 768px){
            display:flex;
           
            
        } 
    }
    
    .active{
    left:0;
    }
    `;


export const ImgWrapper = styled.div`
    width:30%;
    height:100%;
    
    
    img{
        
        height: 100%;
        
    }
    `;


export const LinksWrapper = styled.div`

  width:70%;
  display:flex;
  align-items:center;
  justify-content:space-around;
  
  
  @media(max-width: 768px){
      
      
      position:absolute;
      transition :1s;
      left:-100%;
      top: 80px;
      flex-direction:column;
      height: calc(100vh - 80px);
      width:100%;
      background:grey;
      justify-content:center;
      
    }
    
    
    a{
        font-size:1.5rem;
        font-weight:bold;
        padding:10px;
        

       &:hover{
        color: black;
        background-color: white;
        transition: 0.5s ease-out;
        border-radius:5px;
       }
       
       @media(max-width: 768px){
        padding: 15px 0 15px 0;
   }
   }

    
`; 
