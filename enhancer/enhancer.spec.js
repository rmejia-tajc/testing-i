const { repair, success } = require('./enhancer.js');


describe('enhancer.js', () => {

    // testing items
    const testItem01 = {
        baseName: 'Lambda Shield',
        displayName: '[+7] Lambda Shield',
        type: 'armor',
        durability: 50,
        enhancement: 7,
    };

    const testItem02 = {
        baseName: 'Redux Cloak',
        displayName: '[TET] Redux Cloak',
        type: 'armor',
        durability: 5,
        enhancement: 19,
    };

    const testItem03 = {
        baseName: 'Sword of Javascript',
        displayName: '[DUO] Sword of Javascript',
        type: 'weapon',
        durability: 82,
        enhancement: 17,
    };

    const testItem04 = {
        baseName: 'CSS Stone',
        displayName: 'CSS Stone',
        type: 'weapon',
        durability: 100,
        enhancement: 0,
    };


    describe('success() method', () => {

        // Act - run SUT (System Under Test)
        const actual01 = success(testItem01);
        const actual02 = success(testItem02);
        const actual03 = success(testItem03);
        const actual04 = success(testItem04);

        it('should increase the item\'s enhancement +1. Max 20', () => {

            //assert
            expect(actual01.enhancement).toBe(8); // assertion
        });




    });


    describe('repair() method', () => {

        // Act - run SUT (System Under Test)
        const actual01 = repair(testItem01);
        const actual02 = repair(testItem02);
        const actual03 = repair(testItem03);
        const actual04 = repair(testItem04);


        it('should only change durability to 100', () => {

            // assert
            expect(actual01.durability).toBe(100); // assertion
            expect(actual02.durability).toBe(100); // assertion
            expect(actual03.durability).toBe(100); // assertion
            expect(actual04.durability).toBe(100); // assertion
        });

    });


});