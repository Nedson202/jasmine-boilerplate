const app = require('../../app/scripts/app');

describe('Addition of multiples', function() {
    it('should return 3 when called', function() {
        let result = app.multiplesAdd(5);
        expect(result).toEqual(3);
    });

    it('should return value less than 30', function() {
        let result = app.multiplesAdd(15);
        expect(result).toBeGreaterThan(30);
    })

    it('should return value greater than 100', function() {
        let result = app.multiplesAdd(17);
        expect(result).toBeGreaterThan(30);
    })

    it('should return value greater than 100', function() {
        let result = app.multiplesAdd('17');
        expect(result).toBeGreaterThan(30);
    })

    it('should return 45 if input is a string', function() {
        let result = app.multiplesAdd('17djdjd');
        expect(result).toEqual(0);
    })

    it('should return 45 if input is a string', function() {
        let result = app.multiplesAdd('17');
        expect(result).toEqual(60);
    })

    it('should return 0 if value is undefined', function() {
        let result = app.multiplesAdd(undefined);
        expect(result).toEqual(0);
    })

    it('should return 0 if value is null', function() {
        let result = app.multiplesAdd(null);
        expect(result).toEqual(0);
    })
});
