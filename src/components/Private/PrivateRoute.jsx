'use client'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const PrivateRoute = ({children}) => {
    
    const {data: session, status} = useSession();
    const router = useRouter();

    useEffect(() => {
        // Check if session is loaded and not authenticated
        if (status === "loading") return; // Wait for session to load
        if (!session) {
            router.push('/api/auth/register');
        }
    }, [session, status, router]); // Add dependencies to useEffect

    return session ? children : null;
};

export default PrivateRoute;