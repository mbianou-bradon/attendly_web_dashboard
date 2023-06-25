import { Link } from "react-router-dom";

export default function Navbar(){

    return (
        <header className="h-[95vh] w-[12rem] bg-secondary pt-[3.25rem] hidden sm:block fixed">
            {/* Logo of Attendly */}
            <div className="logo mb-[4rem] p-2">
                <img src={""} alt="" />
            </div>

            {/* Navigation Area */}
            <nav>
                <ul className="p-2 [&>*]:block [&>*]:px-2 [&>*]:py-3 [&>*]:mb-2 [&>*:hover]:bg-primary/20 [&>*]:rounded-lg">

                    <Link to={"/"} className={({isActive}) => { isActive? "bg-primary/20": "bg-transparent"}}>
                        Users
                    </Link>

                    <Link to={"/content"} className={router.pathname==="/content"? "bg-primary/20": "bg-transparent"}>
                        Content 
                    </Link>

                    {/* <Link to={"/analytics"} className={router.pathname==="/analytics"? "bg-primary/20": "bg-transparent"}>
                        Analytics
                    </Link>

                    <Link to={"/moderation"} className={router.pathname==="/moderation"? "bg-primary/20": "bg-transparent"}>
                        Moderation
                    </Link>

                    */}

                </ul>
            </nav>
        </header>
    )
}