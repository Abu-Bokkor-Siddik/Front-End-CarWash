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
import { useGetUserSingleQuery, useUpdateUserMutation } from "@/redux/api/userApi/userApi";
import { useAppSelector } from "@/redux/hooks";
import { FormEvent, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const UserUpdateM = () => {

const [updateUser] = useUpdateUserMutation();
  const userEmail = useAppSelector((store)=>store.user.user.email)
  console.log(userEmail)
const {data}=useGetUserSingleQuery(userEmail)
  console.log(data?.data)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
 console.log(name,email,phone,address)
  const onSubmits = async (e: FormEvent) => {
    e.preventDefault();
    const final = {
      id:data?.data?._id,
      payload: {
        name: name,
        email:email,
        price: phone,
        address: address,
        role:data?.data?.role,
      },
    };
    console.log(final)
    // cell
    const postRes = await updateUser(final);
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
          <DialogTitle>Update Info</DialogTitle>
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
               Email
              </Label>
              <Input
                id="email"
                onBlur={(e) => setEmail(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* start */}
            <div className="grid grid-cols-4  items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input
                id="phone"
                onBlur={(e) => setPhone(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* end */}
            {/* start */}
            <div className="grid grid-cols-4  items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Address
              </Label>
              <Input
                id="address"
                onBlur={(e) => setAddress(e.target.value)}
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

export default UserUpdateM;

