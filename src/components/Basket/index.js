import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Item from './Item';

export default function Basket() {
  const items = useSelector((state) => state.basket.items);

  return (
    <Wrapper center={!items.length}>
      {
        items.map((item) => <Item item={item} />)
      }
      {
        !items.length && <span>Sepete ürün bulunmamaktadır</span>
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${
    ({ center }) => center && `
      display: flex;
      justify-content: center;
    `
  }
  padding: 20px;
`;