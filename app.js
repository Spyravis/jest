// esta es mi función que suma dos números
const sum = (a,b) => { 
    return a + b 
}

// solo un registro en consola para nosotros.
console.log(sum(7,3)) 

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };


const fromEuroToDollar = function(valueInEuro){
    
    let valueInDollar = valueInEuro * 1.2; 
    
    return valueInDollar; 
}

module.exports = { sum, fromEuroToDollar }; 


const fromDollarToYen = function(valueInDollar){ 
    
    let valueInYen = valueInDollar * 128.7; 
   
    return valueInYen; 
}

module.exports = { sum, fromDollarToYen}; 


const fromYenToPound = function(valueInYen){ 
    
    let valueInPound = valueInYen * 0.0062; 
   
    return valueInPound; 
}

module.exports = { sum, fromYenToPound }; 