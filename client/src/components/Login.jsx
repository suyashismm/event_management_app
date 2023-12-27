import { useState } from "react";
import { Button, FormControl, FormGroup,Input,InputLabel,Typography,styled } from "@mui/material";
import { useContext } from 'react';
import {accountContext} from '../context/DataProvider';
import { useNavigate } from 'react-router-dom';
import { authenticateLogin } from "../services/api";


const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0% auto;
`;
const Blocks = styled(FormControl)`
    margin-top:20px;
`;
const Error = styled(Typography)`
    font-size:15px;
    color:#ff6161;
    line-height:0;
    margin-left:13rem;
    font-weight:600;
`;

const defaultValue = {
    username:'',
    password:''
}

const Login = ()=>{

    const [user,setUser] = useState(defaultValue);
    const {setAccount} = useContext(accountContext);
    const [error,setError] = useState(false);
    const navigate = useNavigate();

    const onValueChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }

    const loginUser = async() => {
        let response = await authenticateLogin(user);
        console.log(response);
        if(response.status === 200){
            navigate('/profile');
            setAccount(response.data.data.name);
        }
        else{
            setError(true);
        }

    }

    return(
    <>
        <Container>
            <Typography variant="h4">Login</Typography>
            <Blocks>
                { error && <Error>Please enter valid username or password.</Error> }
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="username"/>
            </Blocks>
            <Blocks>
                <InputLabel>Password</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="password"/>
            </Blocks>
            <Blocks>
                <Button variant="contained" onClick={()=>loginUser()}>Login</Button>
            </Blocks>
        </Container>
    </>
);
}

export default Login;