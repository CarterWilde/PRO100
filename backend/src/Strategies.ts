import { Strategy as LocalStrategy } from "passport-local"
import User from "./models/User";

export const localStrategy = new LocalStrategy({ usernameField: 'Email', passwordField: 'Password' }, (email, password, done) => {
    User.findOne({ Email: email }).exec().then(user => {
        if (!user) return done(null, false, { message: "Incorrect username." })
        if (user.Password !== password) return done(null, false, { message: "Incorrect password." })
        return done(null, user);
    }).catch(error => {
        return done(error);
    });
});