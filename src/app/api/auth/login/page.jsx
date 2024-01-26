import { options } from "@/app/api/auth/[...nextauth]/options";
import Login_Pass from "@/components/Authentication/Login_Password/Login_Pass";
import { getServerSession } from "next-auth";

const Login = () => {
      const session = getServerSession(options)
    
    return (
        <div className='mt-36 mb-36'>
           <Login_Pass/>
        </div>
    );
};

export default Login;