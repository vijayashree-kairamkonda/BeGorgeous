import { useState } from "react";
import { NavLink,useNavigate,useLocation } from "react-router-dom";
import "../App.css";
import { useAuth } from "../contexts/auth-context";
import axios from "axios";

export const Login= ()=>{

    const {setIsLoggedIn} = useAuth();
    // const [credentials,setCredentials] = useState({email:"",password:""})
    const [credentials,setCredentials] = useState({email: "", password : ""})
    const navigate = useNavigate();
    const location = useLocation()



    const loginHandler = async (e,email,password)=>{   
        e.preventDefault();
        try{console.log(email,password)
            const response = await axios.post(`/api/auth/login`, {
                email,
                password
            })
        
            if (response.status === 200){
                localStorage.setItem("token", response.data.encodedToken);
                setIsLoggedIn((login)=> !login)
            }
            navigate(location?.state?.from.pathname || "/", { replace: true });
        }
        catch(error){
            console.log(error)
        }

    }
    return(
        <div className="login-container">
            <form className="login-form" onSubmit={(e)=>loginHandler(e,credentials.email,credentials.password)}>
            <div className="login-heading">
                LOGIN
            </div>
            <div className="login-sub-heading">
                Enter your details
            </div>
           <div className="login-input-box">
           <input  type="email" placeholder="enter your email"  onChange={(e)=>setCredentials((a)=>({...a, email: e.target.value}))}/><br/>
            <input type="password" placeholder="enter password" onChange={(e)=>setCredentials((a)=>({...a, password: e.target.value}))}/>
            </div> 
            <div className="login-btn-box">
                <input type="submit" value='LOGIN' className="btn-login"/>
            </div>
            <div className="login-btn-box">
                <input type="submit" value='SIGN IN AS GUEST' className="btn-login"  onClick={(e)=> {
                        setCredentials((a)=>({...a,email : "test@gmail.com",password : "testing"}))
                    }}/>
            </div>
            <div className="login-txt">
                Don't have an account!?<NavLink to="/signup"><span className="login-txt">Create here!</span></NavLink>
            </div>

            </form>
            

        </div>
    )
}