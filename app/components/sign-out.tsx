import { signOut } from "next-auth/react";

export default function SignIn() {
  const HandleSignOut = async () => {
    await signOut({ redirectTo: "/" });
  };

  return (
    <button
      type="submit"
      className="p-2 border-2 bg-gray-200 m-2"
      onClick={HandleSignOut}
    >
      SignOut
    </button>
  );
}
