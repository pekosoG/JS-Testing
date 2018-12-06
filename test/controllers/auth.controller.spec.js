var assert = require('assert');

var authController = require('../../controllers/auth.controller');

describe('AuthController',function(){

    beforeEach(function settingRoles(){
        console.log('      Running before each');
        authController.setRoles(['user']);
    })

    describe('isAuthorized',function(){
        it('should return false if not authorized',function(){
            assert.equal(false,authController.isAuthorized('admin'));
        })
        it('should return true if authorized',function(){
            assert.equal(true,authController.isAuthorized('user'));
        })
        it('should not allow get if not authorized')
        it('shout allow get if autorized')
    })

    describe('isAuthorizedAsync',function(){ //We can add .skip to not test
        it('should return false if not authorized',function(done){
            authController.isAuthorizedAsync('admin',function(isAuth){
                assert.equal(false,isAuth);
                done();
            })
        })
        it('should return true if authorized',function(done){
            if(true){ //Like an environment stuff
                this.skip();
            }
            else{
                authController.isAuthorizedAsync('user',function(isAuth){
                    assert.equal(true,isAuth);
                    done();
                })
            }
        })
    });
});