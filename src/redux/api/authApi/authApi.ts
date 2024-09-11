import { baseApi } from "../baseApi";

const authApi =baseApi.injectEndpoints({
    endpoints:(builder)=>({
        signUp:builder.mutation({
            query:(userinfo)=>{
                // console.log(userinfo,'user info ')
                return{
                    url:'api/auth/signup',
                    method:'POST',
                    body:userinfo
                }
            }
        }),
        login:builder.mutation({
            query:(loginInfo)=>{
                console.log(loginInfo,'user info ')
                return{
                    url:'api/auth/login',
                    method:'POST',
                    body:loginInfo
                }
            }
        })
    })
})
export const {useSignUpMutation,useLoginMutation}=authApi;