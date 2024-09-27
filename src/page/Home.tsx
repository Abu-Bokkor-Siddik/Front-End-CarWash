/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from "react";
import Banner from "../components/share/Banner";
import { Star } from "lucide-react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import Carousel from "@/components/share/Carousel";
import Carousels from "@/components/share/Carousel";
import FormModel from "@/components/share/FormModel";
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

  return (
    <div className="">
      <Banner></Banner>
      <div>
        {/* @ts-ignore to bypass TypeScript JSX compatibility error */}
        {/* <Rating
              emptySymbol={<Star size={40} color="orange" />}
              fullSymbol={<Star size={40} color="orange" fill="orange" />}
              fractions={2}
              initialRating={ratingValue}
              stop={5}
              onClick={(value:number) => setRatingValue(value)}
            
            /> */}
        <p className="text-3xl flex justify-center mx-auto font-semibold -mt-12 mb-7">
          ALL SERVICES
        </p>
        {/* map  */}
        <div className="grid grid-cols-3   max-w-[1200px] mx-auto  justify-center items-center gap-7">
          {carWashServices?.map((item) => (
            <div key={item?.id} className="card bg-base-100 mb-5 mx-auto max-h-80 max-w-[300px] shadow-xl">
              <figure>
                <img className="object-fill" src={`${item?.img}`} alt="Shoes" />
              </figure>
              <div className="card-body">
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
        <div>
          <div
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/cFJ3rHD/Orange-White-Modern-Car-Wash-Instagram-Post.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="hero  min-h-[500px] rounded-xl my-10 max-w-[1500px] mx-auto"
          >
            <div className="hero-content  flex-col lg:flex-row">
              <div className="flex  justify-start  items-center gap-96 ">
                <div className="  -ml-32">
                  <h1 className="text-3xl text-center font-semibold">
                    Post Review!
                  </h1>
                  <p className="py-3 text-lg">
                    We truly value your experience with us and would love to
                    hear your thoughts. <br /> Your feedback helps us improve
                    and ensures we continue providing the best <br /> service
                    possible. If you could take a moment to share your
                    experience by <br /> posting a review, it would mean a lot
                    to us. Your review will also help <br /> others make
                    informed decisions. Thank you for being a part of our
                    community!
                  </p>
                  <div className=" mx-auto flex justify-center mt-20">
                   <FormModel></FormModel>
                  </div>
                </div>
                <div className="max-w-[300px] max-h-[500px] mx-auto">
                  <Carousels></Carousels>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default Home;
