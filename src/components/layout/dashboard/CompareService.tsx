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
      <div className="flex cursor-pointer ">
        {data?.data?.map((item: any) => (
          <div
            onClick={() => handleCard(item?._id)}
            key={item?._id}
            className="card bg-base-100 w-96 shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-7xl">compare Section</p>
      <div>
      {compares?.map((item: any) =>  <div className="card bg-base-100 ml-40 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{item?.[0]?.name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button onClick={() => handleDelete(item?.[0]?._id)} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>)}
      </div>
    </div>
  );
};

export default CompareService;
