function checkFirstSmallerThanLast (a, b) {
    return a<b;
}


function checkNumberLargerThanOneInclusively (a,b){
   return a>=1&&b>=1;
}


function checkNumberSmallerThanOneThousandInclusively (a,b){
    return a<=1000&&b<=1000;
}

function checkInputIsIntegerOrNot (a,b){
    return Number.isInteger(a)&&Number.isInteger(b);
} 

function calculateTheResultForTwoInputs (a,b){
    return a + '*' + b + '=' + a*b;
}
module.exports = {checkFirstSmallerThanLast,
                  checkNumberLargerThanOneInclusively,
                  checkNumberSmallerThanOneThousandInclusively,
                  checkInputIsIntegerOrNot,
                  calculateTheResultForTwoInputs};
