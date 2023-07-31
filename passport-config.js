const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initialize(passport, getUserByEmail) {
    const authenticateUser = (email, password, done) => {
        const user = getUserByEmail(email)
        if (user == null) {
            return done(null, { message: 'No user with that Email' })
        }
        try {
            if (bcrypt.compare(password, user.password)) {
                return done(null, user)
            }
            else {
                return done(null, user, { message: 'Password incorrect' })
            }
        } catch (error) {
            return done(error)
        }
    }

    // passport.use(new LocalStrategy({ usernameField: 'email' }), authenticateUser)
    // passport.serializeUser((user, done) => { })
    // passport.deSerializeUser((user, done) => { })
}
module.exports = initialize