import { signIn } from "next-auth/react";

export default function SignIn() {
  const HandleSignIn = async () => {
    await signIn("github", { redirectTo: "/" });
  };

  return (
    <button
      type="submit"
      className="p-2 border-2 bg-gray-200 m-2"
      onClick={HandleSignIn}
    >
      SignIn
    </button>
  );
}
