const checkFirstSmallerThanLast = require('../createMultibleTable.js').checkFirstSmallerThanLast;
it ('check First Smaller Than Last', () => {
    expect(checkFirstSmallerThanLast(4,2)).toBe(false);
});


const checkNumberLargerThanOneInclusively = require('../createMultibleTable.js').checkNumberLargerThanOneInclusively;
it ('check Number Larger Than One Inclusively', () => {
    expect(checkNumberLargerThanOneInclusively(4,2)).toBe(true);
});


const checkNumberSmallerThanOneThousandInclusively = require('../createMultibleTable.js').checkNumberSmallerThanOneThousandInclusively;
it ('check Number Smaller Than One Thousand Inclusively', () => {
    expect(checkNumberSmallerThanOneThousandInclusively(4,1001)).toBe(false);
});

const checkInputIsIntegerOrNot = require('../createMultibleTable.js').checkInputIsIntegerOrNot;
it ('check Input Is Integer Or Not', () => {
    expect(checkInputIsIntegerOrNot(4,2)).toBe(true);
});

const calculateTheResultForTwoInputs = require('../createMultibleTable.js').calculateTheResultForTwoInputs;
it ('calculate The Result For Two Inputs', () => {
    expect(calculateTheResultForTwoInputs(2,4)).toBe("2*4=8");
});

const presentItFromStringToAligned = require('../createMultibleTable.js').presentItFromStringToAligned;
it ('present It From String To Aligned', ()=> {
    expect(presentItFromStringToAligned(2,4)).toBe('2*2=4\t\n'+'2*3=6\t3*3=9\t\n'+'2*4=8\t3*4=12\t4*4=16\t\n');
});