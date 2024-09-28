/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import Banner from "../components/share/Banner";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Carousels from "@/components/share/Carousel";
import FormModel from "@/components/share/FormModel";
import { useAppSelector } from "@/redux/hooks";
import { Button } from "@/components/ui/button";
import { useGetUserReviewsQuery } from "@/redux/api/reviewsApi/reviewsApi";
import Scrollbar from "@/components/layout/dashboard/user/Scrollbar";
const Home = () => {
  // fake data
  const carWashServices = [
    {
      id: 1,
      img: "https://i.ibb.co.com/SNQ4d0w/clean-car-gallery-slide-09.jpg",
      title: "basic exterior wash",
      description:
        "A quick and efficient exterior wash using high-pressure water and soap.",
    },
    {
      id: 2,
      img: "https://i.ibb.co.com/rdBSGvk/istockphoto-174964190-612x612.jpg",
      title: "Hand Wash car",
      description:
        "Detailed vacuuming and cleaning of the car’s interior, including seats and dashboard.",
    },
    {
      id: 3,
      img: "https://i.ibb.co.com/FX4x0CF/655733dc-ec53-4a54-ab17-9684f606cbc1.jpg",
      title: "Waxing and Polishing",
      description:
        "Comprehensive interior and exterior cleaning with waxing and polishing.",
    },
    {
      id: 4,
      img: "https://i.ibb.co.com/RTGp5Sn/images.jpg",
      title: "Exterior and Interior Cleaning car",
      description:
        "Application of premium wax and polish for a glossy finish and paint protection.",
    },
    {
      id: 5,
      img: "https://i.ibb.co.com/XkRM7Fk/25d93d-b3d8ea3858e949f6b1266368fe6bce3e-mv2.webp",
      title: " Full Detailing car",
      description:
        "A gentle and thorough hand wash, perfect for luxury or delicate vehicles.",
    },
    {
      id: 6,
      img: "https://i.ibb.co.com/1RYTTLB/Pearl-Professional-Green-Waterless-Car-Wash.jpg",
      title: "Eco-friendly or Waterless Car Wash",
      description:
        "Eco-friendly waterless wash using special cleaning sprays and microfiber towels.",
    },
  ];
  const token = useAppSelector((store) => store.user.token);
  // get all reviews
  const { data } = useGetUserReviewsQuery({ undefined });

  // reduce ration value
  const totalRating = data?.data?.reduce((acc: number, review: any) => {
    const rating = Number(review?.ratingValue) || 0;
    return acc + rating;
  }, 0);
  const finalReting = totalRating / data?.data?.length;

  // todo
  return (
    <div className="">
      <Banner></Banner>
      <div>
        <p className=" text-xl lg:text-3xl flex justify-center mx-auto font-semibold -mt-12 mb-7">
          ALL SERVICES
        </p>
        {/* map  */}
        <div className="grid grid-cols-1 lg:grid-cols-3   max-w-[1200px] mx-auto  justify-center items-center gap-7">
          {carWashServices?.map((item) => (
            <div
              key={item?.id}
              className="card bg-base-100 mb-5 mx-auto max-h-80 max-w-[300px] shadow-xl"
            >
              <figure>
                <img
                  className="object-cover h-60"
                  src={`${item?.img}`}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h1 className="text-lg font-semibold">{item?.title}</h1>
                <p className="mb-2">{item.description}</p>
                <div className="card-actions justify-between "></div>
              </div>
            </div>
          ))}
        </div>
        {/* end */}
        <h1 className="text-2xl flex justify-center mx-auto font-semibold  mb-7">
          REVIEWS
        </h1>
        <div className="text-end lg:mr-32">
          {token ? (
            ""
          ) : (
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
        <div>
          <div
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/cFJ3rHD/Orange-White-Modern-Car-Wash-Instagram-Post.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="hero  lg:min-h-[600px] rounded-xl my-10 lg:max-w-[1500px] mx-auto"
          >
            <div className="hero-content relative flex-col lg:flex-row">
              <p className="absolute text-4xl top-0 right-0 flex  justify-center">
                {finalReting}
                <FaStar className="text-yellow-400"></FaStar>
              </p>
              <div className="grid grid-cols-1  justify-center  gap-96 ">
                <div className=" mt-24">
                  <h1 className="text-3xl text-center font-semibold">
                    Post Review!
                  </h1>
                  <p className="py-3 text-lg">
                    We truly value your experience with us and would love to
                    hear your thoughts. Your feedback helps us improve and
                    ensures we continue providing the best service possible. If
                    you could take a moment to share your experience by posting
                    a review, it would mean a lot to us. Your review will also
                    help others make informed decisions. Thank you for being a
                    part of our community!
                  </p>
                  <div className=" mx-auto flex  gap-10 justify-center mt-10">
                    {token ? (
                      <FormModel></FormModel>
                    ) : (
                      <Link to="/login">
                        <Button className="mb-10 " >
                          Post here
                        </Button>
                      </Link>
                    )}
                    <Link to="/review">
                      <Button className="mb-10 " >
                        All Review
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end */}
        <div className="max-w-[500px] my-20 max-h-[500px] mx-auto">
          <Carousels></Carousels>
        </div>
       <div className="sticky text-end mx-20 my-10">
       <Scrollbar></Scrollbar>
       </div>
      </div>
    </div>
  );
};

export default Home;
