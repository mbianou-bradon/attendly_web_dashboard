import logoWhite from "../assets/images/Attendly_logo_white.png"
import { MdEmail, MdLock } from "react-icons/md"
import { BiSolidSchool } from "react-icons/bi"
import { IoIosEyeOff, IoIosEye } from "react-icons/io"
import React from "react"
import { useNavigate } from "react-router-dom"
import client from "../api/axios"


export default function Login() {
    /**Stat management */
    const [userMatricule, setUserMatricule] = React.useState<string>("");
    const [userPassword, setUserPassword] = React.useState<string>("");
    const [isPasswordVisible, setIsPasswordVisible] = React.useState<boolean>(false)
    const [error, setError] = React.useState<boolean>(false);
    const [errorMessage, setErrorMessage] = React.useState<any>("An error occured");

    /**utility functions */
    const navigate = useNavigate()

    React.useEffect(()=>{
        const jwtToken = JSON.parse(localStorage.getItem("@jwtToken") as string);
        if(jwtToken){
            navigate("/");
        }
    },[]);

    let type = "password";
    if(isPasswordVisible){
        type="text"
    }
    const handleViewPassword = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }


    const handleSignInUser = async (event: { preventDefault: () => void } ) => {
        event.preventDefault();

        client.post("/auth/login", {
            userID : userMatricule,
            userPassword
        }).then((response)=>{
            const user = response.data.user;
            localStorage.setItem("@jwtToken", JSON.stringify(user));
            console.log("user sign in success");
            setUserMatricule("");
            setUserPassword("");
            setError(false);
            navigate("/");
        }).catch((error)=>{
            setError(true);
            setErrorMessage(`${error.message}`);
            setUserPassword("");
            console.log(error);
        })
      

    }

        

    return(
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-primary to-purple-800">
            <div className="flex items-center justify-center h-full w-full">
                <div className="border-neutral_white flex flex-col">
                    <div className="mb-10 flex justify-center w-[8rem] mx-auto">
                        <img src={logoWhite} alt={"Attendly Logo"} />
                    </div>
                    {error && <div className="py-4 bg-red-600 rounded-md text-white font-bold text-center text-sm">{errorMessage}</div>}
                    <form onSubmit={handleSignInUser}>
                        <div className="py-2 flex flex-col gap-10 text-white">
                            <div className="flex items-center gap-4 py-2 border border-neutral_white px-4 h-14 rounded-md">
                                <div>
                                    <BiSolidSchool className="text-xl"/>
                                </div>
                                <input type="text" placeholder="Matriculation Number" value={userMatricule} onChange={(matricule)=>setUserMatricule(matricule.target.value)} className="h-full pl-2 focus:outline-none focus:ring-0 rounded border border-neutral_white bg-transparent text-sm" required/>
                            </div>

                            <div className="flex items-center gap-4 py-2 border border-neutral_white px-4 h-14 rounded-md">
                                <div>
                                    <MdLock className="text-xl"/>
                                </div>
                                <input type={type} placeholder="Password" value={userPassword} onChange={(password)=>setUserPassword(password.target.value)} className="h-full pl-2 focus:outline-none focus:ring-0 rounded border border-neutral_white bg-transparent text-sm" required/>
                                <div className="text-xl cursor-pointer" onClick={handleViewPassword}>
                                    {!isPasswordVisible? <IoIosEye/> : <IoIosEyeOff/>}
                                </div>
                            </div>
                            
                            <button type="submit" className="border-secondary text-white bg-secondary py-2 rounded-md hover:bg-secondary/90 select-none active:scale-95">LOGIN</button>
                        </div>
                        
                    </form>
                </div>
                
            </div>
        </div>
    )
}