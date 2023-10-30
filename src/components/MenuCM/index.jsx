import React from 'react'
import * as S from './styles'




const MenuInferiorCM = () =>{
return(
  <>
  <S.MenuContainer>
<S.HomeButtonCM>
<S.IconContainer>
 <S.MenuIconCM/>
 <S.Label>Cardápio</S.Label>
 </S.IconContainer>
 </S.HomeButtonCM>
<S.HomeButtonCM>
<S.IconContainer>
<S.RequestIconCM/>
<S.Label>Pedidos</S.Label>
 </S.IconContainer>
 </S.HomeButtonCM>
  </S.MenuContainer>
  </>
)
}

export default MenuInferiorCM