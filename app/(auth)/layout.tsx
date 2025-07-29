import React, {ReactNode} from 'react'
import {isAuthentiated} from "@/lib/actions/auth.action";
import {redirect} from "next/navigation";

const AuthLayout = async ({children}:{children:ReactNode}) => {
    const isUserAuthenticated=await isAuthentiated();
    if(isUserAuthenticated) redirect("/");
    return (
        <div className="auth-layout">{children}</div>
    )
}
export default AuthLayout
