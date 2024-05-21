module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        let returnTo = req.originalUrl;
        returnTo = returnTo.replace('/reviews', '');
        req.session.returnTo = returnTo
        req.flash('error', 'You must be signed in first!');
        return res.redirect('/login');
    }
    next();
};

module.exports.storeReturnTo = (req, res, next) => {
    if (req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
    }
    next();
};
