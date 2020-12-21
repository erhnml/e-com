import React from 'react';
import styled from 'styled-components';

import FilterItem from '../FilterItem'


export default function FilterWrapper ({filter}) {
  return(
    <Wrapper>
      <FilterTitle>{filter.label}</FilterTitle>
      {
        filter.items.map((item, index) => <FilterItem key={index} item={item} type={filter.type}/>)
      }
    </Wrapper>
  )
}
const Wrapper = styled.div`
  border-bottom: 1px solid #e5e5e5;
  padding-left: 20px;
  padding-bottom: 10px;
  @media only screen and (max-width: 768px) {
    padding-left: 10px;
  }
`;
const FilterTitle= styled.h3`
  margin-bottom: 5px;
  font-size: 16px;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
