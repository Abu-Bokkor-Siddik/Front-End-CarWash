/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoginMutation } from "@/redux/api/authApi/authApi";
import { setName, setPassword } from "@/redux/features/loginSlice";
import { setToken, setUser } from "@/redux/features/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { varifyToken } from "@/utils/varifyToken";
import { Link, useNavigate } from "react-router-dom";
import {  toast } from 'sonner'
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const token=useAppSelector((state:RootState)=>state.user.token)
  // console.log(token,'token here')
  const [login] = useLoginMutation();

  // console.log(data)
  const handleLogin = async (e: any) => {
    e.preventDefault();
   const toasterId= toast.loading("Login in")
    const email = e.target.email.value;
    const password = e.target.password.value;
   try {
    const res = await login({ email, password }).unwrap();
    // console.log(res?.token,'all response')
    const user = varifyToken(res.token);
    // console.log(user, "info decode");
    await dispatch(setToken(res?.token));
    await dispatch(setUser(user));
    toast.success("successfully login in",{id:toasterId,duration:2000})
    navigate("/");
   } catch (error) {
    toast.error('some thing is wrong',{id:toasterId,duration:2000})
   }
    e.target.reset();
    
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <p className="text-center text-3xl font-semibold">Login</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  onChange={(e) => dispatch(setName(e.target.value))}
                  placeholder="email"
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
                  onChange={(e) => dispatch(setPassword(e.target.value))}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label"></label>
              </div>
              <p>
                If you have no account{" "}
                <Link className="text-blue-800" to="/sign">
                  Go Register
                </Link>
              </p>
              <div className="form-control ">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
