import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-w-full mt-60 text-center  flex justify-center items-center min-h-full">
      <div>
        <h1 className="text-7xl  font-bold mx-auto text-center my-5">404</h1>
        <p className="text-2xl mb-5">Page Not Found</p>
        <Link to="/">
          <button className="btn btn-primary mx-5">Home</button>
        </Link>
        <Link to="/login">
          <button className="btn btn-primary mx-5">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
