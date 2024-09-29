/* eslint-disable @typescript-eslint/no-explicit-any */

import SlotCard from "@/components/share/SlotCard";

import { addCart } from "@/redux/features/bookingSlice";

import { useAppDispatch } from "@/redux/hooks";
import  { useState } from "react";
import { CiLight } from "react-icons/ci";
import { useLoaderData } from "react-router-dom";
import {  toast } from 'sonner'
const Dynamic = () => {
  const [isbutton, setButton] = useState(false);
  const [slotId, setSlotId] = useState("");
  const dispatch=useAppDispatch()

  const { data }:any = useLoaderData();
  console.log(data[0]?.service?.name)
  const handleCard = (_id: string) => {
    setSlotId(_id);
    
    setButton(true);
  };

  const handleSlot=()=>{
    const filterData= data?.filter((item:any)=>item._id===slotId)
    console.log(filterData,'data ')
    dispatch(addCart(filterData))

    toast.success("successfully Added in Booking page",{duration:2000})
    console.log(slotId);
  }
  return (
    <div className="mx-auto min-h-[800px] max-w-[1400px] h-auto ">
      <div className="max-w-[600px] pt-40 mx-auto">
        
        <div
      className="card bg-url bg-gray-200  min-w-60 min-h-60 my-5 lg:my-14 shadow-xl"
     
    >
      
      <div className="card-body ">
        <div className="flex justify-between items-center  -mt-3">
          <h2 className="card-title text-black">Name : {data[0]?.service?.name}</h2>{" "}
          
          <h1 className=" ">
            <CiLight className="h-6 w-6  "></CiLight>
          </h1>
        </div>
       
        <p>
       Price : {data[0]?.service?.price}
        </p>
        <p>
       Duration : {data[0]?.service?.duration}
        </p>
        <p>
       Description : {data[0]?.service?.description}
        </p>
        <div className="card-actions justify-end">
              {isbutton ? (
                <button onClick={()=>handleSlot()} className="btn btn-neutral">Book Service</button>
              ) : (
                ""
              )}
            </div>
      </div>
    </div>
        {/* end */}
      </div>
      <div className=" flex flex-col lg:grid lg:grid-cols-3 mt-5 min-h-[500px]  max-w-[1000px]  mx-auto  justify-center items-center ">
        {data?.map((item: any) => (
          <button
            key={item._id}
            disabled={item?.isBooked=="booked"}
            className=" "
            onClick={() => handleCard(item._id)}
          >
            <SlotCard item={item}></SlotCard>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dynamic;
