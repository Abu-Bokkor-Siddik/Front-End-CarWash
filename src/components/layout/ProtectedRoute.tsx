import { currentToken } from "@/redux/features/userSlice";
import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react"
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({children}:{children:ReactNode}) => {
  const token=useAppSelector(currentToken)
  console.log(token)
  if (!token) {
    return <Navigate to='/login' replace={true}></Navigate>
  }
  
    return children;

}

export default ProtectedRoute
