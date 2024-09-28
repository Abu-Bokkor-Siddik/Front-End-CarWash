/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetUserReviewsQuery } from "@/redux/api/reviewsApi/reviewsApi"
import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa";

const AllReview = () => {
  const {data}=useGetUserReviewsQuery(undefined)
  console.log(data?.data)
  return (
    <div className="min-h-[800px] lg:pt-48 min-w-full mx-auto">
       <p className="text-center text-3xl mb-10">All Reviews</p>

      <div className=" flex flex-col lg:grid  lg:grid-cols-4 gap-2 grid-rows-auto  mx-auto justify-evenly items-center">
            {data?.data.map((item: any) => (
            <div key={item?._id} className="card bg-base-100 min-h-[350px] w-72 shadow-xl ml-10">
            <figure>
              <img
                src="https://i.ibb.co.com/1TnFJ5V/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg"
                alt={`allImage`}
                className="h-40 w-40 rounded-full object-fill "
              />
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
              <h2 className="card-title "> Name : {item?.name}</h2>
              <h2 className="card-title ">  {item?.ratingValue} <FaStar className="text-yellow-400"></FaStar></h2>
              </div>
              <p>FeedBack : {item?.feedBack}</p>
              <div className="card-actions justify-end">
              <Link to="/">
              <button className="btn btn-sm btn-primary">
               Home
              </button>
            </Link>
              </div>
            </div>
          </div>
          ))}
          </div>
    </div>
  )
}

export default AllReview
