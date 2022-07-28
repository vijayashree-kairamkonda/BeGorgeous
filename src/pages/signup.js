import {NavLink, useNavigate} from "react-router-dom";
import { useState } from "react";
import { useAuth } from '../contexts/auth-context';
import axios from "axios";

export const SignUp= ()=>{

    const { setIsLoggedIn } = useAuth();
    const [credentials,setCredentials] = useState({email: "", password : "", firstName : "", lastName : ""});
    const navigate = useNavigate();


    const signupHandler =  async (e,email,password,firstName,lastName) => {
        console.log(email,password,firstName,lastName)
        e.preventDefault();

        try{
            const response = await axios.post(`/api/auth/signup`, {
                email,
                password,
                firstName,
                lastName
            })
            console.log(response)
            // if (response.status === 201) {
                localStorage.setItem("token", response.data.encodedToken);
                setIsLoggedIn((login)=> !login)
            // }
            navigate("/")


        }
        catch(error){
            console.log(error.message)
        }
    }


    return(
        <div className="login-container">
            <form className="login-form" onSubmit={(e)=>signupHandler(e,credentials.email,credentials.password,credentials.firstName,credentials.lastName)}>
            <div className="login-heading">
                SIGN UP
            </div>
            <div className="login-sub-heading">
               Fill your details to create an account
            </div>
           <div className="login-input-box">
           <input type="text" placeholder="First name"  onChange={(e)=>setCredentials((a)=>({...a, firstName: e.target.value}))} required/>
           <input type="text" placeholder="Last name"  onChange={(e)=>setCredentials((a)=>({...a, lastName: e.target.value}))} required/>
           <input  type="email" placeholder="enter your email"  onChange={(e)=>setCredentials((a)=>({...a, email: e.target.value}))} required/><br/>
            <input type="password" placeholder="enter password"  onChange={(e)=>setCredentials((a)=>({...a, password: e.target.value}))} required/>
            </div> 
            <div className="login-btn-box">
                <input type="submit" value='SIGNIN' className="btn-login"/>
            </div>

            <div className="login-txt">
                Already have an account!?<NavLink to="/login"><span className="login-txt">Login here!</span></NavLink>
            </div>

            </form>
            

        </div>
    )
}