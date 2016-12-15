

;(function(ng){
'use strict';

ng.module('Dashboard').controller("myCtrl",['$scope','$resource','$log','Signup',
      'SignupDAO',function($scope,$resource,$log,Signup,SignupDAO) {
var vm = this;
  $scope.myFunc = function () {

          
        
          
          var x  = new Object();
	  var y  = new Object();

          x.firstname = vm.firstname;
          x.lastname = vm.lastname;
          x.email = vm.email;
          x.username = vm.username;
          x.password = vm.password;
          var valid = Signup.isValid(x.password);
          console.log(valid);  
          var usernamevalid = Signup.username(x.username);
          console.log(usernamevalid);           
          var emailvalid = Signup.email(x.email);
          console.log(emailvalid);
          var sumup = (valid && usernamevalid);
          if(sumup)
          {
            vm.regi= "please wait...";
          SignupDAO
            .create(x)
            .then(function(y)
            {
              console.log('return clientController');
              console.log(y);
                vm.ret = "verification email is sent to the Mail ID mentioned in the above form";
		vm.regi = "";
		

              
            })

                
            .catch($log.error);
            

          }
         else
         {
          vm.error = "Error Occurred :-/";
	  vm.errorr="Please Try Again";
        }
         
       

      

      vm.firstname="";
      vm.lastname="";
      vm.email="";
      vm.username="";
      vm.password="";
    
}

}]);
}(window.angular));
 

