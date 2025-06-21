import jwt from 'jsonwebtoken'; // Import jsonwebtoken for token verification`

const JWT_SECRET ='It_is_a_secret'; // Secret key for JWT, should be stored securely in environment variables
export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];// authHeader is used to retrieve the authorization header from the request headers
  // The authorization header typically contains a token that is used to authenticate the user
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token> authHEader is usually in the format "Bearer <token>", so we split it to get the token part
  // If the authorization header is present, we split it by space and take the second part, which is the token
  if (!token) return res.status(401).json({ error: 'No token provided' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user; // Attach user info to request
    next();
  });
};
// jwt.verify is used to verify the token using the secret key, if the token is valid, it decodes the token and attaches the user information to the request object
// If the token is invalid or expired, it sends a 403 status code with an error message
export default authenticateToken; // Export the middleware function so it can be used in other files, mainly in route files to protect routes that require authentication
// This middleware function is used to authenticate the user by verifying the JWT token provided in the request headers