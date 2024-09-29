/* eslint-disable @typescript-eslint/no-explicit-any */

const SlotCard = ({item}:any) => {
  console.log(item?.service)
 

  return (
    <div className="card bg-slate-50   w-80 min-h-52 shadow-xl">
      <div className="card-body">
        <div className="flex gap-5 justify-between items-center  text-start ">
          <h2 className="card-title">Name:{item?.service?.name}</h2>
          <p className="text-xl">Price : {item?.service?.price}</p>
        </div>
        
        <p className="text-start">Duration:{item?.service?.duration}</p>
        <p className="text-start">Description:{item?.service?.description}</p>
      </div>
      
    </div>
  );
};

export default SlotCard;
