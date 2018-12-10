var assert = require('assert');
var authController = require('../../controllers/auth.controller');

var expect = require('chai').expect;
var should = require('chai').should();
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();

describe('AuthController',function(){

    beforeEach(function settingRoles(){
        console.log('      Running before each');
        authController.setRoles(['user']);
    })

    describe('isAuthorized',function(){
        it('should return false if not authorized',function(){
            var isAuth = authController.isAuthorized('admin');
            //expect(isAuth).to.be.false;
            isAuth.should.be.false;
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

    describe('isAuthorized Promise',function(){ //We can add .skip to not test
        it('should return false if not authorized promise',function(){
            return authController.isAuthorizedPromised('admin').should.eventually.be.false;
        })
        
    });
});