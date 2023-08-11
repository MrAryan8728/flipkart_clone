import { Box, Button, Typography, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../Login/LoginDialog';
import React, { useState , useContext } from 'react'
import { DataContext } from '../../context/DataProvider'; 


const Wrapper = styled(Box)`
    display:flex;
    margin-top:0 3% 0 auto;
    & > button,& > p,& > div{
      margin-right:40px;
      font-size:16px;
      align-items:center;
    }
`

const Container = styled(Box)`
display:flex;
`

const LoginBtn = styled(Button)`
color:#2874f0;
background:white;
text-transform:none;
padding:5px 40px;
border-radius:2px;
box-shadow:none;
font-weight:600;
height:32px;
`

const CustomButton = () => {

  const [Open,setOpen] = useState(false);

  const { account } = useContext(DataContext);

  const TriggerDialog = () =>{
    setOpen(true);
  }

  return (
    <Wrapper>
    {
         account ? <Typography>{ account }</Typography>: 
           <LoginBtn variant='contained' onClick={()=>TriggerDialog()}>Login</LoginBtn>
    }
        <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
        <Typography style={{marginTop:3}}>More</Typography>

        <Container>
            <ShoppingCartIcon/>
            <Typography>Cart</Typography>
        </Container>
        <LoginDialog open = {Open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default CustomButton