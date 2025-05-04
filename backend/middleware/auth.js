const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
    // Check if user is logged in via session
    if (!req.session || !req.session.userId) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }
    
    try {
        // Attach user to request
        req.user = await User.findById(req.session.userId);
        if (!req.user) {
            return next(new ErrorResponse('User not found', 404));
        }
        next();
    } catch (err) {
        next(err);
    }
};