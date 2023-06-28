import { NavLink } from "react-router-dom";
import LogoViolette from "../assets/images/Attendly_logo_violette.png"

export default function NavBar(){

    return (
        <header className="h-[100vh] w-[12rem] bg-neutral_white pt-[3.25rem] hidden sm:block fixed border-r-2 border-primary">
            {/* Logo of Attendly */}
            <div className="logo mb-[4rem] p-2">
                <img src={LogoViolette} alt="" />
            </div>

            {/* Navigation Area */}
            <nav>
                <ul className="p-2 [&>*]:block [&>*]:px-2 [&>*]:py-3 [&>*]:mb-2 [&>*:hover]:bg-primary/40 [&>*]:rounded-lg">

                    <NavLink to={"/"} className={({isActive}) => ( isActive? "bg-primary/40": "bg-transparent")}>
                        Overview
                    </NavLink>

                    <NavLink to={"/students"} className={({isActive}) => ( isActive? "bg-primary/40": "bg-transparent")}>
                        Students 
                    </NavLink>

                    <NavLink to={"/attendances"} className={({isActive}) => ( isActive? "bg-primary/40": "bg-transparent")}>
                        Attendance
                    </NavLink>

                    <NavLink to={"/profile"} className={({isActive}) => ( isActive? "bg-primary/40": "bg-transparent")}>
                        Profile
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}