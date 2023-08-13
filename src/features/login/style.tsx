import styled from 'styled-components';
import imagem from "../../assets/cofrinho-lateral-com-moedas-e-notas.jpg"
import logo from "../../assets/logo3.png"
import * as M from "@mui/material";


export const Container = styled.div`
margin: auto;
background-color: #1D3D39;
display: flex;
flex-flow: inherit;
height: 100vh;
place-content: center;
`

export const Logo = styled.div`
width: 350px;
height: 270px;
background-size: contain;
background-position: unset;
background-repeat: no-repeat;
background-image: url(${logo});
`
export const BoxLeft = styled.div`
flex: 0 0 50%;
background-image: url(${imagem});
background-size: cover;
background-position: unset;
background-repeat: no-repeat;
`
export const BoxRight = styled.div`
flex: 0 0 50%;
align-self: center;
text-align: -webkit-center;
`

export const Group = styled.div`
display: flex;
flex-direction: column;
row-gap: 12px;
`
