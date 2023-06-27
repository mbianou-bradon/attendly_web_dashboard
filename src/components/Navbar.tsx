import { NavLink } from "react-router-dom";
import LogoViolette from "../assets/images/Attendly_logo_violette.png"

export default function NavBar(){

    return (
        <header className="h-[95vh] w-[12rem] bg-secondary pt-[3.25rem] hidden sm:block fixed">
            {/* Logo of Attendly */}
            <div className="logo mb-[4rem] p-2">
                <img src={LogoViolette} alt="" />
            </div>

            {/* Navigation Area */}
            <nav>
                <ul className="p-2 [&>*]:block [&>*]:px-2 [&>*]:py-3 [&>*]:mb-2 [&>*:hover]:bg-primary/20 [&>*]:rounded-lg">

                    <NavLink to={"/"} className={({isActive}) => ( isActive? "bg-primary/20": "bg-transparent")}>
                        Users
                    </NavLink>

                    <NavLink to={"/content"} className={({isActive}) => ( isActive? "bg-primary/20": "bg-transparent")}>
                        Content 
                    </NavLink>

                    <NavLink to={"/analytics"} className={({isActive}) => ( isActive? "bg-primary/20": "bg-transparent")}>
                        Analytics
                    </NavLink>

                    <NavLink to={"/moderation"} className={({isActive}) => ( isActive? "bg-primary/20": "bg-transparent")}>
                        Moderation
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}