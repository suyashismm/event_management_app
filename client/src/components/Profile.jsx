import { useContext } from 'react';
import {accountContext} from '../context/DataProvider';

const Profile = () => {

    const {account} = useContext(accountContext);

    return(
        <>
            <div style={{fontSize:"25px",marginTop:"10rem",textAlign:"center"}}>Welcome to easy and hassel free managing of your events , {account}. </div>
        </>
    );
}

export default Profile;