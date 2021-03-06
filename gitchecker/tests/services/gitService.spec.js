var chai = require('chai'),
    sinon = require('sinon'),
    https = require('https');
var PassThrough = require('stream').PassThrough;

chai.should();
var gitService = require('../../services/gitService')();

describe('gitService',function(){
    describe('GetUser',function(){

        beforeEach(function(){
            this.requests = sinon.stub(https,'request');
        })

        it('should return user and repos',function(){
            var gitJson = {login:'pekosoG'};
            var repoJson = {}
            var gitResponse = new PassThrough();
            gitResponse.write(JSON.stringify(gitJson));
            gitResponse.end();

            var repoResponse = new PassThrough();
            repoResponse.write(JSON.stringify(repoJson));
            repoResponse.end();

            this.requests
                .onFirstCall().callsArgWith(1,gitResponse).returns(new PassThrough())
                .onSecondCall().callsArgWith(1,repoResponse).returns(new PassThrough());

            return gitService.getUser('pekosog').then(
                (user)=>{ //Sin el arrow, nos truena el this.requests because context....
                    //console.log(user);
                    var params = this.requests.getCall(0).args;
                    params[0].headers['User-Agent'].should.equal('gitExample');

                    this.requests.getCall(1).args[0].path.should.equal('/users/pekosog/repos');

                    user.login.should.equal('pekosoG');
                    user.should.have.property('repos');
                }
            );
        })

        afterEach(function(){
            this.requests.restore();
        })
    })
});