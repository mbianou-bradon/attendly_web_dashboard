import client from "../api/axios";
import React from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import Loading from "./Loading";

type Props = {
  _id : string,
  studentMatriculeNumber : string,
  courseCode : string,
  dateSigned : string
}

export default function AttendanceComponent({ _id, studentMatriculeNumber, courseCode, dateSigned } : Props) {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // const createDate = new Date(ask.createdAt);
  // const duration = ask.duration * 86400000 || 0;
  // const expiringDate = new Date(createDate.getTime() + duration);

  const id = _id;

  // const handleHideAsk = () => {
  //   setIsLoading(true);

  //   const hideAsk = client.patch(`/asks/${id}`, {
  //     visibility: !ask.visibility,
  //   });
  //   hideAsk
  //     .then((response) => {
  //       console.log("Ask Status changed Successfully");
  //       setIsModalOpen(false);
  //       setIsLoading(false);

  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setIsLoading(false);
  //     });
  // };

  const Modal = () => {
    return (
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-[0.9] z-30">
        <div className="w-full h-full flex items-center justify-center bg-black">
          {/* <div className="w-[65%] bg-white p-10 rounded-md">
            <h1 className="text-xl font-semibold text-center mb-4">
              HIDE ASK Confirmation
            </h1>
            <p>
              This ASK was reported by users for VIOLATING the platform terms
              and policies. You are might consider Hiding it by Pressing the
              HIDE Button below.
            </p>
            <p>
              This ASK was posted by{" "}
              <span className="text-primary">{ask.user.username}</span>
            </p>
            <p className="text-xs my-2">
              This ASK has been reported{" "}
              <span className="text-red-600">{ask.report}</span> times
            </p>
            <div className="flex justify-end  gap-5 [&>*]:w-fit [&>*]:my-5 [&>*]:px-6 [&>*]:py-2  [&>*]:font-semibold [&>*]:rounded-md [&>*]:cursor-pointer">
              <div
                className="border-black border font-semibold rounded-md cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                <h2>CANCEL</h2>
              </div>
              <div className=" bg-red-600 text-white" onClick={handleHideAsk}>
                <h2>HIDE</h2>
              </div>
            </div>
          </div> */}
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
          {isModalOpen && <Modal />}
          <tr className="border-b border-[#EEEEEE] hover:bg-primary/20 cursor-pointer">
            <td>
              <div className="py-5 pl-2">
                <div className="text-sm mb-4 w-[85%]">
                  <p>{studentMatriculeNumber}</p>
                </div>
              </div>
            </td>
            <td className="hidden sm:table-cell">{courseCode}</td>

            <td className="hidden md:table-cell">
              <div className="flex items-center gap-1">
                <h2>{dateSigned}</h2>
              </div>
            </td>
            {/* <td>
              <div className="py-5 pr-2 [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:gap-1 [&>*]:rounded-full [&>*]:h-[1.625rem] [&>*]:cursor-pointer [&>*:active]:scale-95">
                <div> 
                   <h2 className="text-xs md:text-sm">Hide Question</h2>
                </div>
              </div>
            </td> */}
          </tr>
        </>
      )}
    </>
  );
}