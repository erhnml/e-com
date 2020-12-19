import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux';
import {addBasket} from '../../store/actions/basket';


export default function Item({ item }){
  const dispatch = useDispatch();

  return <Wrapper>
    <Img src={item.img} />
    <ItemName>{item.name}</ItemName>
    <Price>{item.price.toFixed(2)} TL</Price>
    <Button color="primary" variant="contained" size="small" onClick={() => dispatch(addBasket(item))}>
      Add to cart
    </Button>
  </Wrapper>
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Img = styled.img`
  max-width: 100%;
  height: 300px;
`;
const ItemName = styled.span`
  font-size: 14px;
  margin-top: 10px;
  min-height: 50px;
`;
const Price = styled.span`
  font-weight: bold;
  margin: 5px 0px 10px 0px;
`;

