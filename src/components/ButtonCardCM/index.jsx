import React, { useState, useEffect } from "react";
import Select from 'react-select'
import { customSelectStyles } from './styles'
import * as S from './styles'



const Card= ()=>{
  const [addSelect, setAddSelect]=useState(false)
  const [selectedValues, setSelectedValues] = useState([]);  
  const options = [
    { value: 1, label: 'Portuguesa'},
    { value: 2, label: 'Italiana'},
    { value: 3, label: 'Oriental'},
    { value: 4, label: 'Alemã'},
  ];

  /*useEffect(()=>{
    fetch('')
    .then((res)=>res.json())
    .then((data)=>setSelectValue(data))
    
  },[])*/
  const SelectOption=()=>{
setAddSelect(true)

  }
  const handleSelectChange = () => {
  
    console.log(selectedValues);
  }

  return(
    <S.ButtonCardContainer>
     
  <S.ButtonCardAdd onClick={SelectOption}>+</S.ButtonCardAdd>
    
  {addSelect && (
    <>
  <S.CardCategory>
   
    <label>
  Categorias:
 
  <Select 
                placeholder="Pratos Principais"
                isMulti
                options={options}
                onChange={(item)=>setSelectedValues(item)}
                isClearable={true}
                closeMenuOnSelect={false}
                styles={customSelectStyles}
              />

  
<button onClick={handleSelectChange}>imprimir</button>
</label>

</S.CardCategory>
  </>
  )}
  
  </S.ButtonCardContainer>

)
}

export default Card