import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return <SignUp afterSignUpUrl={"https://auth-deploy-tau.vercel.app/dashboard"} />;
}