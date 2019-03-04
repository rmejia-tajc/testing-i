const { repair } = require('./enhancer.js');



// it('repairs to full durability', () => {
//   const item = {
//     name: 'Lambda Shield',
//     durabily: 98,
//     displayName: '[+3] Lambda Shield',
//   };

//   const expected = {
//     name: 'Lambda Shield',
//     durabily: 100,
//     displayName: '[+3] Lambda Shield',
//   };

//   // expect(enhancer.repair(item)).toEqual(expected)
//   expect(repair({ durability: 43 }).durability).toBe(100);
// });


describe('enhancer.js', () => {

    // testing items
    const testItem01 = {
        basename: 'Lambda Shield',
        name: '[+7] Lambda Shield',
        type: 'armor',
        durability: '50',
        enhancement: '7',
    };

    const testItem02 = {
        basename: 'Redux Cloak',
        name: '[TET] Redux Cloak',
        type: 'armor',
        durability: '5',
        enhancement: '19',
    };

    const testItem03 = {
        basename: 'Sword of Javascript',
        name: '[DUO] Sword of Javascript',
        type: 'weapon',
        durability: '82',
        enhancement: '17',
    };

    const testItem04 = {
        basename: 'CSS Stone',
        name: 'CSS Stone',
        type: 'weapon',
        durability: '100',
        enhancement: '0',
    };







    describe('repair() method', () => {

        // Act - run SUT (System Under Test)
        const actual01 = repair(testItem01);


        it('should only change durability to 100', () => {

            // assert
            expect(actual01.durability).toBe(100); // assertion
        });








    });


});