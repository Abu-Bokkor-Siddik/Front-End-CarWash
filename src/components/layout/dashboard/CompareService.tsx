/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetServeQuery } from "@/redux/api/serviceApi/serviceApi";
import { addCart, removeCart } from "@/redux/features/compareSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const CompareService = () => {
  const dispatch = useAppDispatch();
  const compares = useAppSelector((store) => store.compare.carts);
  console.log(compares);
  const searchTerm = "";
  const price = "";
  const sorts = "";
  const duration = "";
  const { data } = useGetServeQuery({ searchTerm, price, sorts, duration });
  console.log(data);
  const handleCard = (id: string) => {
    // console.log("hello",id)
    const filterData = data?.data?.filter((item: any) => item._id === id);
    console.log(filterData, "data ");
    dispatch(addCart(filterData));
  };
  // remove
  const handleDelete = async (id: string) => {
    // console.log(id,"delete id")
    dispatch(removeCart(id));
  };
  return (
    <div>
      <h1 className="text-2xl my-5  text-center">Select The Service</h1>
      <div className="grid grid-cols-2 mb-4 lg:grid-cols-4 lg:ml-40 cursor-pointer ">
        {data?.data?.map((item: any) => (
          <div
            onClick={() => handleCard(item?._id)}
            key={item?._id}
            className="card bg-base-100 w-40 shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title">{item?.name}</h2>
            </div>
          </div>
        ))}
      </div>

      <div>
        <p className="text-2xl mt-12  text-center"> Your Compare Service</p>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {compares?.map((item: any) => (
            <div className="card bg-base-100 lg:ml-40 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{item?.[0]?.name}</h2>
                <p>{item?.[0]?.description}</p>
                <div className="flex justify-between">
                  <h1>Price: {item?.[0]?.price}</h1>
                  <h1>Duration: {item?.[0]?.duration}</h1>
                </div>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleDelete(item?.[0]?._id)}
                    className="btn btn-sm btn-active"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompareService;
