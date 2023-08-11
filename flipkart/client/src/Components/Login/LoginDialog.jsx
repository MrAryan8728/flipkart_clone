import React, { useState , useContext } from 'react'
import { Box, Button, Dialog, TextField, Typography, styled } from '@mui/material'
import { authenticateSignUp } from '../../service/api'
import { DataContext } from '../../context/DataProvider'

const Component = styled(Box)`
    height:70vh;
    width:90vh; 
`
const Image = styled(Box)`
    background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height:83%;
    width:29%;
    padding:45px 35px;
    &>p,&>h5{
        color:white;
        font-weight:600;
    }
`
const Wrapper = styled(Box)`
    display:flex;
    flex-direction:column;
    padding:25px 35px;
    flex:1;
    &>div,&>button,&>p{
        margin-top:20px;
    }
`

const LoginBtn = styled(Button)`
   text-transform:none;
   background:#FB6418;
   color:white;
   height:48px;
   border-radius:3px;
`

const RequestOTP = styled(Button)`
   text-transform:none;
   background:#Fff;
   color:#2874f0;
   height:48px;
   border-radius:3px;
   box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%); 
`

const Text = styled(Typography)`
    font-size:12px;
    color:#878787;
`
const CreateAccount = styled(Typography)`
    font-size:14px;
    text-align:center;
    color:#2874f0;
    font-weight:600;
    cursor:pointer;
`

const accountInitialvalues = {
    login:{
        view:'login',
        heading:"Login",
        subHeading:"Get access to your Orders,Wishlist and Recommendations"
    },
    signup:{
        view:'signup',
        heading:"Looks like you're new here",
        subHeading:"Sign up with your mobile number to get started"
    }
}

const signUpInitial = {
    firstname : '',
    lastname : ' ',
    username : ' ',
    email : ' ',
    password : ' ',
    contact : ' '
}

const LoginDialog = ({open,setOpen}) => {

    const [Account,toggleAccount] = useState(accountInitialvalues.login)
    const [SignUp,setSignup] = useState(signUpInitial)
    const [setAccount] = useContext(DataContext)

    const handleClose = () =>{
        setOpen(false);
        toggleAccount(accountInitialvalues.login);
    }

    const toggleSignUp = () => {
        toggleAccount(accountInitialvalues.signup)
    }

    const onInputChange = (e) =>{
        setSignup({ ...SignUp,[e.target.name]:e.target.value})
    }

    const signUpuser = async () => {
        let res = await authenticateSignUp(SignUp);
        if(!res) return;
        handleClose();
        setAccount(SignUp.firstname)
    }

    return (
    <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
        <Component>
            <Box style={{display:'flex',height:'100%'}}>
                <Image>
                    <Typography variant='h5' style={{marginBottom:'4px'}}>{Account.heading}</Typography>
                    <Typography style={{marignTop:20}}>{Account.subHeading}</Typography>
                </Image>
                {
                    Account.view === 'login'?
                    <Wrapper>
                        <TextField variant='standard' label='Enter Email/Mobile number'/>
                        <TextField variant='standard' label='Enter Password'/>
                        <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                        <LoginBtn>Login</LoginBtn>
                        <Typography style={{textAlign:'center'}}>OR</Typography>
                        <RequestOTP>Request OTP</RequestOTP>
                        <CreateAccount onClick={()=> toggleSignUp()}>New to Flipkart? Create an account</CreateAccount>
                    </Wrapper>
                    :
                    <Wrapper>
                        <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='firstname' label='Enter Firstname'/>
                        <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='lastname' label='Enter Lastname'/>
                        <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='username' label='Enter Username'/>
                        <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='email' label='Enter Email'/>
                        <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='password' label='Enter Password'/>
                        <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='contact' label='Enter Contact'/>
                        <LoginBtn onClick={() => signUpuser()}>Continue</LoginBtn>
                    </Wrapper>
                }
            </Box>
        </Component>
    </Dialog>
  )
}

export default LoginDialog