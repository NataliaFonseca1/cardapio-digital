import React from 'react'
import { HomeButtonCM, Label, MenuContainer, RequestIconCM, MenuIconCM, IconContainer } from './styles'




const MenuInferiorCM = () =>{
return(
  <>
  <MenuContainer>
<HomeButtonCM>
<IconContainer>
 <MenuIconCM/>
 <Label>Cardápio</Label>
 </IconContainer>
 </HomeButtonCM>
<HomeButtonCM>
<IconContainer>
<RequestIconCM/>
<Label>Pedidos</Label>
 </IconContainer>
 </HomeButtonCM>
  </MenuContainer>
  </>
)
}

export default MenuInferiorCM