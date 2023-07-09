import jsPDF from "jspdf";
import "jspdf-autotable";
import client from "../api/axios";
import AttendanceComponent from "../components/AttendanceComponent";
import Loading from "../components/Loading";
import { Attendance } from "../dataTypes";
import React from "react";
import { BiSolidDownload } from "react-icons/bi";
import autoTable from "jspdf-autotable";

export default function AttendanceScreen() {
  const [attendances, setAttendances] = React.useState<Attendance[]>([]);
  const [course, setCourse] = React.useState<string>("");
  // const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const jwtToken = JSON.parse(localStorage.getItem("@jwtToken") as string);
    if (!jwtToken) {
      //   router.replace("/login")
    } else {
      const attendance = client.get(`/attendances?course=${course}`);
      setIsLoading(true);
      attendance
        .then((response) => {
          const data = response.data.asks;
          console.log(data);
          setIsLoading(false);
          setAttendances(data);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }, []);

  const handleDownload = () => {
    const pdf = new jsPDF();
    autoTable(pdf, { html: "#table" });
    pdf.save("attendance.pdf");
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="px-6 relative">
      <table className="w-full" id="table">
        <thead className="h-16 border-b border-primary/30">
          <tr className="text-left">
            <th className="w-[60%] sm:w-[45%]">Matricule Number</th>
            <th className="hidden sm:table-cell sm:w-[35%]">Course code</th>
            <th className="hidden md:table-cell md:w-[20%]">Date</th>
          </tr>
        </thead>

        <tbody>
          {attendances.length > 0 ? (
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
            <div>
              <p>
                No attendances to display. Please refresh to see if they are
                more to display
              </p>
            </div>
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
