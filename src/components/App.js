import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import { Provider } from 'react-redux'

import store from '../store';

// Components 
import Header from './Header';
import Filter from './Filter';
import ItemList from './ItemList';

export default function App() {
  return (
    <Provider store={store}>
    <Header />
    <Content>
      <Grid container  spacing={2}>
        <Grid item md={3} >
          <Filter />
        </Grid>
        <Grid item md={9} >
          <ItemList />
        </Grid>
      </Grid>
    </Content>
    </Provider>
  );
}
const Content = styled.div`
  padding: 10px 20px 0px 20px;
`
