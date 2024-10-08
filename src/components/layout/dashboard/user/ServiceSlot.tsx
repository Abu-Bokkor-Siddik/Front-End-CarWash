/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector } from "@/redux/hooks";

import { useGetUserBookedQuery } from "@/redux/api/bookingApi/bookingApi";
import Upcoming from "./Upcoming";


const ServiceSlot = () => {
  const userEmail = useAppSelector((store) => store.user.user.email);
  const { data } = useGetUserBookedQuery(userEmail);
  console.log(data);
  // combine
  const combineTimes = (date: string, time: string) => {
    return new Date(`${date}T${time}`);
  };
  const today = new Date()
  // const StTime ="23:53";
  // const ETime ="24:53";

  const present = data?.data?.filter((booked:any)=>combineTimes(booked?.date,booked?.startTime)>=today)
  // console.log(present.length)
  const sorts = present?.sort((a:any,b:any)=>combineTimes(a.date, a.startTime).getTime()-combineTimes((b.date), b.startTime).getTime())
console.log(sorts)



  
  
  return (
    <div className="h-[500px]  lg:ml-48 mb-10 max-w-[1200px] mx-auto  border">
      <h1 className="text-3xl my-5 font-bold text-center">User Slot</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center mx-auto ml-3" >
        {sorts?.map((item: any) => (
          <Upcoming key={item?._id} upcoming={item} ></Upcoming>
        ))}
      </div>


      {/* go top  */}
     
    </div>
  );
};

export default ServiceSlot;
