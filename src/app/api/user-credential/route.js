import User from "@/app/(models)/User";
import { NextResponse } from "next/server";
import bcrypt, { hash } from 'bcrypt';

<<<<<<< HEAD:src/app/api/user/route.js
export async function POST(req) {
    try {
        const body = await req.json();
        const userDetails = body.userData;
=======
export async function POST(req){
    try{
       const body = await req.json();
       const userDetails = body.userData;
>>>>>>> 3260371416e1dcb270d3b3a3e96228af66ac4ca2:src/app/api/user-credential/route.js

        console.log(userDetails)
        // check if ther is any duplicate email
        const isDuplicate = await User.findOne({ email: userDetails.email })
            .lean()
            .exec()

        if (isDuplicate) {
            return NextResponse.json({ message: 'User is already in Database' }, { status: 409 })
        }

<<<<<<< HEAD:src/app/api/user/route.js
        //    const hashPassword = await bcrypt.hash(userDetails?.password, 10);
        //    userDetails?.password = hashPassword;
=======
       const hashPassword = await bcrypt.hash(userDetails.password, 10);
       userDetails.password = hashPassword;
>>>>>>> 3260371416e1dcb270d3b3a3e96228af66ac4ca2:src/app/api/user-credential/route.js

        await User.create(userDetails)
        return NextResponse.json({ message: 'Registratin successful!' }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Error', error }, { status: 500 })
    }
}