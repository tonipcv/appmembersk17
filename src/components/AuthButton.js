// src/components/AuthButton.js
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const AuthButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  );
};

export default AuthButton;
