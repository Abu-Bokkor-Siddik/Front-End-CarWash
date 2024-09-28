/* eslint-disable @typescript-eslint/no-explicit-any */
import { CiLight } from "react-icons/ci";
import { Link } from "react-router-dom";

const ServiceCart = ({ item }: any) => {
  console.log(item);
  return (
    <div className="card bg-url bg-gray-200  min-w-60 min-h-60 my-5 lg:my-14 shadow-xl">
      <div className="card-body ">
        <div className="flex justify-between items-center  -mt-3">
          <h2 className="card-title text-black">{item?.name}</h2>{" "}
          <h1 className=" ">
            <CiLight className="h-6 w-6  "></CiLight>
          </h1>
        </div>
        <h1>price:{item?.price}</h1>
        <p>{item?.description}</p>
        <Link to={`/slot/${item?._id}`}>
          <button className="badge badge-outline px-8">View</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCart;
