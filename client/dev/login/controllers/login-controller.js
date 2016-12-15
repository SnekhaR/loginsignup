;(function(ng) {
  'use strict';

  ng.module('Dashboard')
    .controller('login-controller', ['$log','login','logindao',
      function($log,login,logindao) {
        var self = this;
       self.user= new login();
       self.authenticate=function(user)
          {console.log("client controller");
	   console.log(user); 
	     logindao
		.authenticate(user)
                .then(function(){
 console.log('client controller');                   
 })
                 .catch($log.error);

                     };
           
      }
    ]);
}(window.angular));


