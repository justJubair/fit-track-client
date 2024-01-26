import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/(models)/User";
import bcrypt from 'bcrypt';

export const options = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {

         console.log(credentials.email, credentials.password)
        try {
          const findUser = await User.findOne({ email: credentials.email })
          console.log(findUser)

          //validate user
          const validatePass = await bcrypt.compare( credentials.password, findUser.password )
          //return validated user
          if(validatePass){
            delete findUser.password
            return findUser;
          }
        } catch (error) {
          console.log(error)
        }
        return null;
      }
    })
    // ...add more providers here
  ],
  secret: process.env.SECRET,
  pages:{
    signIn:'/api/auth/usercheck'
  }
}