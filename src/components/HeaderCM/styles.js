import styled from 'styled-components'
import {BiChevronLeft} from "react-icons/bi";

export const HeaderContainer=styled.div`
display:flex;
align-items: center;
width: 109px;
height: 24px;
flex-shrink: 0;
color:#FF6100;

`
export const HeaderButton=styled.button`
background-color: #F7F7F7;
border:none;
color: none;
cursor:pointer;
`
export const HeaderIcon=styled(BiChevronLeft)`
width: 18px;
height: 24px;
flex-shrink: 0;
color:#FF6100;
background-color: none;

`

export const Tittle=styled.h1`
color: #FF6100;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;


`