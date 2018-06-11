const app = require('../../app/scripts/app');

describe('Addition of multiples', function() {
    it('should return 3 when called', function() {
        let result = app.inputChecker(7);
        expect(result).toEqual(14);
    });

    it('should return value less than 30', function() {
        let result = app.inputChecker(15);
        expect(result).toBeLessThan(100);
    })

    it('should return value greater than 100', function() {
        let result = app.inputChecker(17);
        expect(result).toBeGreaterThan(30);
    })

    it('should return error if input is a string', function() {
        let result = app.inputChecker('17djdjd');
        expect(result).toEqual('Please enter a positive number');
    })

    it('should return error if input is 0', function() {
        let result = app.inputChecker(0);
        expect(result).toEqual('Please enter a number greater than 0');
    })

    it('should return error if input is a negative ', function() {
        let result = app.inputChecker(-100);
        expect(result).toEqual('Please enter a number greater than 0');
    })

    it('should return error if value is undefined', function() {
        let result = app.inputChecker(undefined);
        expect(result).toEqual('Please enter a positive number');
    })

    it('should return error if value is null', function() {
        let result = app.inputChecker(null);
        expect(result).toEqual('Please enter a positive number');
    })
});
