import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { SignIn } from "@clerk/clerk-react";
import Logo2 from "@/assets/Logo2.png"

function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const [refreshed, setRefreshed] = useState(false);



    return (
        <div className="login h-screen flex flex-col items-center justify-center">
          <img alt="logo" src={Logo2} className="h-[20px]  w-[160px] mb-[50px]" />
          <SignIn afterSignInUrl={"/signup"}/>
            {/* <h1 className="font-bold text-[40px] mb-[1%]">Login</h1>

            <form action="POST">
              <div className="flex flex-col">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" className="w-[500px] h-[40px] border rounded-lg mb-[5%] pl-[2%] outline-white"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" className="h-[40px]  border rounded-lg mb-[5%] pl-[2%] outline-white" />
                <input type="submit" className="bg-red-800 text-white w-[200px] rounded-md h-[35px] self-center" />
                </div>
            </form>

            <br />
            <p>OR</p>
            <br />
            <div className="flex flex-row w-[200px]">
              <p className="mr-[10%]">New here?</p>
            <Link to="/signup"><p className="underline">Sign Up</p></Link>
            </div> */}

        </div>
    )
}

export default Login