import logoWhite from "../assets/images/Attendly_logo_white.png"
import { MdEmail, MdLock } from "react-icons/md"
import { IoIosEyeOff, IoIosEye } from "react-icons/io"
import React from "react"


export default function Login() {
    const [userMatricule, setUserMatricule] = React.useState<string>("");
    const [userPassword, setUserPassword] = React.useState<string>("");
    const [isPasswordVisible, setIsPasswordVisible] = React.useState<boolean>(false)
    const [error, setError] = React.useState<boolean>(false);
    const [errorMessage, setErrorMessage] = React.useState<any>("An error occured");


    React.useEffect(()=>{
        const jwtToken = JSON.parse(localStorage.getItem("@jwtToken") as string);
        if(jwtToken){}
            // router.push("/");
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

        try {
            // const user = await signInWithEmailAndPassword(
            //     auth, userEmail, userPassword
            // )
            // console.log("user sign in success");
            // setUserEmail("");
            // setUserPassword("");
            // setError(false);
            // const token = await user.user.getIdToken();
            // localStorage.setItem("@jwtToken", JSON.stringify(token));
            
            // router.replace("/");

        } catch (error) {
            setError(true);
            setErrorMessage(`${error}`);
            console.log(error);
        }
      

    }

        

    return(
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-primary to-purple-800">
            <div className="flex items-center justify-center h-full w-full">
                <div className="border-primary flex flex-col">
                    <div className="mb-10 flex justify-center w-[8rem] mx-auto">
                        <img src={logoWhite} alt={"Attendly Logo"} />
                    </div>
                    {error && <div className="py-4 bg-red-600 rounded-md text-white font-bold text-center text-sm">{errorMessage}</div>}
                    <form onSubmit={handleSignInUser}>
                        <div className="py-2 flex flex-col gap-10 text-white">
                            <div className="flex items-center gap-4 py-2 border border-slate-800 px-4 h-14 rounded-md">
                                <div>
                                    <MdEmail className="text-xl"/>
                                </div>
                                <input type="text" placeholder="Matricule Number" value={userMatricule} onChange={(matricule)=>setUserMatricule(matricule.target.value)} className="h-full pl-2 focus:outline-none focus:ring-0 rounded border border-slate-800 bg-transparent" required/>
                            </div>

                            <div className="flex items-center gap-4 py-2 border border-slate-800 px-4 h-14 rounded-md">
                                <div>
                                    <MdLock className="text-xl"/>
                                </div>
                                <input type={type} placeholder="Password" value={userPassword} onChange={(password)=>setUserPassword(password.target.value)} className="h-full pl-2 focus:outline-none focus:ring-0 rounded border border-slate-800 bg-transparent" required/>
                                <div className="text-xl cursor-pointer" onClick={handleViewPassword}>
                                    {isPasswordVisible? <IoIosEye/> : <IoIosEyeOff/>}
                                </div>
                            </div>
                            
                            <button type="submit" className="border-secondary text-white bg-secondary py-2 rounded-md hover:bg-secondary/90 select-none">LOGIN</button>
                        </div>
                        
                    </form>
                </div>
                
            </div>
        </div>
    )
}