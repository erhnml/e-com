import React from 'react';
import styled from 'styled-components';
import filters from '../../data/filters.json';

// Components
import FilterWrapper from '../FilterWrapper/index';

export default function FilterItem(){
  return(
    <Wrapper>
      {
        filters.map(( filter, index ) => <FilterWrapper key={index} filter={filter} />)
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid #e5e5e5;
  border-bottom: 0px;
  border-radius: 5px;
`;

