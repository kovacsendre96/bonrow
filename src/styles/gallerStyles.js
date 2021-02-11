import styled from 'styled-components';

export const MainConatiner = styled.div`
	background:black;


`;
export const Tags = styled.div`
text-align: center;
	padding-top:90px;
	background:#ffffff;
	
	


    .tag {
	outline: none;
	border: none;
	color: #000000;
	margin: 0px 10px;
	background-color: transparent;
	cursor: pointer;
}

.active {
	font-weight: bold;
	border-bottom: 5px solid orange;
}
`;


export const Container = styled.div`
	width: 80%;
	margin:80px auto 0px auto;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 10px;

    @media (max-width:1024px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width:768px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width:480px){
        grid-template-columns:1fr;

 .image {
	 width: 150px;
    height:150px;
    object-fit: cover;
       
    }
}
    .image {
	 width: 200px;
    height:200px;
    object-fit: cover;
	filter:grayscale(75%);
	transition:0.5s;
	
	
	&:hover{
		filter:grayscale(0);
		transform:scale(1.05);
	}
   
}
`;










