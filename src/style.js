import styled, { css } from 'styled-components';

export const Styleshet = styled.div`
${() => css`

display: flex;
flex-direction: column;
background-color: rgb(36, 31, 49);
width: 100vw;
height: 100vh;
align-items: center;
justify-content: center;
justify-items: center;
.icone {

height: 100px;

}

p {
color: white;
font-size: 18px;
font-weight: bolder;
margin:22px 10%;
}


.button ,input{
padding: 22px;
min-width: 200px;
border-radius: 8px;
font-size: 16px;
background-color: rgb(97, 53, 131);
color: white;
}


form {
align-items: center;
display: flex;
flex-direction: column;
}

input {
background-color: rgb(40, 40, 52);
}

a{

	color: red;
}

.termos{
color: white;

background-color:  rgb(97, 53, 131);

}

.senha{

color: red;

}

`}
`;
