const Admin = require('./Admin');
const jwt = require('jsonwebtoken');

const verifyAdmin = async (req, res, next) => {
    try {
        
    const authHeader = req.header('Authorization');
    
    if (!authHeader) {  
      return res.status(401).json({ message: 'Authorization header is missing' });
    }
       
    const token = authHeader.replace('Bearer ', '');

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findOne({username : decoded.username});

    if(!admin || admin.club != "Lambda")
        return res.status(403).json({ message: 'Forbidden. You do not have access to this page.' });

    next();
    } catch (err){
        console.error("Error validating admin status.", err);
        res.status(500).json({message: "Server error."});
    }
}

module.exports = verifyAdmin;