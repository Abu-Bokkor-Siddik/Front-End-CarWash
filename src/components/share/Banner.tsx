import { useAppSelector } from "@/redux/hooks";
import { Link } from "react-router-dom";

const Banner = () => {
  const token = useAppSelector((store) => store.user.token);
  return (
    <div
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/1qrk7Qb/Orange-and-Brown-Modern-Car-Wash-Service-Banner-1.png)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
      className="hero  py-16 rounded-lg lg:min-h-[900px]  lg:max-w-[1500px] mx-auto"
    >
      <div className="hero-content flex-col lg:-mt-32 lg:flex-row">
        
        <div className=" lg:min-w-[400px]  lg:-ml-96 ">
          <h1 className="lg:text-5xl  lg:mt-5  font-bold">CAR WASH SERVICES!</h1>
          <p className="py-4 ">
            Online car washing services let customers conveniently schedule
            washes and detailing,
            <br /> often offering mobile service at their location.
          </p>
          {token ? (
            <Link to="/service">
              <button className="btn btn-sm lg:btn-md  mt-10 ">Get Started</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="btn mt-10 ">Get Started</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
