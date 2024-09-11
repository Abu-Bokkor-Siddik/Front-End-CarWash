/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSignUpMutation } from "@/redux/api/authApi/authApi";
import { setAddress, setEmail, setName, setNumber, setPassword, setRole } from "@/redux/features/RegisterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Link } from "react-router-dom";

const SignUp = () => {
  const dispatch= useAppDispatch();
    // const {name,number,password,address,role,email}=useAppSelector((state)=>state.register)
  const [signUp,{data}]=useSignUpMutation()
  console.log(data,'signup response')
    const handleSignUp = async(e: any) => {
    e.preventDefault();
    const name =e.target.name.value
    const email = e.target.email.value;
    const phone = e.target.number.value;
    const address = e.target.address.value;
    const password = e.target.password.value;
    const role='user';
    await signUp({name,email,password,phone,role,address})
    e.target.reset()
    dispatch(setRole("user"))
  
    // console.log(name,email,number,address,password)
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  
                  onChange={(e)=>dispatch(setName(e.target.value))}
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                 
                  onChange={(e)=>dispatch(setEmail(e.target.value))}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Phone Number (11)</span>
                </label>
                <input
                  name="number"
                  type="text"
                  
                  onChange={(e)=>dispatch(setNumber(e.target.value))}
                  placeholder="number"
                  className="input input-bordered"
                  maxLength={11}
                  pattern="\d{11}"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  name="address"
                  type="text"
                
                  onChange={(e)=>dispatch(setAddress(e.target.value))}
                  placeholder="Address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  
                  onChange={(e)=>dispatch(setPassword(e.target.value))}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <p>
                If you hava an account{" "}
                <Link className="text-blue-800" to="/login">
                  Go Login
                </Link>
              </p>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
