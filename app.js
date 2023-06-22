const sum = (a,b) => { 
    return a + b 
}
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;    
    return valueInDollar; 
}
const fromDollarToYen = function(valueInDollar){ 
    let valueInYen = valueInDollar * 128.7;   
    return valueInYen; 
}
const fromYenToPound = function(valueInYen){ 
    let valueInPound = valueInYen * 0.0062;   
    return valueInPound; 
}
module.exports = { sum, fromYenToPound, fromDollarToYen, fromEuroToDollar }; 