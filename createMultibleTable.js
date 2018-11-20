function checkFirstSmallerThanLast (a, b) {
    return a<b;
}


function checkNumberLargerThanOneInclusively (a,b){
   return a>=1&&b>=1;
}


function checkNumberSmallerThanOneThousandInclusively (a,b){
    return a<=1000&&b<=1000;
}

module.exports = {checkFirstSmallerThanLast,
                  checkNumberLargerThanOneInclusively,
                  checkNumberSmallerThanOneThousandInclusively,
                  };
