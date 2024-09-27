/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useGetServeQuery } from "@/redux/api/serviceApi/serviceApi";
import { useAddSlotMutation } from "@/redux/api/slot/slotApi";
// import { useAddServiceMutation } from "@/redux/api/serviceApi/serviceApi";
import { FormEvent, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const CreateModal = () => {
  const [addSlot] = useAddSlotMutation();
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
    console.log(data)
  const [selectS, setSelectS] = useState("");
  const [dates, setDates] = useState("");
  const [startTime, setsTime] = useState("");
  const [endTime, setendTime] = useState("");
  const [errors, setErrors] = useState("");
//   const [duration, setDuration] = useState("");

//   const [price, setPrice] = useState("");
const startMinutes = startTime.split(":")[1];
const endMinutes = endTime.split(":")[1];
// if (startMinutes!== endMinutes) {
//   setErrors("End time minutes must match start time minutes.")
// }
const handleSort = (e: any) => {
    const sortValue = e.target.value;
    setSelectS(sortValue);
  };

  const onSubmits = async (e: FormEvent) => {
    e.preventDefault();
   
    // console.log(selectS,dates,startTime,endTime)
    const postDetails = {
      service:selectS ,
      date:dates,
      startTime:startTime,
      endTime: endTime
    };
    // console.log(postDetails);
    // cell
    const postRes = await addSlot(postDetails);
    console.log("here form value", postRes);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mb-10 bg-sky-600" variant="outline">
          <IoMdAddCircleOutline className="h-5 w-5 text-white"></IoMdAddCircleOutline>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create slot</DialogTitle>
          
        </DialogHeader>
        <form onSubmit={onSubmits}>
          <div className="grid gap-4 py-4">
           Select Service:
          <select
              className="lg:p-[10px] p-1 border-4  rounded-xl"
              name="cars"
              onClick={handleSort}
              id="cars"
              required
            >
              {
                data?.data?.map((items:any)=><option key={items._id} value={items?._id}>{items?.name}</option>
                    )
              }
            </select>

            <div className="grid grid-cols-4 items-center ">
             Date:
              <input
              type="date"
                id="date"
                required
                onBlur={(e) => setDates(e.target.value)}
                className="col-span-3 py-3"
              />
            </div>
            {/* start */}
            <div className="grid grid-cols-4  items-center gap-4">
            Start Time:
              <input
                id="start"
                required
                type="text"
                placeholder=" ex : 01:00"
                step="60"
                onChange={(e) => setsTime(e.target.value)}
                className="col-span-3 py-3"
              />
            </div>
            {/* end */}
            <p className="text-red-300">{startMinutes==endMinutes?"":"End time minutes must match start time minutes."}</p>
            {/* start */}
            <div className="grid grid-cols-4  items-center gap-4">
              End Time:
              <input
                id="end"
                type="text"
                required
                placeholder="ex : 15:00"
                // value={`${endTime?.split(':')[0]} : ${startTime.split(':')[1]}`}
                onChange={(e) => setendTime(e.target.value)}
                className="col-span-3 py-3"
              />
            </div>
            {/* end */}
           
          </div>

          <div className="flex justify-end">
            <DialogClose asChild>
              <Button disabled={startMinutes!==endMinutes} type="submit">Post</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateModal;
