import  jwt, { JwtPayload }  from "jsonwebtoken";

export const decodeToken = (token:string): string | JwtPayload => jwt.verify(token,process.env.JWT_SECRET!)
