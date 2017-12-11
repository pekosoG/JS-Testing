var assert = require('assert');

var authController = require('../../controllers/auth.controller');

describe('AuthController',function(){
    describe('isAuthorized',function(){
        it('should return false if not authorized',function(){
            assert.equal(false,authController.isAuthorized(['user'],'admin'));
        })
        it('should return true if authorized',function(){
            assert.equal(true,authController.isAuthorized(['user'],'user'));
        })
    })
    describe('isAuthorizedAsync',function(){
        it('should return false if not authorized',function(done){
            authController.isAuthorizedAsync(['user'],'admin',function(isAuth){
                assert.equal(false,isAuth);
                done();
            })
        })
        it('should return true if  authorized',function(done){
            authController.isAuthorizedAsync(['user'],'user',function(isAuth){
                assert.equal(true,isAuth);
                done();
            })
        })
    });
});