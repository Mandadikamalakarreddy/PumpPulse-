import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      HomePage
      <SignedIn>
        <SignOutButton/>
      </SignedIn>
      <SignedOut>
        <SignInButton/>
      </SignedOut>
    </main>
  );
}
