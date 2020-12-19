import React from 'react'
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch } from 'react-redux';
import {removeBasket} from '../../../store/actions/basket';

export default function Item({ item}) {
  const {img, name, count } = item;
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Image src={img} />
      <Name>{name}</Name>
      <CountWrapper>
        <Count>{count}</Count>
      </CountWrapper>
      <IconButton onClick={() => dispatch(removeBasket(item))}>
        <DeleteIcon />
      </IconButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const Image = styled.img`
  width: 50px;
  margin-right: 10px;
`;
const Name = styled.span`
  width: 50%;
`;
const CountWrapper =styled.div`
  width: 25px;
  height: 25px;
  background-color: #575b5d;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 40px;
`; 
const Count = styled.span`
  font-weight: bold;
  color: white;
  font-size: 12px;
`;
