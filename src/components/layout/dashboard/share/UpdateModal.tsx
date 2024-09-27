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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateServiceMutation } from "@/redux/api/serviceApi/serviceApi";
import { FormEvent, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const UpdateModal = ({id}:any) => {
  const [updateService] = useUpdateServiceMutation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");

  const onSubmits = async (e: FormEvent) => {
    e.preventDefault();
    // const postDetails = {
    //   name: name,
    //   description: description,
    //   price: price,
    //   duration: duration,
    //   isDeleted: true,
    // };
    // console.log(id);
    const final = {
      id,
      payload: {
        name: name,
        description: description,
        price: price,
        duration: duration,
        isDeleted: true,
      },
    };
    // cell
    const postRes = await updateService(final);
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
          <DialogTitle>Add Product</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmits}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                onBlur={(e) => setName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                onBlur={(e) => setDescription(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* start */}
            <div className="grid grid-cols-4  items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                id="price"
                onBlur={(e) => setPrice(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* end */}
            {/* start */}
            <div className="grid grid-cols-4  items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Duration
              </Label>
              <Input
                id="duration"
                onBlur={(e) => setDuration(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* end */}
          </div>

          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Update</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateModal;
