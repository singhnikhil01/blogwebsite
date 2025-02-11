// import { connectDB } from "@/lib/mongodb";
// // import User from "@/models/User";
// import type { NextAuthOptions } from "next-auth";
// import credentials from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import User from "@/models/Users";


// export const authOptions: NextAuthOptions  = {
//     providers: [
//       credentials({
//         name: "Credentials",
//         id: "credentials",
//         credentials: {
//           email: { label: "Email", type: "text" },
//           password: { label: "Password", type: "password" },
//         },
//         async authorize(credentials) {},
//       }),
//     ],
//     session: {
//       strategy: "jwt",
//     }
//   };


// const authorize =async ()=>{
//     await connectDB();
// const user = await User.findOne({
//   email: credentials?.email,
// }).select("+password");

// if (!user) throw new Error("Wrong Email");

// const passwordMatch = await bcrypt.compare(
//   credentials!.password,
//   user.password
// );

// if (!passwordMatch) throw new Error("Wrong Password");
// return user;
// }