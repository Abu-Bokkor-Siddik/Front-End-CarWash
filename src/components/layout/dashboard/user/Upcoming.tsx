import { useEffect, useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Upcoming = ({ upcoming }: any) => {
  console.log(upcoming);
  const { date, startTime, endTime } = upcoming;
  //   console.log(date, startTime, endTime);
  const [timel, setTimel] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  //   start
  const func = (date: string, startTime:string, endTime: string) => {
    const now: any = new Date();
    const TimeEt: any = new Date(`${date}T${startTime}`);
    // convert time db
    const bdtOffset = 6 * 60 * 60 * 1000; // 6 hours in milliseconds
    const bdtDate: any = new Date(TimeEt.getTime() + bdtOffset);
    const different = bdtDate - now;
    // console.log(different);
    return get(different);
  };

  const get = (differents: any) => {
    const totalSeconds = Math.floor(differents / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;
    const days = Math.floor(totalHours / 24);
    return { days, hours, minutes, seconds };
  };
  //   console.log(get)
  //   console.log(getDates);
  //   const lets = func(date, startTime, endTime);
  //     console.log(lets);

  useEffect(() => {
    const updateTime = () => {
      const remainingTime = func(date, startTime, endTime);
      setTimel(remainingTime);
    };
    updateTime(); 
    const intervalId = setInterval(() => {
      updateTime();
    }, 1000); 
    return () => clearInterval(intervalId);
  }, [date, startTime, endTime]);
    console.log(timel)
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title"> Booking User : {upcoming?.name}</h2>
         <div className="flex justify-evenly">
          <p className="text-lg">vehicleType :{upcoming?.vehicleType} </p>
          <p className="text-lg">Duration : {upcoming?.duration} </p>
         </div>
          <div className="card-actions justify-end">
            <p>{timel?.days}Days : {timel?.hours}Hours : {timel?.seconds} : Seconds</p>
            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
