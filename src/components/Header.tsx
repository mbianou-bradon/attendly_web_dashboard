import { AiOutlineSearch, AiOutlineDown, AiOutlineMenu } from "react-icons/ai"
import { IoMdNotificationsOutline } from "react-icons/io"
import { RxPerson } from "react-icons/rx"
import { BsSearch } from "react-icons/bs"
import React from "react"
import client from "../api/axios"
import { Student } from "../dataTypes"
import logoViolette from "../assets/images/Attendly_logo_violette.png";
import { NavLink, useNavigate } from "react-router-dom"

export default function Header(){

    const [students, setStudents] = React.useState<Student[]>([])
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
    const [viewMoreIsOpen, setViewMoreIsOpen] = React.useState<boolean>(false);

    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("@jwtToken") as string);
    const userFirstName = user? user.teacherName.split(' ')[0].toLowerCase() : "Admin";
    const courses = user?.coursesTaught
  
    React.useEffect(() =>{
        const users = client.get("/students")
        // const courses = client.get("/courses?faculty=&dept=&level=&isOpen=")

        users
        .then((response) => {
            const data = response.data.student
            // console.log("users",data);
            setStudents(data)
        })
        .catch(err => console.error(err))
        
    },[])

    const numOfUsers = students?.length || 0
    const numOfCourses = courses?.length || 0


    const handleMobileMenu = () => {
        setIsMenuOpen((prevState)=> !prevState);
    }
    const handleViewMore = () => {
        setViewMoreIsOpen((prevState)=> !prevState);
    }

    const handleLogOut = () => {
        localStorage.removeItem("@jwtToken")
        navigate("/login");
    }







    return (
        <div className="bg-white sm:ml-[11.6rem] h-fit py-6 sm:pr-6">
            <div className="sm:hidden mb-5">
                <div className="flex items-center justify-between px-4">
                    <div className="">
                        <img src={logoViolette} alt="Logo" className="w-[5rem]"/>
                    </div>
                    <div className="text-2xl" onClick={handleMobileMenu}>
                        <AiOutlineMenu />
                    </div>
                </div>
                { isMenuOpen && 
                <div className="shadow-inner" >
                    <nav>
                        <ul className="p-2 [&>*]:block [&>*]:px-2 [&>*]:py-3 [&>*]:mb-2 [&>Link:hover]:bg-primary/20 [&>*]:rounded-lg">

                            <NavLink to={"/"} className={({isActive}) => ( isActive? "bg-primary/20": "bg-transparent")} onClick={handleMobileMenu}>
                                Overview
                            </NavLink>

                            <NavLink to={"/content"} className={({isActive}) => ( isActive? "bg-primary/20": "bg-transparent")} onClick={handleMobileMenu}>
                                Students 
                            </NavLink>

                            <NavLink to={"/analytics"} className={({isActive}) => ( isActive? "bg-primary/20": "bg-transparent")}>
                                Attendance
                            </NavLink>

                            <NavLink to={"/moderation"} className={({isActive}) => ( isActive? "bg-primary/20": "bg-transparent")}>
                                Profile
                            </NavLink>
                           
                            <div className=" justify-between">
                                <div className="flex">
                                    <p className="hover:underline cursor-pointer">{userFirstName? userFirstName : "Admin"}</p>
                                    <div className="place-self-center">
                                        <RxPerson />
                                    </div>
                                </div>
                                <div className="w-fit px-4 py-2 bg-red-600 text-white rounded-md cursor-pointer" onClick={handleLogOut}> 
                                    <p>Logout</p>
                                </div>
                            </div>
                        </ul>
                    </nav>
                </div>
            }
            </div>

            <div className="flex justify-between items-center mb-[1.5rem] flex-wrap-reverse md:flex-nowrap">
                <div className="w-3/4 mx-auto">
                    <div className="flex justify-around [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*>h2]:text-4xl [&>*>h2]:font-semibold [&>*>p]:text-sm">
                        <div>
                            <h2>{numOfUsers}</h2>
                            <p>Students</p>
                        </div>
                        <div>
                            <h2>{numOfCourses}</h2>
                            <p>Courses</p>
                        </div>
                    </div>
                </div>
                <div>

         
                    <div className="flex justify-between items-center gap-10 flex-wrap md:flex-nowrap">
                        <div className="flex gap-10 [&>*]:cursor-pointer flex-wrap md:flex-nowrap">
                            <div className="text-xl hidden md:block">
                                <AiOutlineSearch/>
                            </div>
                            <div className="text-xl hidden md:block">
                                <IoMdNotificationsOutline />
                            </div>
                            <div className="md:flex gap-2 hidden">
                                <div className="text-xl">
                                    <RxPerson />
                                </div>
                                <div className="relative" onClick={handleViewMore}>
                                    <div className="flex">
                                        <p className="hover:underline cursor-pointer">{userFirstName? userFirstName : "Admin"}</p>
                                        <div className="place-self-center">
                                            <AiOutlineDown className="text-xs"/>
                                        </div>
                                    </div>
                                    { viewMoreIsOpen &&
                                    <div className="absolute -left-14 bg-white shadow-sm shadow-primary w-32 h-14 flex items-center justify-center rounded-md">
                                        <div className="px-4 py-2 bg-red-600 text-white rounded-md cursor-pointer" onClick={handleLogOut}> 
                                            <p>Logout</p>
                                        </div>
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-4 sm:ml-10 hidden md:block">
                <div className="w-full h-14 px-4 py-1 rounded-md bg-neutral_white border shadow-inner shadow-primary/40 text-primary flex items-center gap-2">
                    <div className="text-xl cursor-pointer">
                        <BsSearch />
                    </div>
                    <input type="text" name="search" id="search" className="w-full bg-transparent focus:border-0 focus:ring-0 focus:outline-none" placeholder="Search"/>
                </div>
            </div>
        </div>
    )
}