const { sum } = require('./app.js');   
test('adds 14 + 9 to equal 23', () => {  
    let total = sum(14, 9);  
    expect(total).toBe(23); 
}); 
let oneEuroIs = { 
    "JPY": 127.9,
    "USD": 1.2, 
    "GBP": 0.8, 
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