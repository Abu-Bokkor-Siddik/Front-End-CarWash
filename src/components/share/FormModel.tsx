/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FormEvent, useState } from "react";
import { Star } from "lucide-react";
import Rating from "react-rating";

import { Button } from "../ui/button";
// import  { FormEvent, useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog.tsx";
import { Label } from "../ui/label.tsx";
import {  toast } from 'sonner'
import { Textarea } from "../ui/textarea.tsx";
import { useAppSelector } from "@/redux/hooks.ts";
import { useReviewsMutation } from "@/redux/api/reviewsApi/reviewsApi.ts";
import { useGetUserSingleQuery } from "@/redux/api/userApi/userApi.ts";
const FormModel = () => {
  const [ratingValue, setRatingValue] = useState(0);
  const [feedBack, setfeedBack] = useState("");
  const [reviews]=useReviewsMutation()
  const userEmail = useAppSelector((store)=>store.user.user.email)
  const {data}=useGetUserSingleQuery(userEmail)
  // console.log(data?.data?.name)
  // console.log(userEmail)

  const onSubmits = async(e: FormEvent) => {
    e.preventDefault();
    console.log(ratingValue, feedBack,userEmail);

    const final ={
      ratingValue,
      feedBack,
      userEmail,
      name:data?.data?.name
    }
    const res = await reviews(final)
    toast.success("successfully Post Review",{duration:2000})
    console.log(res,'post data')
  };
  console.log("here form value");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mb-10 ">
          Post here
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">FeedBack</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmits}>
          <div className="grid justify-center gap-4 py-4">
            {/* @ts-ignore to bypass TypeScript JSX compatibility error */}
            <Rating
              emptySymbol={<Star size={40} color="orange" />}
              fullSymbol={<Star size={40} color="orange" fill="orange" />}
              fractions={2}
              initialRating={ratingValue}
              stop={5}
              onClick={(value: number) => setRatingValue(value)}
            />
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className=""></Label>
              <Textarea
                id="name"
                placeholder="Type your feedback here."
                onBlur={(e) => setfeedBack(e.target.value)}
                className="col-span-4"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Post</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormModel;
