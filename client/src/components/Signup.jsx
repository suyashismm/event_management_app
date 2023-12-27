import { useState } from "react";
import { Button, FormControl, FormGroup,Input,InputLabel,Typography,styled } from "@mui/material";
import { authenticateSignup } from "../services/api";
import { useContext } from 'react';
import {accountContext} from '../context/DataProvider';
import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0% auto;
`;
const Blocks = styled(FormControl)`
    margin-top:20px;
`;

const initialValues = {
    name:'',
    username:'',
    email:'',
    phone:'',
    password:''
}

const Signup = ()=>{

    const [ signup, setSignup ] = useState(initialValues);
    const {setAccount} = useContext(accountContext);

    const onValueChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }

    const navigate = useNavigate();

    const signupUser = async() => {
        let response = await authenticateSignup(signup);
        console.log(response);
        if(!response) return;
        setAccount(signup.username);
        navigate('/profile');
    }
    


    return(
    <>
        <Container>
            <Typography variant="h4">Sign Up</Typography>
            <Blocks>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name"/>
            </Blocks>
            <Blocks>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="username"/>
            </Blocks>
            <Blocks>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email"/>
            </Blocks>
            <Blocks>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phone"/>
            </Blocks>
            <Blocks>
                <InputLabel>Password</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="password"/>
            </Blocks>
            <Blocks>
                <Button variant="contained" onClick={()=>signupUser()}>Sign Up</Button>
            </Blocks>
        </Container>
    </>
);
}

export default Signup;