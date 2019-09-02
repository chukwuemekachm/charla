import { Application } from 'express-serve-static-core';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const {
  GOOGLE_CLIENT_ID = '',
  GOOGLE_CLIENT_SECRET = '',
  GOOGLE_CALLBACK_URL = 'http://localhost:3000/api/v1/oauth/google-callback',
} = process.env;

const googleStrategy = new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_CALLBACK_URL,
    scope: ['profile', 'email'],
  },
  function(accessToken, refreshToken, { _json }, done) {
    const { given_name, family_name, email, picture } = _json;
    const profile = {
      email,
      first_name: given_name,
      last_name: family_name,
      picture_url: picture,
    };

    return done(null, profile);
  },
);

export function initializeOAuth(app: Application) {
  passport.use(googleStrategy);

  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

  app.use(passport.initialize());
  app.use(passport.session());
}
