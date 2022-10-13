import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "../../../lib/dbConnect";
import User from "../../../models/user";
import bcrypt from "bcryptjs";
import { signIn } from "next-auth/react";
import Company from "../../../models/company";

export default NextAuth({
  providers: [
    CredentialsProvider({
      type: "credentials",
      //   credentials: {
      //     email: {
      //       label: "Email Address",
      //       placeholder: "Please enter your email address",
      //       required: true,
      //     },
      //     password: {
      //       label: "Password",
      //       type: "password",
      //       placeholder: "############",
      //       required: true,
      //     },
      //   },
      async authorize(credentials) {
        //connect to database
        await db.connect();

        let user;

        // find user
        if (credentials.loginAs === "user") {
          user = await User.findOne({
            email: credentials.email,
          });
        } else if (credentials.loginAs === "plastic-dealer") {
          console.log(credentials);
          user = await Company.findOne({ email: credentials.email });
        }

        console.log(user);
        // disconnect database
        await db.disconnect();

        // check for user's password
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            emaila: user.email,
          };
        }
        throw new Error("Invalid email or password");
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
});
