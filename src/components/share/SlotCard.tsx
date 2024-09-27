import React from 'react'
import { CiLight } from "react-icons/ci";
const SlotCard = () => {
    const images =
    "https://i.ibb.co/1TnFJ5V/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg";
 
  return (
    <div
      className="card bg-url mt-1 ml-11 w-60 h-48 my-20 shadow-xl"
      style={{
        backgroundImage: `url(${images})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="card-body ">
        <div className="flex justify-between items-center  -mt-3">
          <h2 className="card-title text-black">Card title!</h2>{" "}
          <h1 className=" ">
            <CiLight className="h-6 w-6 text-white "></CiLight>
          </h1>
        </div>
        <p>
          If a dog chews shoes whose shoes does he choose?If a dog chews shoes
          whose shoes does he choose?
        </p>
      </div>
    </div>
  )
}

export default SlotCard

