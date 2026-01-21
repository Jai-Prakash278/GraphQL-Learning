const jwt = require("jsonwebtoken")

const getUserFromToken = (req) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) return null;

    const token = authHeader.replace("Bearer ", "");

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        return decode.userId;
    } catch (err) {
        console.error("Invalid or expired token");
        return null
    }
}

module.exports = { getUserFromToken }