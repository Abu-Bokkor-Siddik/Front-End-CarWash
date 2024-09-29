/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useDeleteServiceMutation, useGetServeQuery } from "@/redux/api/serviceApi/serviceApi";
// import AddModal from "./share/AddModal";

import Scrollbar from "../../user/Scrollbar";
import CreateModal from "./CreateModal";

import {
  useGetSlotQuery,
  useUpdateSlotMutation,
} from "@/redux/api/slot/slotApi";



const DService = () => {
  const [updateS] = useUpdateSlotMutation();
  // const [statues,setStatues]=useState(false)
  const date = "";
  const serviceid = "";
  const { data } = useGetSlotQuery({
    date,
    serviceid,
  });

  // console.log(data);
 
  const handleTogole = async (id: string, isBooked: string) => {
    console.log("hello", id, isBooked);
    const final = {
      id,
      payload: {
        isBooked: "available",
      },
    };
    const final2 = {
      id,
      payload: {
        isBooked: "cancel",
      },
    };

    if (isBooked == "cancel") {
      const res = await updateS(final);

      console.log(res);
    } else if (isBooked == "available") {
      const res = await updateS(final2);
      // setStatues('cancel')

      console.log(res);
    }
    // if (statues) {
    //   const newStatus = statues === "AVAILABLE" ? "CANCELLED" : "AVAILABLE";
    //   setStatues(newStatus)
    //   const res = await updateS(final);
    // console.log(res);

    // }
  };
  return (
    <div className="lg:min-h-[950px] lg:ml-20   overflow-x-scroll  lg:max-w-[1400px] mx-auto ">
      <h1 className="text-2xl text-center font-bold">All Slots</h1>
      <div className="flex  max-w-[1200px] mx-auto justify-end items-center">
        <div className="  ">
          <CreateModal></CreateModal>
        </div>
      </div>
      <table className="border min-h-auto border-collapse   min-w-[1000px] mx-auto ">
        <thead className="border  ">
          <tr className="border  text-2xl">
            <th className="border py-4">Id</th>
            <th className="border">Name</th>

            <th className="border">StartTime</th>
            <th className="border">EndTime</th>
            <th className="border">Duration</th>

            <th className="border ">Actions</th>
          </tr>
        </thead>
        <tbody className="border ">
          {data?.data?.map((item: any, i: number) => (
            <tr key={i}>
              <td className=" border py-6 flex justify-center">{i + 1}</td>
              <td className="border py-6  mx-auto text-center">
                {item?.service?.name}
              </td>

              <td className="border text-center">{item?.startTime}</td>
              <td className="border text-center">{item?.endTime}</td>
              <td className="border text-center">{item?.service?.duration}</td>
              <td className="  border  flex justify-center   mx-auto  ">
                <div className="  ">
                  <button
                    onClick={() => handleTogole(item?._id, item?.isBooked)}
                    className="btn btn-outline"
                    disabled={item?.isBooked == "booked"}
                  >
                    {item?.isBooked == "available" ? "CANCELLED" : "AVAILABLE"}
                  </button>

                  {/* <button
                    onClick={() => handleDelete(item?._id)}
                    className="btn ml-4 btn-error  text-white border "
                  >
                    <MdOutlineDelete className="h-4 w-4"></MdOutlineDelete>
                  </button> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="sticky text-end mx-20 my-10">
       <Scrollbar></Scrollbar>
       </div>
    </div>
  );
};

export default DService;
