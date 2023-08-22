// if user is not logged in then it will redirect to login page
exports.requireLogin =(res,req,next)=>{
    if (req.session && req.session.user){
        return next();
    }
    else{
        return req.redirect('/login')
    }
}