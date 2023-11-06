import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/logo/png"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
