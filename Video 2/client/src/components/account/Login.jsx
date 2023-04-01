import {useState} from 'react';

import {Box, TextField,Button,styled, Typography} from '@mui/material';
// import { signupUser } from '../../../../server/controller/user-controller.js';
import {API} from '../../service/api.js';

const Component= styled(Box)`
width:400px;
margin:auto;
margin-top:80px;
// height:500px;
box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
// border-radius:50px;
// border: 1px solid black;
`;
const Error = styled(Typography)
`
    font-size: 20px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;

`
const Image = styled('img')({
    width: 100, 
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
padding: 25px 35px;
display:flex;
flex-direction: column;
& > div, & > button, & > p{
    margin-top:20px;
}
`;

const LoginButton = styled(Button)
`
background:#FB641B;
color:#fff;
height:48px;
font-size:18px;
// border-radius:6px;
// text-transform:none;

`;

const SignUpButton = styled(Button)`
background:#fff;
color:#2874f0;
height:48px;
font-size:18px;
border-radius:6px;
// text-transform:none;
// font-weight:bold;

// top right bottom left
box-shadow: 1px 2px 5px 0 rgb(0 0 0/ 0.2);
`

const Type =styled(Typography)`
text-align:center;
font-size: 16px;
color:#878787;
`;

const signupInitialValues = {
    name: '',
    username: '',
    password: ''
}

const Login = () => {
    
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    // const [signup, setSignup]=useState();
    const [signup, setSignup]=useState(signupInitialValues);
    const [error, showError] = useState('');
    const [account,toggleAccount] = useState('login');

   

    const onInputChange = (e) => {
        // key:value taken from the signup Page.
        setSignup({...signup,[e.target.name]:e.target.value});
    }

    
    // const toggleLogin = () => {
    //     toggleAccount('login');
    //     // account === 'signup'? toggleAccount('login'):toggleAccount('signup');
    // }

    const toggleSignup = () => {
        // toggleAccount('signup');
        account === 'signup' ? toggleAccount('login') :toggleAccount('signup');
    }

    const signupUser = async () => {
      let response = await API.userSignup(signup);
      if(response.isSuccess)
      {
          showError(' ');
        setSignup(signupInitialValues);
        // toogleAccount('login');
      }
      else
      {
        showError('Something went wrong\n Please try again later.\n');
      }
    }
  
    return (
       <Component>
        <Box>
        <Image src={imageURL} alt="login"/>

        {
            account === 'login' ?
            // Login Page
                <Wrapper>
                <TextField id="standard-basic" variant="standard" label="Enter Username"></TextField> 
                <TextField id="standard-basic" variant="standard" label="Enter Password"/> 

                {error && <Error>{error}</Error>}

                <LoginButton variant="contained" >Login</LoginButton> 
                <Type >OR</Type>
                <SignUpButton variant="text" onClick={() => toggleSignup()} >Create an Account</SignUpButton>
                </Wrapper>
            :
            // Signup Page
                <Wrapper>
                <TextField id="standard-basic" variant="standard" name= 'name' label="Enter Name" onChange= {(e) => onInputChange(e)}

      ></TextField> 
                <TextField id="standard-basic" variant="standard" name="username" label="Enter Username" onChange= {(e) => onInputChange(e)}  ></TextField> 
                <TextField id="standard-basic" variant="standard" name="password" label="Enter Password" onChange= {(e) => onInputChange(e)} /> 

                {error && <Error>{error}</Error>}

                <SignUpButton variant="text" onClick= {() => signupUser()}>Sign Up</SignUpButton>
                <Type >OR</Type>
                <LoginButton variant="contained" onClick={ () => toggleSignup()} >Already Have An Account</LoginButton> 
                </Wrapper>
        }

        </Box>  
       </Component>
    )
}
export default Login;