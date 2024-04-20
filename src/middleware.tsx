import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [''], // Add any public routes here
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};