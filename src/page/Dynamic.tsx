/* eslint-disable @typescript-eslint/no-explicit-any */
import Details from "@/components/share/Deatails";
import SlotCard from "@/components/share/SlotCard";
import { useGetSlotIdQuery } from "@/redux/api/serviceApi/serviceApi";
import { addCart } from "@/redux/features/bookingSlice";
// import { calculateTotalTime } from "@/redux/features/bookingSlice";
import { useAppDispatch } from "@/redux/hooks";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Dynamic = () => {
  const [isbutton, setButton] = useState(false);
  const [slotId, setSlotId] = useState("");
  const dispatch=useAppDispatch()

  const { data }:any = useLoaderData();
  console.log(data)
  const handleCard = (_id: string) => {
    setSlotId(_id);
    
    setButton(true);
  };

  const handleSlot=()=>{
    const filterData= data?.filter((item:any)=>item._id===slotId)
    console.log(filterData,'data ')
    dispatch(addCart(filterData))
    // dispatch(calculateTotalTime())
    console.log(slotId);
  }
  return (
    <div className="mx-auto min-h-[800px] max-w-[1400px] h-auto ">
      <div className="max-w-[600px] pt-40 mx-auto">
        {/* <Details isbutton={isbutton} slotId={slotId}></Details> */}
        {/* st */}
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              {isbutton ? (
                <button onClick={()=>handleSlot()} className="btn btn-primary">Book Service</button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        {/* end */}
      </div>
      <div className="grid grid-cols-3 mt-5 max-h-[500px]  max-w-[1000px]  mx-auto  justify-center items-center ">
        {data?.map((item: any) => (
          <button
            key={item._id}
            className="cursor-pointer"
            onClick={() => handleCard(item._id)}
          >
            <SlotCard></SlotCard>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dynamic;
