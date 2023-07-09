import React from "react"
import { Course } from "../dataTypes"
import client from "../api/axios";


export default function Home(){
    const [courses, setCourses] = React.useState<Course[]>([]);
    const [course, setCourse] = React.useState<Course>({
        _id : "",
        courseTitle : "",
        courseCode : "",
        openForAttendance : false
    })
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

    // Get list of courses from local storage in teacher's object
    const handleGetSingleUser = () => {
        client.get(`/courses/${courses}`)
        .then((response)=>{
            const data = response.data
            setCourse(data);
        }).catch((error)=>{
            console.log("Fetching Single Course:", error);
        })
    }

    const handleOpenAttendance = () => {
        client.patch(`/course/${courses}`, {
            openForAttendance : !course.openForAttendance
        })
    }

    const Modal = () => {
        return (
          <div className="w-full h-full absolute top-0 left-0 bg-black opacity-[0.9] z-30">
            <div className="w-full h-full flex items-center justify-center bg-black">
              <div className="w-[65%] bg-white p-10 rounded-md">
                <h1 className="text-xl font-semibold text-center mb-4">
                  Course Status Confirmation
                </h1>
                <p>
                  Do you want to Confirm your request?
                </p>
                <p className="text-xs my-2">
                  This course is currently{" "}
                  <span className="underline">{course.openForAttendance? "Open" : "Close"}</span> for attendance.
                </p>
                <div className="flex justify-end  gap-5 [&>*]:w-fit [&>*]:my-5 [&>*]:px-6 [&>*]:py-2  [&>*]:font-semibold [&>*]:rounded-md [&>*]:cursor-pointer">
                  <div
                    className="border-black border font-semibold rounded-md cursor-pointer"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <h2>CANCEL</h2>
                  </div>
                  <div className=" bg-orange-600 text-white uppercase" onClick={handleOpenAttendance}>
                    <h2>{course.openForAttendance}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    };
    
    return (
        <div className="px-5">
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols- gap-y-7 [&>*]:w-[25rem] [&>*]:h-fit [&>*]:py-3 [&>*]:rounded-xl [&>*]:border-2 [&>*]:border-primary/20 [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:justify-center [&>*>h2]:text-xl [&>*>h2]:font-semibold [&>*>h2]:pb-2 [&>*]:">
                    <div>
                        <h2>Course Title: CEF347</h2>
                        <div className="[&>*]:px-6 [&>*]:py-2 [&>*]:rounded-md [&>*:hover]:cursor-pointer flex justify-around gap-4 text-neutral_white">
                            <button className="bg-yellow-400 hover:bg-yellow-500">View Attendance</button>
                            <button className="bg-green-500 hover:bg-green-600">OPEN</button>
                        </div>
                    </div>
                    <div>
                        <h2>Course Title: CEF350</h2>
                        <div className="[&>*]:px-6 [&>*]:py-2 [&>*]:rounded-md [&>*:hover]:cursor-pointer flex justify-around gap-4 text-neutral_white">
                            <button className="bg-yellow-400 hover:bg-yellow-500">View Attendance</button>
                            <button className="bg-red-500 hover:bg-red-600">CLOSED</button>
                        </div>
                    </div>
                    <div>
                        <h2>Course Title: CEF445</h2>
                        <div className="[&>*]:px-6 [&>*]:py-2 [&>*]:rounded-md [&>*:hover]:cursor-pointer flex justify-around gap-4 text-neutral_white">
                            <button className="bg-yellow-400 hover:bg-yellow-500">View Attendance</button>
                            <button className="bg-green-500 hover:bg-green-600">OPEN</button>
                        </div>
                    </div>
                  
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 mt-8">
                    {/* <div>
                        <h2 className="text-3xl font-bold mb-5">Time Spent</h2>
                    </div> */}
                    {/* <div>
                        <h2 className="text-3xl font-bold mb-5">Frequency</h2>
                        <div className="grid grid-cols-2 gap-y-5 gap-x-5 [&>*>div]:w-full [&>*>div]:h-[4.7rem] [&>*>div]:py-2 [&>*>div]:rounded-3xl [&>*>div]:bg-primary/20 [&>*>div]:flex [&>*>div]:flex-col [&>*>div]:items-center [&>*>div]:justify-center [&>*>div]:mb-1 [&>*>div>h2]:text-lg [&>*>div>h2]:font-semibold [&>*>div>p]:text-sm [&>*>p]:text-[0.35rem] [&>*>p]:w-[85%] [&>*>p]:mx-auto">
                            <div>
                                <div>
                                    <h2>Active user rate</h2>
                                    <p>70%</p>
                                </div>
                                <p>This measures the percentage of total users who have used the app with a certain time period</p>
                            </div>

                            <div>
                                <div>
                                    <h2>Active engagement</h2>
                                    <p>80%</p>
                                </div>
                                <p>This measures how often users using the app, such as the number of times they have logged in or the frequency of their interactions with other users</p>
                            </div>

                            <div>
                                <div>
                                    <h2>User session length</h2>
                                    <p>65%</p>
                                </div>
                                <p>This measures how long users are spending on the app during each session</p>
                            </div>

                            <div>
                                <div>
                                    <h2>User retention rate</h2>
                                    <p>80%</p>
                                </div>
                                <p>This measures the percentage of users who continue to use the app oveer time, such as the percentage of users who return to the app after one week, two weeks, or one month.</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}