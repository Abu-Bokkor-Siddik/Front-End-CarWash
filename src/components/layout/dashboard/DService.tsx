/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useDeleteServiceMutation,
  useGetServeQuery,
} from "@/redux/api/serviceApi/serviceApi";
import AddModal from "./share/AddModal";
import { MdOutlineDelete } from "react-icons/md";
import UpdateModal from "./share/UpdateModal";
import Swal from "sweetalert2";
const DService = () => {
  const [DeleteService] = useDeleteServiceMutation();
  const searchTerm = "";
  const price = "";
  const sort = "";
  const duration = "";
  const { data } = useGetServeQuery({
    searchTerm,
    price,
    sort,
    duration,
  });
  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const deleteRes = DeleteService(id);
        console.log(deleteRes, "delete");
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  console.log(data?.data);
  return (
    <div className="lg:min-h-[950px] ml-20   overflow-x-scroll  lg:max-w-[1400px] mx-auto ">
      <h1 className="text-2xl text-center font-bold">All Service</h1>
      <div className="flex  max-w-[1200px] mx-auto justify-end items-center">
        <div className="  ">
          <AddModal></AddModal>
        </div>
      </div>
      <table className="border min-h-auto border-collapse   min-w-[1000px] mx-auto ">
        <thead className="border  ">
          <tr className="border  text-2xl">
            <th className="border py-4">Id</th>
            <th className="border">Name</th>
            <th className="border">Price</th>
            <th className="border">Description</th>
            <th className="border">Duration</th>

            <th className="border ">Actions</th>
          </tr>
        </thead>
        <tbody className="border">
          {data?.data?.map((item: any, i: number) => (
            <tr key={i}>
              <td className=" border py-12  flex justify-center">{i + 1}</td>
              <td className="border  mx-auto text-center">{item?.name}</td>
              <td className="border text-center">{item?.price}</td>
              <td className="border text-center">{item?.description}</td>
              <td className="border text-center">{item?.duration}</td>
              <td className="  border  flex justify-center   mx-auto  ">
                <div className=" mt-7 ">
                  <UpdateModal id={item?._id}></UpdateModal>

                  <button
                    onClick={() => handleDelete(item?._id)}
                    className="btn ml-4 btn-error  text-white border "
                  >
                    <MdOutlineDelete className="h-4 w-4"></MdOutlineDelete>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DService;
