import React from 'react';
import styled from 'styled-components';
import {Checkbox} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {  addFilter, removeFilter } from '../../store/actions/filter';


export default function FilterItem ({ item,type }){
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filter.filters);
  const changeHandler = (e) => {
    const checked = e.target.checked;
    if(checked) {
      dispatch(addFilter({ type, value: item.value }))
    } else {
      dispatch(removeFilter({ type, value: item.value }))

    }
  }
  return(
    <Wrapper>
      <Checkbox
        color="primary"
        checked={filters[type] ? filters[type].includes(item.value) : false}
        onChange={changeHandler}
      />
      <Label>{item.label}</Label>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Label = styled.span`
  font-size: 12px;
`;
