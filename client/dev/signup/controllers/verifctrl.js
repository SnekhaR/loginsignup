;(function(ng){
'use strict';
ng.module('MyApp').controller("verifCtrl",['$log','$routeParams','VerifDAO', function($log,$routeParams,VerifDAO)
{
	
      
	
	  
	  var verifa = new Object;
	  var vm = this;
	 	verifa.a = $routeParams.id;
	 	vm.msg1 = "Please wait...";
		console.log(verifa);
	VerifDAO
            .create(verifa)
            .then(function(verif)
            {   console.log("frm verctrl then");
            	console.log(verif.email);
            	if(verif.email)
            	{       
			
			vm.msg1 = ""
            		vm.msg2 = "Email is verified and registered";
			
			vm.msg4 = "click here to login :-)";
            	}

            })
            .catch(function(error)

            	{       
			vm.msg = ""
		
            		vm.msg2 = "not verified";
			vm.msg3 ="click here to register again :-/";
            	});
          return vm ;
	

}]);
}(window.angular));
