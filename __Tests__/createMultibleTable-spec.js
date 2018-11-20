const checkFirstSmallerThanLast = require('../createMultibleTable.js').checkFirstSmallerThanLast;
it ('check First Smaller Than Last', () => {
    expect(checkFirstSmallerThanLast(4,2)).toBe(false);
});


const checkNumberLargerThanOneInclusively = require('../createMultibleTable.js').checkNumberLargerThanOneInclusively;
it ('check Number Larger Than One Inclusively', () => {
    expect(checkNumberLargerThanOneInclusively(4,2)).toBe(true);
});
