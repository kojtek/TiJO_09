describe('app', function () {
    'use strict';

    var answer = window.app;

    describe('calculateArea', function () {
        it('should should...', function () {
            expect(answer.calculateArea(2,55,3,'Success', 'Error')).toEqual({area: 49, message: 'Success'});
            expect(answer.calculateArea(27,2,1,'Success', 'Error')).toEqual({area: 25, message: 'Success'});
            expect(answer.calculateArea(21,2,0,'Success', 'Error')).toEqual({area: 21, message: 'Success'});

        });
        it('should return false if some of arguments are incorrect', function () {
            expect(answer.calculateArea("fa",2,1,"af","asf")).toEqual(false);
            expect(answer.calculateArea(2,"fad",1,"af","asdf")).toEqual(false);
            expect(answer.calculateArea(2,2,"fasd","adf","asdf")).toEqual(false);
            expect(answer.calculateArea(2,2,2,2,"asdf")).toEqual(false);
            expect(answer.calculateArea(2,2,2,"asdf",2)).toEqual(false);
        });
        it('should return Big null if area equal 0', function () {
            expect(answer.calculateArea(0,0,0,"Success","Error")).toEqual({area: 0, message:'Big null'});
        });
        it('should return message Error if area is less than  0', function () {
            expect(answer.calculateArea(4,2,3,"Success","Error")).toEqual({area: -2, message:'Error'});
        });
        it('should return message Succes if area is equal 1', function () {
            expect(answer.calculateArea(5,2,2,"Success","Error")).toEqual({area: 1, message:'Success'});
        });
    });

});

