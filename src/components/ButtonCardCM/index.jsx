import React, { useState } from "react";
import Select from 'react-select'
import * as S from './styles'



const Card= ({selectedcategories, options, onChange})=>{
  return(
<>
    <h1>Categorias</h1>
    <S.ButtonCardContainer>
    
  <Select 
                
                isMulti
                options={options}
                onChange={onChange} 
                value={selectedcategories}
                placeholder="Pratos Principais"
                closeMenuOnSelect={false}
                styles={{
                  container: ({ width, ...baseStyles }) => ({
                    ...baseStyles,
                    width: Math.min(300, 107 + 1 * 30), 
                    margin: 0,
                    padding: 0,
                  }),
                  control: (baseStyles) => ({
                    ...baseStyles,
                    width: 'auto',
                    minWidth: 120,
                    height: 'auto',
                    borderRadius: 5,
                    background: '#ff6100',
                    color: '#fff',
                    fontFamily: 'Inter',
                    fontSize: 12,
                    fontWeight: 500,
                    lineHeight: 'normal',
                    padding: 2,
                    border: 'none',
                    boxShadow: 'none',
                  }),
                    dropdownIndicator: (baseStyles) => ({
                      ...baseStyles,
                      display: 'none',
                    }),
                    indicatorSeparator: (baseStyles) => ({
                      ...baseStyles,
                      display: 'none',
                    }),
                    menu: (baseStyles) => ({
                      ...baseStyles,
                      fontSize: 12, 
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      fontSize: 12, 
                      whiteSpace: 'nowrap', 
                      overflow: 'hidden'
                    }),
                    placeholder: (baseStyles) => ({
                      ...baseStyles,
                      color: '#fff',
                      fontSize: 12, 
                      whiteSpace: 'nowrap', 
                      overflow: 'hidden'
                    }),
                }}
              
                
              />
  
  </S.ButtonCardContainer>
</>
)
              }
              
export default Card