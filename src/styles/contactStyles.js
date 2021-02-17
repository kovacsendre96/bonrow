import styled from 'styled-components';

export const Container = styled.div`
padding-top:100px;
color:white;
width:70%;
margin:0 auto 0 auto;
text-align:center;


h2{
    font-size:3rem;
    padding:35px;
}

.form-wrapper{
    display:flex;
    justify-content:space-between;
}


.input-wrapper{
    width:35%;
    

    .input--text{
        width:100%;
        height:35px;
        margin :15px 0px; 
    }
}

.message-wrapper{
    width:55%;

    .input--textarea{
        width:100%;
        resize:none;
    }
    .submit__btn{
        height:40px;
        margin-top:15px;
    }
}

.icon-wrapper{
    margin-top:50px;
    display:flex;
    width:100%;
    justify-content:space-around;
  

    .icon{
        font-size:1.7rem;
    }
    a{
        color:white;
        transition:0.5s;
        padding:8px;
        border-radius:15px;
        &:hover{
            background:white;
            color:black;
        }
    }

}

@media(max-width:768px){
   
    .form-wrapper{
        flex-direction:column;
        align-items:center;


        .input-wrapper,.message-wrapper{
            width:200px;
        }
    }
    .icon-wrapper{
        display:grid;
        grid-template-columns:repeat(4,1fr);
    }
    h2{
        padding:0;
    }
};

`;