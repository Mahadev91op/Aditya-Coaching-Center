// middleware.js
export { default } from "next-auth/middleware";

// Sirf in pages ko protect karo
export const config = { matcher: ["/dashboard/:path*"] };