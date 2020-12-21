import React from 'react';
import {Grid, CircularProgress} from '@material-ui/core';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import items from '../../data/items.json';
import Item from '../Item';

export default function ItemList() {
  const filter = useSelector((state) => state.filter.filters)
  const loading = useSelector((state) => state.filter.loading)
  const getItems = () => {
   return items.filter(function(item) {
      for (const key in filter) {
        if(key === 'price') {
          if (filter[key].length > 0 && (item[key] < filter[key][0].min  || item[key] > filter[key][0].max))
            return false
        } else {
          if (filter[key].length > 0 && !filter[key].includes(item[key]))
            return false;
        }
        
      }
      return true;
    });
  }
  const itemList = getItems();
  if(loading) {
    return (
      <Wrapper>
        <CircularProgress />
      </Wrapper>
    )
  }
  if(!itemList.length) {
    return <Wrapper><p>Listenlenecek ürün bulunamadı.</p></Wrapper>
  }
  return (
    <Grid container spacing={4}>
    {
      itemList.map((item, index) => (
        <Grid key={index} item md={4} sm={12}><Item item={item} /></Grid>
      ))
    }
  </Grid>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
