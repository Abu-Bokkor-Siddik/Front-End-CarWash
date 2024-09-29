/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useGetUserReviewsQuery } from "@/redux/api/reviewsApi/reviewsApi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Carousels = () => {
  const { data } = useGetUserReviewsQuery(undefined);
  // console.log(data?.data)

  return (
    <Carousel className="max-w-[1250px] max-h-full mx-auto   ">
      <CarouselContent>
        {data?.data?.map((item: any, index: any) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className=" max-h-auto">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  {/* <img src={item.Ima} alt={`allImage${index+1}`} className="h-full w-full object-fill " /> */}
                  <div className="card bg-base-100 min-h-[400px] w-96 shadow-xl">
                    <figure>
                      <img
                        src="https://i.ibb.co.com/1TnFJ5V/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg"
                        alt={`allImage${index + 1}`}
                        className="h-40 w-40 rounded-full object-fill "
                      />
                    </figure>
                    <div className="card-body">
                      <div className="flex justify-between">
                        <h2 className="card-title "> Name : {item?.name}</h2>
                        <h2 className="card-title ">
                          {" "}
                          {item?.ratingValue}{" "}
                          <FaStar className="text-yellow-400"></FaStar>
                        </h2>
                      </div>
                      <p>FeedBack : {item?.feedBack}</p>
                      <div className="card-actions justify-end">
                        <Link to="/review">
                          <button className="btn btn-sm btn-neutral">
                            See more
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" hidden lg:block " />
      <CarouselNext className="hidden lg:block" />
    </Carousel>
  );
};

export default Carousels;
