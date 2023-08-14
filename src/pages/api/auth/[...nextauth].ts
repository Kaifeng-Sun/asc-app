import NextAuth from "next-auth"
import {options} from "./options"

export default handler = NextAuth(options);

// export {handler as GET, handler as POST}