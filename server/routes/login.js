
"use strict";

const LoginRoutes = require('../api/login/routes/authenticate-route.js');


const StaticDispatcher = require('../commons/static/index');


module.exports = class Routes {
   static init(app, router) {
     LoginRoutes.init(router);

     router
       .route('*')
       .get(StaticDispatcher.sendIndex);

    

     app.use('/', router);
   }
}


