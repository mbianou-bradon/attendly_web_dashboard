import { BsSquare } from "react-icons/bs";
import React from "react";
import client from "../api/axios";
import UserComponent from "../components/UserComponent";
import { Student } from "../dataTypes";
import Loading from "../components/Loading";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { redirect } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = React.useState<Student[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(5);

  // const navigate = useNavigate();

  React.useEffect(() => {
    const jwtToken = JSON.parse(localStorage.getItem("@jwtToken") as string);
    if (!jwtToken) {
        redirect("/login")
    } else {
      const users = client.get(`/students`);
      users
        .then((response) => {
          const data = response.data.student;
          console.log(data);
          setUsers(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
        });
    }
  }, [limit, page]);

  let prevPageBtnStyles = "cursor-pointer hover:bg-primary flex";
  let nextPageBtnStyles = "cursor-pointer hover:bg-primary flex";
  if (page === 1)
    prevPageBtnStyles = "cursor-not-allowed hover:bg-primary/20 hidden";
  if (users?.length < limit)
    nextPageBtnStyles = "cursor-not-allowed hover:bg-primary/20 hidden";

  const handlePrevPage = () => {
    if (page === 1) {
      alert("You can't go back, you are in the first page already!");
    } else {
      setPage((prevPage: number) => prevPage - 1);
    }
  };
  const handleNextPage = () => {
    if (users?.length < limit) {
      alert("You have reached the end. You can't go to the Next page");
    } else {
      setPage((prevPage: number) => prevPage + 1);
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div className=" px-6">
        <table className="w-full">
          <thead className="h-16 border-b border-[#EEEEEE]">
            <tr className="text-left">
              <th className="w-[5%] hidden md:table-cell">
                <BsSquare />
              </th>
              <th className="w-[50%] sm:w-[25%]">Student Name</th>
              <th className="w-[20%] hidden md:table-cell">Matricule Number</th>
              <th className="w-[15%] hidden md:table-cell">Phone Number</th>
              <th className="w-[20%] hidden md:table-cell">Email</th>
              <th className="w-[10%] hidden sm:table-cell">Department</th>
              {/* <th className="w-[15%]"></th> */}
            </tr>
          </thead>

          <tbody className="[&>*]:border-b [&>*]:border-[#EEEEEE]">
            {users?.length > 0 ? (
              users.map((user) => {
                return (
                  <UserComponent
                    key={user._id}
                    _id={user._id}
                    matriculeNumber={user.matriculeNumber}
                    studentName={user.studentName}
                    email={user.email}
                    phoneNumber={user.phoneNumber}
                    faculty={user.faculty}
                    department={user.department}
                  />
                );
              })
            ) : (
              <>
                <td></td>
                <div>
                  <p>No users to display</p>
                </div>
              </>
            )}
          </tbody>
        </table>

        <div className="flex justify-end">
          <div className="w-fit border rounded-md flex justify-around gap-2 border-primary text-xs sm:text-sm [&>*]:w-10 [&>*]:sm:w-20 [&>*]:py-2 [&>*]:sm:py-4 [&>*]:justify-center [&>*:hover]:text-white my-5">
            <div onClick={handlePrevPage} className={prevPageBtnStyles}>
              <p className="text-center">
                <FaLessThan />
              </p>
            </div>
            <div onClick={handleNextPage} className={nextPageBtnStyles}>
              <p>
                <FaGreaterThan />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
