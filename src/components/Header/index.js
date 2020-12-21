import React from 'react'
import styled from 'styled-components';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Container, Badge, Popover, IconButton, CircularProgress} from '@material-ui/core';
import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';

import Basket from '../Basket';

export default function Header(){
  const [anchorEl, setAnchorEl] = React.useState(null);
  const basketItems = useSelector((state) => state.basket.items)
  const basketLoading = useSelector((state) => state.basket.loading)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <AppBar position="sticky" color="white" >
      <Container>
        <Wrapper>
          <Logo src="https://www.inveon.com/wp-content/uploads/2019/09/inveon-logo-dark.svg"/> 
          {
           (
              <BasketWrapper>
                  { basketLoading 
                    && <CircularProgress size={30} /> 
                  }
                  <IconButton onClick={handleClick}>
                     <Badge badgeContent={basketItems.length} color="secondary">
                      <BasketIcon />
                     </Badge>
                  </IconButton>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <PopoverContent>
                      <Basket />
                    </PopoverContent>
                  </Popover>
              </BasketWrapper>
            )
          }
        </Wrapper>
      </Container>
    </AppBar>
  )
}



const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
`;
const Logo = styled.img`
  width: 200px;
`;
const BasketWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const BasketIcon = styled(ShoppingBasketIcon)`
  color: #575b5d;
`;

const PopoverContent = styled.div`
  width: 500px;
  height: 300px;
  font-size: 16px;
  @media only screen and (max-width: 728px) {
    width: 100%;
  }
`;
