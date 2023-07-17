import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsSquare } from "react-icons/bs";
import { HiOutlineBan } from "react-icons/hi";
import Loading from "./Loading";
import client from "../api/axios";
import { Student } from "../dataTypes";


export default function UserComponent( { _id, matriculeNumber, studentName, email, phoneNumber, department, faculty} : Student) {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const id = _id;

  // const handleStrikeUser = () => {
  //   setIsLoading(true);

  //   const strikeUser = client.patch(`/users/${id}`, {
  //     strikes: strike + 1,
  //   });
  //   strikeUser
  //     .then((response) => {
  //       setIsLoading(false);
  //       setIsModalOpen(false);
  //     })
  //     .catch((err) => console.log(err));
  // };


  const StrikeModal = () => {
    return (
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-[0.9] z-30">
        <div className="w-full h-full flex items-center justify-center bg-black backdrop-blur-2xl">
          <div className="w-[50%] bg-white p-10 rounded-md ">
            <h1 className="text-xl font-semibold text-center mb-4">
              Strike Confirmation
            </h1>
            <p>
              You are about to strike{" "}
              <span className="text-primary">{studentName}</span> due to
              violation of one of the terms and condition. Press CONFIRM to
              confirm
            </p>
            <p className="text-sm my-2">
              Currently this user has {department} strikes
            </p>
            <div className="flex justify-end  gap-5 [&>*]:w-fit [&>*]:my-5 [&>*]:px-6 [&>*]:py-2 [&>*]:text-white [&>*]:font-semibold [&>*]:rounded-md [&>*]:cursor-pointer">
              <div
                className="bg-red-600 font-semibold rounded-md cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                <h2>CANCEL</h2>
              </div>
              <div className=" bg-primary" onClick={()=>{}}>
                <h2>CONFIRM</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <tr className="hover:bg-primary/20 cursor-pointer text-xs">
            <td className="pl-2 hidden md:table-cell">
              <BsSquare />
            </td>
            <td>
              <div className="flex items-center gap-1">
                <h2 className="text-sm sm:text-[1rem]">{studentName}</h2>
              </div>
            </td>
            <td className="hidden lg:table-cell">{matriculeNumber}</td>
            <td className="hidden md:table-cell">{phoneNumber}</td>
            <td className="hidden md:table-cell text-xs pr-4">{email}</td>
            <td>{department}</td>
          </tr>
        </>
      )}
    </>
  );
}