import jwt from 'jsonwebtoken';

export function jwtGenerator (id:String, email:String){
    return jwt.sign({id, email}, process.env.JWT_SECRET!, {
        expiresIn: "15m"
    })
}