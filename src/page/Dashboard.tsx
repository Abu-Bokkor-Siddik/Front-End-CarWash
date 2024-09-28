/* eslint-disable @typescript-eslint/no-explicit-any */
import DashboardNav from "@/components/layout/dashboard/DashboardNav"
import SideNave from "@/components/layout/dashboard/SideNave"
import Scrollbar from "@/components/layout/dashboard/user/Scrollbar"
import UserUpdateM from "@/components/layout/dashboard/UserUpdateM"
import { CardTitle } from "@/components/ui/card"
import { useGetUserSingleQuery, useUpdateUserMutation } from "@/redux/api/userApi/userApi"
import { useAppSelector } from "@/redux/hooks"

import { Link, Outlet } from "react-router-dom"


const Dashboard = () => {
  const [updateUser] = useUpdateUserMutation();
  const userEmail = useAppSelector((store)=>store.user.user.email)
  console.log(userEmail)
const {data}=useGetUserSingleQuery(userEmail)
  console.log(data?.data)
//   // update user
//   const handleUpdateUser = async (id: string) => {
// console.log(id)
//     const final = {
//       id,
//       payload: {
//        role:'user'
//       },
//     };
    
   
//   }
  return (
    <div>
      <h1 className="text-3xl my-9  text-center font-bold">{data?.data?.role} Information</h1>
      <div className="lg:max-w-full flex justify-center items-center mx-auto">
      
      <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
    className="w-40 h-40 rounded-full"
      src="https://i.ibb.co.com/1TnFJ5V/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className="flex justify-between items-center">
    <h2 className="card-title">Name : {data?.data?.name}</h2>
    <h2 className="card-title">Role : {data?.data?.role}</h2>
    </div>
    <h2 className="card-title">Email : {data?.data?.email}</h2>
    <h2 className="card-title">Phone : {data?.data?.phone}</h2>
    <h2 className="card-title">Address : {data?.data?.address}</h2>
    
    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
    {/* <div className="card-actions justify-end">
      <button onClick={()=>handleUpdateUser(data?.data?._id)} className="btn btn-primary">Buy Now</button>
    </div> */}
    <div className="card-actions justify-end">
      <UserUpdateM></UserUpdateM>
    </div>
  </div>
</div>
      <Scrollbar></Scrollbar>
  </div>
   
    </div>
  )
}

export default Dashboard
