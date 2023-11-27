import styled from "styled-components"; 
import { Button } from "./../../components/ButtonCM/styles"
import { AiOutlineForm } from "react-icons/ai";

export const PageContainer=styled.div`
width: 390px;
height: 844px;
background-color: #F7F7F7;
align-items: center;
margin:0 auto;
`
export const Container=styled.main`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-left: 26px;
gap: 10px;
p{
  width: 338px;
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

h1{
  width: 198px;
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;


}
h2{
  width: 198px;
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
h3{
  width: 198px;
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-bottom: 109px;


}
`

export const ImgContainer=styled.div`
display: flex;
width: 338px;
height: 190px;
align-items: center;
border-radius: 22px;
margin-left: 26px;
background-repeat: no-repeat;
position: relative;
color:#FF914D;
background-color: #fff;

`
export const ButtonIcon=styled(AiOutlineForm)`
width: 14.823px;
height: 14.259px;
  border: none;
  background-color: none;
  color:none;
position:absolute;
padding-left:305px;
padding-top: 159px;
`

export const ModalContainer=styled.div`
display: flex;
width: 317px;
height: 164px;
margin: 20px 26px;
flex-direction: column;
align-items: center;
flex-shrink: 0;
border: 2px solid #FF6100;
border-radius: 16px;
background: var(--neutral-neutral-0,#fff);
box-shadow: 0px 4px 20px -2px rgba(50, 50, 71, 0.04), 0px 0px 1px 0px rgba(12, 26, 75, 0.03);
z-index: 1;
position: relative;
button{
display: flex;
height: 22px;
width: 65px;
padding: 16px 16px;
margin-top:8px;
margin-left: 105px;
justify-content: center;
align-items: center;
flex-shrink: 0;
align-self: stretch;
border: 6px solid  #FF6100;
border-radius:6px;
background: #FF6100;
color: #fff;
text-align: center;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 22px; /* 137.5% */
align-items: center;
}
input{
  border-radius: 16px solid  #FF6100;
}
`
export const ModalContent=styled.div`
margin: 50px auto;

`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.3);
`
export const ButtonContainer=styled.div`
display: grid;
width: 100%;
`

export const DeleteButton=styled(Button)`
display: flex;
width: 338px;
padding: 13px 100px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 10px;
background: linear-gradient(180deg, #8196AA 0%, #34495E 100%);

`

export const UpdateButton=styled(Button)`
display: flex;
width: 338px;
padding: 13px 100px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 10px;

`