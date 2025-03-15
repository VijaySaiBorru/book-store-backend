const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET_KEY;

const verifyAdminToken = (req, res, next) => {
    const authHeader = req.headers['authorization']; // Extracts the Authorization header
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Access Denied. No token provided" });
    }

    const token = authHeader.split(" ")[1]; // Extract the actual token part
    
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        req.user = user; // Attach user info to request
        next(); // Proceed to the next middleware or route handler
    });
};

module.exports = verifyAdminToken;
