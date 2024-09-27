/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */

import ServiceCart from "@/components/share/ServiceCart";
import { useGetServeQuery } from "@/redux/api/serviceApi/serviceApi";
import React, { useEffect, useState } from "react";
import { setTimeout } from "timers/promises";

const Service:React.FC = () => {
  const [price, setRanges] = useState("");
  const [duration, setDuration] = useState("");
  const [searchTerm, setSearch] = useState("");
  const [sorts, setSorts] = useState("");
// all card products here
// const searchTerm ='';
// const price = "";
// const sort = "";
// const duration = "";
//  setTimeout( function ():void {
  
// }, 2000);


// console.log(data,'here')




const { data } = useGetServeQuery({searchTerm,price,sorts,duration});
  const handleFrom = (e: any) => {
    e.preventDefault();

    // console.log(searchValue);
    // e.target.reset()
  };
  const handleSearch = (e: any) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
  };
  const handleSort = (e: any) => {
    const sortValue = e.target.value;
    setSorts(sortValue);
  };
  const handleRange = (e: any) => {
    const rangeValue = e.target.value;
    setRanges(rangeValue);
  };
  const handleDuration = (e: any) => {
    const durationValue = e.target.value;
    setDuration(durationValue)
  };
  // console.log(price,duration,searchTerm, sorts,);
  const options = [];
  for (let index = 0; index < 1000; index++) {
    // console.log(index)
    options.push(index);
  }
  return (
    <div>
      <div className="mx-auto min-h-[800px]   max-w-[1400px] h-auto ">
        <div className=" flex   h-40 justify-between  items-end ">
          <form
            onSubmit={handleFrom}
            className="flex lg:ml-8  z-10 justify-center items-center   lg:min-w-[400px]"
          >
            <input
              name="searchNames"
              type="text"
              onChange={handleSearch}
              placeholder="Type here"
              className="input input-bordered text-black  shadow-transparent  h-10 lg:h-[52px]  lg:w-[450px] mt-36  "
            />
          </form>

          {/* start */}
          <div className="flex items-center justify-around mr-7 lg:gap-10">
            {/* range */}

            {/* start */}
       <div className="flex justify-evenly items-center gap-3">
       <p>Price:</p>
            <select
            
              className="lg:p-[10px] p-1 border-4  rounded-xl"
              name="cars"
              onChange={handleRange}
              id="cars"
            >
              {options.map((item) => (
                <option key={item} value={item}>
                  {item}$
                </option>
              ))}
            </select>
       </div>

            {/* end */}
            {/* start */}

           <div className="flex justify-evenly items-center gap-3">

           <p>Duration:</p>
           <select
              className="lg:p-[10px] p-1 border-4  rounded-xl"
              name="cars"
              onChange={handleDuration}
              id="cars"
            >
              {options.map((item) => (
                <option key={item} value={item}>
                  {item}$
                </option>
              ))}
            </select>
           </div>

            {/* end */}

            {/* start */}
           
            <select
              className="lg:p-[10px] p-1 border-4  rounded-xl"
              name="cars"
              onClick={handleSort}
              id="cars"
            >
              <option value="">Sorting</option>
              <option value="+">Ascending</option>
              <option value="-">Descending</option>
            </select>

            {/* end */}
            {/* <button className="btn btn-[white]">Clean </button> */}
          </div>
          {/* end */}
        </div>
        {/* cart will be here  */}
        <p className="text-2xl text-center font-extrabold my-5">All Services</p>
        <div className="mx-auto my-10    max-w-[1400px] h-auto">
          <div className="grid grid-cols-4 gap-2 grid-rows-auto justify-evenly items-center">
            {data?.data.map((item: any) => (
            <ServiceCart key={item._id} item={item}></ServiceCart>
          ))}
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default Service;
