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
        username:{label:'Username', type:'text', placeholder:'Name'},
        email: { label: "Email", type: "text", placeholder: "Email" },
        userimage: { label: "User Image", type: "text", placeholder: "Image" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {

        try {
          const findUser = await User.findOne({ email: credentials.email })
    
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
  callbacks:{
    async signIn({user, account}){
   
          
           if(account.provider === 'google'){
            
            const userData = { username: user.name, email: user.email, userimage: user.image }
        

            try{
              const res = fetch('http://localhost:3000/api/user',{
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({userData})
              });

              if(res.ok){
                return user
              }

            }catch(err){
              console.log(err)
            }
           }

           return user;
    }
  },
  secret: process.env.SECRET,
  pages:{
    signIn:'/api/auth/usercheck'
  }
}