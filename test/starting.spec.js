var assert = require('assert');

describe('Basic Mocha Test',function(){
    it('should NOT throw some errors',function(){
        try{
            //assert.equal(2,3);
            assert.equal(2,2);
        }catch(err){
            throw({message:'thrown error'});
        }
    })
});