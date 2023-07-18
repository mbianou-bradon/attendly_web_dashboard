import jsPDF from "jspdf";
import "jspdf-autotable";
import client from "../api/axios";
import AttendanceComponent from "../components/AttendanceComponent";
import Loading from "../components/Loading";
import { Attendance, Course } from "../dataTypes";
import React from "react";
import { BiSolidDownload } from "react-icons/bi";
import autoTable from "jspdf-autotable";
import { redirect } from "react-router-dom";

export default function AttendanceScreen() {
  const user = JSON.parse(localStorage.getItem("@jwtToken") as string);
  const courses : Course[] = user.coursesTaught
  const firstOnList : string = courses[0].courseCode
  const [attendances, setAttendances] = React.useState<Attendance[]>([]);
  const [course, setCourse] = React.useState<string>(firstOnList);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  /**Formatted date of today */
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {month: "long", day: "numeric"}).replace(/ /g, '_')
  
  React.useEffect(() => {
    const jwtToken = JSON.parse(localStorage.getItem("@jwtToken") as string);
    if (!jwtToken) {
        redirect("/login");
    } else {
      const attendance = client.get(`/attendances?course=${course}`);
      setIsLoading(true);
      attendance
        .then((response) => {
          const data = response.data.attendance;
          console.log(data);
          setIsLoading(false);
          setAttendances(data);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }, [course]);

  const handleDownload = () => {
    const pdf = new jsPDF();
    autoTable(pdf, { html: "#table" });
    pdf.save(`${course}${formattedDate}.pdf`);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="px-6 relative">
      <header>
        <div className="flex items-center justify-between flex-wrap gap-y-5">
            <div className="border rounded-full w-fit flex px-2 sm:px-4 py-1 text-sm sm:text-[1rem]">
              <label htmlFor="courseCode">Course Code :</label>
              <select name="courseCode" id="courseCode" onChange={(value)=>setCourse(value.target.value)} className="focus:outline-0 bg-transparent text-sm text-secondary min-w-0">
                {
                  courses.map((course, index)=>{
                    return (
                      <option key={index} value={`${course.courseCode}`}>{course.courseCode}</option>
                    )
                  })
                }
              </select>
            </div>
        </div>
      </header>
      <table className="w-full" id="table">
        <thead className="h-16 border-b border-primary/30">
          <tr className="text-left">
            <th className="w-[60%] sm:w-[45%]">Matricule Number</th>
            <th className="hidden sm:table-cell sm:w-[35%]">Course code</th>
            <th className="hidden md:table-cell md:w-[20%]">Date</th>
          </tr>
        </thead>

        <tbody>
          {attendances?.length > 0 ? (
            attendances.map((attendance, index) => {
              return (
                <AttendanceComponent
                  key={index}
                  _id={attendance._id}
                  studentMatriculeNumber={attendance.studentMatriculeNumber}
                  courseCode={attendance.courseCode}
                  dateSigned={attendance.dateSigned}
                />
              );
            })
          ) : (
            <tr>
              <td>
                <p>
                  No attendances to display. Please refresh to see if they are
                  more to display
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="flex justify-end">
        <div
          onClick={handleDownload}
          className="border-2 rounded-full flex border-primary text-3xl sm:text-xl w-10 sm:w-14 h-10 sm:h-14 py-2 sm:py-4 justify-center items-center hover:text-white hover:bg-primary cursor-pointer active:scale-95 my-5 fixed bottom-0"
        >
          <p className="text-center">
            <BiSolidDownload />
          </p>
        </div>
      </div>
    </div>
  );
}
