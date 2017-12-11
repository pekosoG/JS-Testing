var assert = require('assert');

var authController = require('../../controllers/auth.controller');

describe('AuthController',function(){
    describe('isAuthorized',function(){
        it('shoul return false if not authorized',function(){
            assert.equal(false,authController.isAuthorized(['user'],'admin'));
        })
        it('shoul return true if authorized',function(){
            assert.equal(true,authController.isAuthorized(['user'],'user'));
        })
    });
});