const JWT = require('jsonwebtoken');
const  {tokenKey} = require('../utils/db');
/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */

function authMiddleware (req,res,next) {
     const token = req.headers.authorization?.split(' ')[1]
     if (!token) {
          return res.status(401).send('unauthorize')
     }
     try {
          const verify = JWT.verify(token, tokenKey)
          if (verify) {
               req.user = {
                    userId: verify.userId,
                    email: verify.email
               }
               next()
          } else {
               return res.status(401).send('unauthorize')
          }
     } catch (error) {
          return res.status(401).send('unauthorize')
     }
}
module.exports = { authMiddleware }


/*
function authMiddleware(req, res, next) {
     const token = req.headers.authorization?.split(' ')[1]

     if (!token) {
          return res.status(401).send('unauthorize')
     }
     try {
          const verify = jwt.verify(token, tokenKey)
          if (verify) {
               req.user = {
                    userId: verify.userId,
                    email: verify.email
               }
               next()
          } else {
               return res.status(401).send('unauthorize')
          }
     } catch (error) {
          return res.status(401).send('unauthorize')
     }

}

module.exports = { authMiddleware }
*/