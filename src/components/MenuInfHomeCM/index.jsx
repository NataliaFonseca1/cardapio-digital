import React from 'react'
import { HomeButtonCM, Label, MenuContainer, HomeIconCM, RequestIconCM, IconContainer } from './styles'



const MenuInferiorHomeCM = () =>{
return(
  <>
  <MenuContainer>
<HomeButtonCM>
<IconContainer>
 <HomeIconCM/>
 <Label>Home</Label>
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

export default MenuInferiorHomeCM