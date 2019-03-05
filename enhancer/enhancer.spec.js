const { repair, success, fail } = require('./enhancer.js');


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
        displayName: '[PEN] Redux Cloak',
        type: 'armor',
        durability: 5,
        enhancement: 20,
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

        // The item's enhancement increases by 1. Max 20
        it('should increase the item\'s enhancement +1', () => {

            //assert
            expect(actual01.enhancement).toBe(8); // assertion
            expect(actual02.enhancement).toBe(20); // assertion
            expect(actual03.enhancement).toBe(18); // assertion
            expect(actual04.enhancement).toBe(1); // assertion
        });

        // The name is updated to reflect the new enhancement level
        it('should update name to ([enhancement level] name)', () => {

            //assert
            expect(actual01.displayName).toBe('[+8] Lambda Shield'); // assertion
            expect(actual02.displayName).toBe('[PEN] Redux Cloak'); // assertion
            expect(actual03.displayName).toBe('[TRI] Sword of Javascript'); // assertion
            expect(actual04.displayName).toBe('[+1] CSS Stone'); // assertion
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
    

    describe('fail() method', () => {

        // Act - run SUT (System Under Test)
        const actual01 = fail(testItem01);
        const actual02 = fail(testItem02);
        const actual03 = fail(testItem03);
        const actual04 = fail(testItem04);



        // The durability decreased by 5 if the item's enhancement is between 0 and 14.
        it('durability decreases by 5 if enhancement is between 0 and 14', () => {
          // Arrange (setup)
          const item = {
            enhancement: 14,
            durability: 85,
          };
     
          // Act - execute the SUT
          const actual = fail(item);
     
          // Assert
          expect(actual.durability).toBe(80);
        });
     
        it('durability decreases by 10 if enhancement is greater than 14', () => {
          // Assert
          expect(
            fail({
              enhancement: 15,
              durability: 85,
            }).durability
          ).toBe(75);
        });
     
        it('should not affect item if enhancement is less than 15 and the durability is below 25', () => {
          const item = {
            enhancement: 14,
            durability: 24,
          };
     
          expect(fail(item)).toEqual(item);
        });
     
        // enhancement greater than 16 > enhancement decreases by 1
        it('should decrease enhancement if item is enhanced greater than 16', () => {
          const item = { enhancement: 18 };
     
          const actual = fail(item);
     
          expect(actual.enhancement).toBe(17);
        });
     
        it('should not affect item if enhancement is more than 15 and the durability is below 10', () => {
          const item = {
            enhancement: 16,
            durability: 9,
          };
     
          expect(fail(item)).toEqual(item);
        });


    });


});