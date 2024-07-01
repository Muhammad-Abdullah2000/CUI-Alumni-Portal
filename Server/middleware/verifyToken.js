import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, 'cui');
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Unauthorized' });
    }
};

export {
    verifyToken
}
