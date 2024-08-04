import db from "@/app/db";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { Keypair } from "@solana/web3.js";
import { authConfig } from "@/app/lib/auth";

//Signup/signin with google
const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }