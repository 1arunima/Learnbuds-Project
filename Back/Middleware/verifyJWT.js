const jwt = require('jsonwebtoken')

// const verifyJWT = (req, res, next) => {
//     const authHeader = req.headers.authorization || req.headers.Authorization

//     if (!authHeader?.startsWith('Bearer ')) {
//         return res.status(401).json({ message: 'Unauthorized' })
//     }

//     const token = authHeader.split(' ')[1]

//     jwt.verify(
//         token,
//         process.env.ACCESS_TOKEN_SECRET,
//         (err, decoded) => {
//             if (err) return res.status(403).json({ message: 'Forbidden' })
//             req.user = decoded.UserInfo.username
//             req.roles = decoded.UserInfo.roles
//             next()
//         }
//     )
// }


// const authenticateJWT = async (req, res, next) => {
//     const token = req.cookies.jwt;
  
//     if (!token) {
//       return res.status(401).json({ message: 'token not found' });
//     }
  
//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       console.log('Decoded token:', decoded);
//       const user = await User.findById(decoded.userid);
//       console.log('Found user:', user);
//       if (!user) {
//         return res.status(401).json({ message: 'Unauthorized ,user not found' });
//       }
//       req.user = user;
//       next();
//     } catch (err) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }
//   };

module.exports = verifyJWT 