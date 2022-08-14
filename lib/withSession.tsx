import { withIronSession } from "next-iron-session";
import { NextApiHandler, GetServerSideProps } from "next";

export function withSession(handler: NextApiHandler | GetServerSideProps) {
  return withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: "blog",
    cookieOptions: { secure: false },
  });
}
