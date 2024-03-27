const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });

const { getUserByEmail, getUserById } = require("../controller/user");
const { getUserCartId } = require("../controller/cart");

const localstrategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email, password, done) => {
    try {
      const user = await getUserByEmail(email);

      if (user === null) {
        return done(null, false);
      }

      const matchedPassword = await bcrypt.compare(password, user.password);
      if (!matchedPassword) {
        return done(null, false);
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
);

const JWTstrategy = new JWTStrategy(
  {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
    passReqToCallback: true,
  },
  async (req, jwtPayload, done) => {
    try {
      const user = await getUserById(jwtPayload.id);
      if (!user) {
        return done(null, false);
      }

      const user_id = user.id;
      const cart_id = await getUserCartId(user_id);

      if (!cart_id) {
        return done(null, false);
      }
      return done(null, { user_id, cart_id });
    } catch (error) {
      return done(error);
    }
  }
);

passport.use(localstrategy);
passport.use(JWTstrategy);

module.exports = passport;
