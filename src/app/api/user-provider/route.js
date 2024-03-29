import User from "@/app/(models)/User";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
       const body = await req.json();
       const userDetails = body.userData;
    
       // check if ther is any duplicate email
       const isDuplicate = await User.findOne({ email: userDetails.email })
       .lean()
       .exec()

       if(isDuplicate){
        return NextResponse.json({ message: 'User is already in Database' }, {status: 409})
       }

       await User.create(userDetails)
       return NextResponse.json({message: 'Registratin successful!'}, {status: 201})
    }catch(error){
        console.log(error)
        return NextResponse.json({message: 'Error', error}, {status: 500})
    }
}