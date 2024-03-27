// passport.ts
import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import User from "../../models/Users";

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "dWVfANWoYSa7KeWRsnz9OVmQyEF7FFg+",
};

passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
        try {          
            const user = await User.findById(jwt_payload.userId);
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (err) {
            return done(err, false);
        }
    })
);
