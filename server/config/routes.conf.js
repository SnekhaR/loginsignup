"use strict";

const morgan = require('morgan');
const bodyParser = require('body-parser');
const contentLength = require('express-content-length-validator');
const helmet = require('helmet');
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');


module.exports = class RouteConfig {
    static init(application) {
        let _root = process.cwd();
        let _nodeModules = '/node_modules/';
        let _clientFiles = (process.env.NODE_ENV === 'production') ? '/client/dist/' : '/client/dev/';

        application.use(express.static(_root + _nodeModules));
        application.use(express.static(_root + _clientFiles));
        application.use(bodyParser.json());
	application.use(cookieParser());
        application.use(passport.initialize());
        application.use(passport.session());
        application.use(flash());
        application.use(session({secret: 'secret',saveUninitialized: true,resave: true}));
        application.use(morgan('dev'));
        application.use(contentLength.validateMax({max: 999}));
        application.use(helmet());
    }
}
