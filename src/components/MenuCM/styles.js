import styled from 'styled-components'
import { IoCartOutline } from "react-icons/io5";
import { RiRestaurantLine } from "react-icons/ri";



export const MenuContainer = styled.div`
display: flex;
align-items: center;
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
`

export const RequestIconCM = styled(IoCartOutline)`
width: 26px;
height: 26px;
color: #FF6100;

`
export const MenuIconCM = styled(RiRestaurantLine)`
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