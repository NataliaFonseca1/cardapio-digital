import styled from 'styled-components'
import Select from 'react-select';

export const ButtonCardContainer=styled.div`
width: 198px;
display: flex;
align-items: center;
justify-content: space-between;


`
export const CardCategory= styled.div`
width: 107px;
height: 23px;
flex-shrink: 0;

`


export const customSelectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    width: 107,
    height: 23,
    borderRadius: 5,
    background: '#ff6100',
    color: '#fff',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 'normal',
    padding: 2,
    
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    display: 'none', // Oculta a seta
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: 'none', // Oculta o separador
  }),
};




export const ButtonCardAdd=styled.button`
width: 25px;
height: 23px;
flex-shrink: 0;
border:none;
border-radius: 5px;
background: #FF6100;
color: #FFF;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
padding: 2px;
cursor:pointer;
`