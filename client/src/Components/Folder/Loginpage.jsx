import React from 'react'
import Logo from '../../static/LoginLogo.png'
// import LoginBackground from '../../static/LoginBackground.jpg'
import {Box,TextField,Button,Typography,styled} from '@mui/material'
import { useState ,useContext} from 'react'
import {API} from '../../services/api.js'
import  { DataContext } from '../../constants/DataProvider';
import { useNavigate } from 'react-router-dom';



const Component = styled(Box) `
 width:25rem;
 height:31rem;
 margin:3.125rem auto 3.125rem auto;
 box-shadow: 0px 0.0625rem 0.625rem rgba(0, 0, 0, 0.6);
 background:transparent;
 @media(max-width:770px){
  height:33rem;
 }
`
const Image = styled('img')({
  width:200,
  display:'flex',
  margin:'auto',
  padding: '1.25rem 0 0'
});

const Details = styled(Box)`
padding: 1.25rem 3.125rem;
display:flex;
flex:1;
flex-direction:column;
& > div ,& > button, & > P {
  margin-top : 1rem;
}
`;

const Loginbutton =styled(Button)`
text-transform: none;
background: #42b72a;
border-color: #42b72a
color: white;
`
const Signupbutton =styled(Button)`
text-transform:none;
`
const signupinitial ={
  name:'',
  email:'',
  password:''
}

const logininitaial={
  email:'',
  password:''
}

const Error = styled(Typography)`
font-size: 0.625rem;
color: #ff6161;
margin-top:0.625rem;
font-weight: 600
`

export default function Loginpage({isUserLogin}) {

  const [account,toggleAccount] = useState('login');
  const [signup,setinputsignup] = useState(signupinitial);
  const [error,seterror] = useState('');
  const [login,setinputlogin] =useState(logininitaial);

  const {setAccount} = useContext(DataContext);
  const navigate= useNavigate();


  const togglefunc = ()=>{
    account==='login'
    ? toggleAccount('signup') : toggleAccount('login');
  }

  const oninputSignup = (e)=>{
    setinputsignup({...signup,[e.target.name]:e.target.value});
  }

  const onValuechange = (e) =>{
    setinputlogin({...login,[e.target.name]:e.target.value});
  }

  const signupUser = async () =>{
    let response = await API.userSignup(signup);
    if(response.isSuccess){
      setinputsignup(signupinitial);
      toggleAccount('login');
    }
    else{
      seterror('Something went wrong! Please try again later');
    }
  }

  const loginUser = async () => {
    let response = await API.userLogin(login);
    if(response.isSuccess){
      seterror('');

      sessionStorage.setItem('accessToken',`Bearer ${response.data.accessToken}`);
      sessionStorage.setItem('refreshToken',`Bearer ${response.data.refreshToken}`);

      setAccount({ name: response.data.name, email: response.data.email});

      isUserLogin(true);

      navigate('/');
    }
    else{
      seterror('Something went wrong! Please try again later');
    }
  }

  

  return (
      <Component className="Component">
        <Image src={Logo} alt="Logo" />
        {
         account==='login' ?
            <Details>
                <TextField label="Enter Email"  onChange={(e)=> onValuechange(e)} name="email" variant="standard" />
                <TextField label="Enter Password" onChange={(e)=> onValuechange(e)} name="password" variant="standard" />

                {error && <Error>{error}</Error>}
                
                <Loginbutton variant="contained" onClick={()=>loginUser()}>Login</Loginbutton>
                <Typography style={{textAlign:'center' ,color:'grey'}}>OR</Typography>
                <Signupbutton variant="outlined" onClick={()=>togglefunc()}>Don't have an account? Sign Up</Signupbutton>
            </Details>
         :
            <Details>
                <TextField label="Enter Username" onChange={(e)=>oninputSignup(e)} name='name' variant="standard"/>
                <TextField label="Enter Email"  onChange={(e)=>oninputSignup(e)} name='email'variant="standard"/>
                <TextField label="Enter Password" onChange={(e)=>oninputSignup(e)} name='password'variant="standard" />

                {error && <Error>{error}</Error>}
                <Loginbutton variant="contained" onClick={()=>signupUser()}>Signup</Loginbutton>
                <Typography style={{textAlign:'center' ,color:'grey'}}>OR</Typography>
                <Signupbutton variant="outlined" onClick={()=>togglefunc()} >Already have an account? Login</Signupbutton>
            </Details>
        }
      </Component>
  )
}
