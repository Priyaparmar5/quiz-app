// userAuth.ts
import passport from "passport";
import { Request, Response, NextFunction } from "express";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("jwt", { session: false }, (err:any, user:any, info:any) => {
        if (err) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
        console.log(user,"ussss");
        
        if (!user) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        req.user = user; 
        next();
    })(req, res, next);
};

export default authMiddleware;
