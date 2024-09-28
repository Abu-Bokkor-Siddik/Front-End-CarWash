/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useGetUserBookedQuery } from "@/redux/api/bookingApi/bookingApi"
import { useGetUserBookedQuery } from "@/redux/api/bookingApi/bookingApi"
import { useAppSelector } from "@/redux/hooks"
import Upcoming from "./Upcoming"


const BookingInfo = () => {
    // const {data}=useGetUserBookedQuery({undefined})
    const userEmail = useAppSelector((store)=>store.user.user.email)
    const {data}=useGetUserBookedQuery(userEmail)
    console.log(data)
    // combine 
    const combineTime =(date:string,time:string)=>{
      
      return new Date(`${date}T${time}`)
    }
    
    const today = new Date()
    const Upcomming = data?.data?.filter((booked:any)=>combineTime(booked?.date,booked?.startTime)>today)
    console.log(Upcomming)
    const past = data?.data?.filter((booked:any)=>combineTime(booked?.date,booked?.startTime)<today)
    console.log(past)
  
  return (
    <div className="lg:min-h-[950px] lg:ml-20   overflow-x-scroll  lg:max-w-[1400px] mx-auto ">
      {/* upcoming  card*/}
        <div className="min-h-[500px]  lg:ml-28 mb-10 max-w-[1200px] mx-auto  border">
          <p className="text-center text-3xl py-3">Upcoming Booking!</p>
       <div className="grid lg:ml-10 grid-cols-1 lg:grid-cols-3">
       {
        Upcomming?.map((item:any)=> <Upcoming key={item?._id} upcoming={item}></Upcoming>)
       }
       </div>
         
        </div>
     
    <div className="flex  max-w-[1200px] mx-auto justify-end items-center">
      <div className="  ">
        {/* <CreateModal></CreateModal> */}
      </div>
    </div>
    <table className="border min-h-auto border-collapse   min-w-[1000px] mx-auto ">
      <thead className="border  ">
        <tr className="border  text-2xl">
          <th className="border py-4">Id</th>
          <th className="border">Name</th>
          <th className="border">Email</th>
          <th className="border">Status</th>
          
          <th className="border">Duration</th>
          <th className="border">StartTime</th>
          <th className="border ">EndTime</th>
        </tr>
      </thead>
      <tbody className="border ">
        {past?.map((item: any, i: number) => (
          <tr key={i}>
            <td className=" border py-6 flex justify-center">{i + 1}</td>
            <td className="border py-6  mx-auto text-center">
              {item?.name}
            </td>
            <td className="border  text-center">{item?.email}</td>
            <td className="border text-center">{item?.isBooked}</td>
            
            <td className="border text-center">{item?.duration}</td>
            <td className="border text-center">{item?.startTime}</td>
            <td className="  border  flex justify-center   mx-auto  ">
            {item?.endTime}
            </td>
            
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default BookingInfo
