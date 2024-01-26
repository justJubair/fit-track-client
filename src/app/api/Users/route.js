import User from "@/app/(models)/User";
import { NextResponse } from "next/server";
import bcrypt, { hash } from 'bcrypt';

export async function POST(req){
    try{
       const body = await req.json();
       const userData = body.formData;
    
       console.log(userData)
       
       if(!userData?.email || !userData.password){
        return NextResponse.json(
            {message: 'Please fill all the fields'}, {status: 400}
        )
       }

       // check if ther is any duplicate email
       const isDuplicate = await User.findOne({ email: userData.email })
       .lean()
       .exec()

       if(isDuplicate){
        return NextResponse.json({ message: 'User is already in Database' }, {status: 409})
       }

       const hashPassword = await bcrypt.hash(userData.password, 10);
       userData.password = hashPassword;

       await User.create(userData)
       return NextResponse.json({message: 'Registratin successful!'}, {status: 201})
    }catch(error){
        console.log(error)
        return NextResponse.json({message: 'Error', error}, {status: 500})
    }
}