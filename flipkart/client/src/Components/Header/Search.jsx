import { Box, InputBase, styled } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchStyle = styled(Box)`
 background:white;
 width:38%;
 border-radius:3px;
 margin-left:10px;
 display:flex;
 `

const InputBaseStyle = styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
`
const Icon = styled(SearchIcon)`
color:#2874f0;
padding:5px;
display:flex;
`

const Search = () => {
  return (
    <SearchStyle>
        <InputBaseStyle placeholder='Search for products, brands and more'/>
        <Box>
            <Icon/>
        </Box>
    </SearchStyle>
  )
}

export default Search