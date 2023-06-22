// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};

test("One euro should be 1.2 dollars", function(){
    
    const { fromEuroToDollar } = require('./app.js')
    
    
    expect (fromEuroToDollar(3.5)).toBe(4.2);
});

test("One dollar should be 128.7 YEN", function(){
    
    const {fromDollarToYen} = require('./app.js')
    
    
    expect (fromDollarToYen(3.5)).toBe(450.5);
});

test("One yen should be 0.0062 pound", function(){
    
    const { fromYenToPound } = require('./app.js')
    
    
    expect (fromYenToPound(3.5)).toBe(0.0217);
})