/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetBookingQuery, useGetUserQuery, useUpdateUserMutation } from "@/redux/api/userApi/userApi";

const UserDM = () => {
  const { data } = useGetBookingQuery({ undefined });
  const { data:data2 } = useGetUserQuery({ undefined });
  const [updateUser] = useUpdateUserMutation();
  console.log(data2);
  const handleTogole = async (id: string,role:string) => {
    const final = {
      id,
      payload: {
       role:'user'
      },
    };
    const final2 = {
      id,
      payload: {
       role:'admin'
      },
    };
    if (role=='admin') {
      const res = await updateUser(final);
  
      console.log(res)
    }else if(role=='user'){
      const res = await updateUser(final2);
      // setStatues('cancel')

      
      console.log(res)
    }
  }
  return (
    <div className="lg:min-h-[550px] ml-20   overflow-x-scroll  lg:max-w-[1400px] mx-auto ">
      <div className="flex  max-w-[1200px] mx-auto justify-end items-center">
       
      </div>
      <table className="border mb-40 min-h-auto border-collapse   min-w-[1000px] mx-auto ">
        <thead className="border  ">
          <tr className="border  text-2xl">
            <th className="border py-4">Id</th>
            <th className="border">Name</th>
            <th className="border">Email</th>
            <th className="border">StartTime</th>
            <th className="border">EndTime</th>
            <th className="border">Duration</th>
            <th className="border ">SlotId</th>
          </tr>
        </thead>
        <tbody className="border ">
          {data?.data?.map((item: any, i: number) => (
            <tr key={i}>
              <td className=" border py-6 flex justify-center">{i + 1}</td>
              <td className="border py-6  mx-auto text-center">
                {item?.name}
              </td>
              <td className="border  text-center">{item?.email}</td>
              <td className="border text-center">{item?.endTime}</td>
              <td className="border text-center">{item?.endTime}</td>
              <td className="border text-center">{item?.duration}</td>
              <td className="  border  flex justify-center   mx-auto  ">
              {item?.slotId}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* st */}
      <table className="border min-h-auto border-collapse   min-w-[1000px] mx-auto ">
        <thead className="border  ">
          <tr className="border  text-2xl">
            <th className="border py-4">Id</th>
            <th className="border">Name</th>
            <th className="border">Email</th>
            <th className="border">Address</th>
            <th className="border">Role Action</th>
           
          </tr>
        </thead>
        <tbody className="border ">
          {data2?.data?.map((item: any, i: number) => (
            <tr key={i}>
              <td className=" border py-6 flex justify-center">{i + 1}</td>
              <td className="border py-6  mx-auto text-center">
                {item?.name}
              </td>
              <td className="border  text-center">{item?.email}</td>
              <td className="border text-center">{item?.address}</td>
              <td className="border text-center"> <button
                    onClick={() => handleTogole(item?._id,item?.role)}
                    className="btn btn-outline"
                   
                  >
                    {item?.role=='user' ? "admin" : "user"}
                  </button></td>
             
             
            </tr>
          ))}
        </tbody>
      </table>
      {/* end */}
    </div>
  );
};

export default UserDM;
