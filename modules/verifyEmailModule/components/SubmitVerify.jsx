"use client"
import ButtonBorder from "@/modules/Dashboard/dashboardSettings/components/ButtonBorder";
import {useSearchParams} from "next/navigation";

const SubmitVerify = ()=>{
    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    const email = searchParams.get('email')
    console.log("token",token)
    console.log("email",email)
    return(
        <div>
            <ButtonBorder>Send Verification</ButtonBorder>
            <p>token = {token}</p>
            <p>email = {email}</p>
        </div>
    )
}

export default SubmitVerify