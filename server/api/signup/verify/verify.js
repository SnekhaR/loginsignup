
var bcrypt = require('bcryptjs');
module.exports.check = function(req,rand)
{
if(req.a == rand)
{
return true;
}
else
{
false
}
}

module.exports.createHash = function(x)
{
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(x.password, salt);
  var y = new Object();
  y.firstname = x.firstname;
  y.lastname = x.lastname;
  y.email = x.email;
  y.username = x.username;
  y.password = hash;
  return(y);
}
