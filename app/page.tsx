"use client";

import { useSession } from "next-auth/react";
import SignOut from "./components/sign-out";
import SignIn from "./components/sign-in";
export default function Home() {
  const session = useSession();
  if (session.status === "loading") {
    return <div>Loading</div>;
  }
  if (session.status === "unauthenticated") {
    return (
      <div>
        <SignIn />
      </div>
    );
  } else {
    return (
      <div>
        <SignOut />
      </div>
    );
  }
}
