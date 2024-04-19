import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return <SignIn afterSignInUrl={
        "https://auth-deploy-tau.vercel.app/dashboard"} />;
}