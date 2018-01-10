const app = require('../../app/scripts/app');

describe('add', function() {
    it('should return 2 when called', function() {
        let result = app.add(1,1);
        expect(result).toEqual(2);
    });

    it('should return less than 3', function() {
        let result = app.add(1,1);
        expect(result).toBeLessThan(3);
    })
});
