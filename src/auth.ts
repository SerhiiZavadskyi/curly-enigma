import NextAuth, { NextAuthConfig } from "next-auth";
import Resend from "next-auth/providers/resend";

import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongo";
import Google from "next-auth/providers/google";

const config: NextAuthConfig = {
	providers: [
		Resend({
			apiKey: process.env.RESEND_KEY,
			from: "noreply@mail.serhiizavadskyi.com",
			name: "Email",
		}),
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	adapter: MongoDBAdapter(clientPromise),
};

export const { auth, handlers, signIn, signOut } = NextAuth(config);
