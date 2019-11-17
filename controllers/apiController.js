var User = require("../models/users.js");
var bodyParser = require('body-parser');

module.exports = function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.get('/api/user',function(req,res){

        User.find ({},function(err , user){

            if(err) throw err;

            res.send(user);

        })

    })
    app.get('/api/user/:id', function(req, res) {
       
        User.findById({id: req.params.id }, function(err, user) {
            if (err) throw err;
            
            res.send(user);
        });
         
     });
     app.post('/api/saveUser', function(req, res) {
       console.log(req,"req--------------------------------------------");
       var newUser = User({
        id: req.body.id,
        num1: req.body.num1 , 
        num2: req.body.num2,
        multiply: req.body.multiply
       })

       newUser.save(function(err){
        if (err) throw err;
        res.send("Success");
       })
         
     });



}