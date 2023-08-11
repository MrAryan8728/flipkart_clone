import React from 'react'
import Search from './Search'
import CustomButton from './CustomButton'
import {AppBar,Box,Toolbar,Typography,styled} from '@mui/material'

const StyledAppBar = styled(AppBar)`
   background:#2874f0;
   height:55px;
`
const StyleBox = styled(Box)`
   margin-left:12%;
   line-height:0;
`
const StyleTypo = styled(Typography)`
   font-size:12px;
   font-style:italic
`

const PlusImg = styled('img')({
  height:10,
  width:10,
  marginLeft:4
})

const CustomButtonWrapper = styled(Box)`
margin:0 5% 0 auto;
`

const Header = () => {

const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <StyledAppBar>
        <Toolbar style={{minHeight:55}}>
            <StyleBox>
                <img alt="logo" src={logoURL} style={{width:75}}/>
                <Box style={{display:'flex'}}>
                  <StyleTypo>Explore&nbsp; 
                      <Box component='span' style={{color:'yellow'}}>Plus</Box>
                  </StyleTypo>
                  <PlusImg src={subURL} alt='logo'/>
                </Box>
            </StyleBox>
            <Search/>
            <CustomButtonWrapper>
              <CustomButton/>
            </CustomButtonWrapper>
        </Toolbar>
    </StyledAppBar>
  )
}

export default Header