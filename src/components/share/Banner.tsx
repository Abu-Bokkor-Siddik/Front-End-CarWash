

const Banner = () => {
 
  return (
    <div style={{
      backgroundImage: "url(https://i.ibb.co.com/1qrk7Qb/Orange-and-Brown-Modern-Car-Wash-Service-Banner-1.png)",
      backgroundSize: "contain",
      backgroundRepeat:'no-repeat'
     
    }} className="hero  rounded-lg min-h-[900px]  max-w-[1500px] mx-auto">
  <div className="hero-content flex-col -mt-32 lg:flex-row">
    {/* <img
      src="https://i.ibb.co.com/tzwdMgY/services-main.png"
      className="max-w-sm rounded-lg shadow-2xl" /> */}
    <div className=" min-w-[400px]  lg:-ml-96 ">
      <h1 className="text-5xl   font-bold">CAR WASH SERVICES!</h1>
      <p className="py-4 ">
      Online car washing services let customers conveniently schedule washes and detailing,<br /> often offering mobile service at their location.
      </p>
      <button className="btn mt-10 ">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Banner;
