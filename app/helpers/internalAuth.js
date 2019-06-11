import passport from 'passport'

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.status(401).json({ message: 'Unautorized request' })
  }
}


console.log("i am in app>>HELPER>> internal auth");
const authenticate = passport.authenticate('internal', { session: false })

export { isAuthenticated, authenticate }
