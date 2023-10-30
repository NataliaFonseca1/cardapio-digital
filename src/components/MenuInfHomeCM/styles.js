import styled from 'styled-components'

import { IoHomeOutline, IoCartOutline } from "react-icons/io5";



export const MenuContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 409px;
height: auto;
flex-shrink: 0;
border: 1px solid #FF6100;
background:#F7F7F7;
`
export const IconContainer=styled.div`
display: flex;
width: 75px;
padding: 2px 21px 0.151px 22px;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const HomeButtonCM = styled.button`
display:flex;
border: none;
background-color: none;
width:100%;
cursor:pointer;
`
export const HomeIconCM = styled(IoHomeOutline)`
width: 32px;
height: 32px;
color: #FF6100;

`

export const RequestIconCM = styled(IoCartOutline)`
width: 26px;
height: 26px;
color: #FF6100;
`
export const Label = styled.h1`
color: #FF6100;
text-align: center;
font-family: Inter;
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.24px;
`