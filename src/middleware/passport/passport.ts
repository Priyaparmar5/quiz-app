import passport from "passport";
import passportStrategy, { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import User, { IUser } from "../../models/Users";

const ExtractJWT = passportStrategy.ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "dWVfANWoYSa7KeWRsnz9OVmQyEF7FFg+",
};

interface UserPayload {
  email: string;
}

export const findOneUser = (criteria: any) => {
  return User.findOne(criteria).lean();
};

console.log("hi,,");

passport.use("jwt",new JWTStrategy(opts, async (payload: UserPayload, done: any) => {
    try {
      console.log("inn");
      
      const user = await findOneUser({ email: payload.email });
      if (!user) {
        return done(null, false);
      } else {
        return done(null, user);
      }
    } catch (err) {
      console.error(err);
      return done(err);
    }
  })
);

export default passport;

