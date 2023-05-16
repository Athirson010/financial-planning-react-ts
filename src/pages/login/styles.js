import styled from 'styled-components';

export const Modal = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    place-items: center;
`;

export const ModalConteudo = styled.div`
width: 60rem;
height: 40rem;
-webkit-box-pack: center;
justify-content: flex-start;
align-items: center;
text-align: center;
box-shadow: rgba(0, 0, 0, 0.3) 0px 25px 50px -12px;
border-radius: 12px;
background: #295650;
`;

export const Centralizador = styled.div`
    width: 100%;
    height: 100%;
    -webkit-box-align: center;
    align-items: center;
    place-content: space-evenly;
    flex-direction: row;
    padding: 1rem 2.1875rem;
    border-radius: 12px 0px 0px 12px;

img{
    width: 350px;
}
`;

export const Formulario = styled.div`
display: flex;
flex-direction: column;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: justify;
justify-content: flex-start;

form{
    display: flex;
    flex-direction: column;
}

input{
    width: 21.875rem;
    height: 2.8125rem;
    margin-top: 1rem;
    padding: 0px 0.75rem;

    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    outline: none;
    color: rgb(67, 66, 69);
    background: rgb(254, 254, 254);
    
}
`;
