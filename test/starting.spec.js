var assert = require('assert');

describe('Basic Mocha Test',function(){
    it('should NOT throw some errors',function(){
        try{
            //assert.equal(2,3);
            assert.equal(2,2);
        }catch(err){
            throw({message:'thrown error'});
        }
    });

    it('should deal with objects properties',function(){
        var object =  { name: 'Pekoso', gender: 'male'};
        object.should.have.property('name').equal('Pekoso');
    });

    it('should deal with two objects',function(){
        var object = { name: 'Pekoso', gender: 'male'};
        var object2 = object;

        object.should.deep.equal(object2);
    });
});