var User = require('../models/user');
module.exports = function(router){

    router.post('/users', function(req, res){  
        var user = new User(); 
        user.username = req.body.username;
        user.password = req.body.password;
        user.email    = req.body.email; 
        
        if(req.body.email == null || req.body.email == '' || req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password == '') {
            res.send('Ensure username, email and password are not empty!');
        }
        else {
            user.save(function(err){
                if(err){
                    res.send("Username or email already exist");
                } else {
                    res.send('user created'+user.username);
                } 
            });
        }
    });
    return router;
}