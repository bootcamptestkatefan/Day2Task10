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

function presentItFromStringToAligned (a,b){
    if(checkFirstSmallerThanLast(a,b)
     &&checkNumberLargerThanOneInclusively(a,b)
     &&checkNumberSmallerThanOneThousandInclusively(a,b)
     &&checkInputIsIntegerOrNot(a,b)
     &&calculateTheResultForTwoInputs(a,b)) {
        var formattedString = '';   
        for (var i=a; i<=b; i++) {
            // e.g. i=2 > i=3 > i=4
            for (var j=a; j<=i; j++) {
                //e.g. j=2,i=2 > j=2,i=3 > j=3,i=3 > j=2,i=4 > j=3,i=4 > j=4,i=4
                formattedString += calculateTheResultForTwoInputs(j,i)+"\t";    
            }
            formattedString += "\n";
        }
        return formattedString;
    } else {
        // Return null (AC1)
        return null;
    }  
        
//j change = tab ; i change = newLine
}
module.exports = {checkFirstSmallerThanLast,
                  checkNumberLargerThanOneInclusively,
                  checkNumberSmallerThanOneThousandInclusively,
                  checkInputIsIntegerOrNot,
                  calculateTheResultForTwoInputs,
                  presentItFromStringToAligned};
