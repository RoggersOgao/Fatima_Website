import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/site","/dashboard/landing"],
  async afterAuth(auth, req) {
    const url = new URL(req.url, `http://${req.headers.get('host')}`);
    const searchParams = url.searchParams.toString();
    const hostname = req.headers.get('host');
    console.log("Hostname:", hostname);
    console.log("Pathname:", url.pathname);
    console.log("Request URL:", req.url);
    const pathWithSearchParams = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ''}`;
  
    if (!hostname) {
      console.error("Hostname is not defined.");
      return NextResponse.json("Hostname is not defined.");
    }

    const customSubDomain = hostname
      .split(`${process.env.NEXT_PUBLIC_DOMAIN}`)
      .filter(Boolean)[0];
  
    console.log("Custom Subdomain:", customSubDomain);
  
    if (customSubDomain) {
      return NextResponse.rewrite(
        new URL(`/${customSubDomain}${pathWithSearchParams}`, req.url)
      );
    }
  
    if (url.pathname === '/') {
      console.log("Rewriting root URL to /site");
      return NextResponse.rewrite(new URL('/site', req.url));
    }
  
    if (url.pathname === '/sign-in' || url.pathname === '/sign-up') {
      return NextResponse.redirect(new URL(`/dashboard/sign-in`, req.url));
    }
  
    if (url.pathname === '/dashboard') {
      // Redirect to sign-in page if user is not authenticated
      if (auth.user) {
         // Redirect to dashboard home if user is authenticated
         return NextResponse.redirect(new URL(`/dashboard/landing`, req.url));
        
      } else {
        console.log("Redirecting to sign-in page");
        return NextResponse.redirect(new URL(`/dashboard/sign-in`, req.url));
      }
    }
    
    if (url.pathname.startsWith('/dashboard')) {
      return NextResponse.rewrite(new URL(`${pathWithSearchParams}`, req.url))
    }
  
    console.log("No match found, passing through.");
    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
