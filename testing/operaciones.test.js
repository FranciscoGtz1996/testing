//Importando las funciones sobre las que vamos a hacer testing
//{nombre de lo importado} = require("ruta del archivo sin extensión")
const{ add, substract, multiply, divide, residuo } = require("../operaciones"); //Ruta del archivo sin extensión

//1. Describir lo que vamos a hacer en dicho test
describe(" probando la funcion add", () => {
//Aqui van todos los test para la funcion
//test("Lo que esperamos de la función", funcion callback () => {})
test("probando que en la funcion add 2 + 2 = 4", () => {
    //Ejecutamos la función y pasamos el resultado esperado
    expect(add(2,2)).toBe(4);
})

//Probando test si ponemos alguna letra
test("Probando que retorne undefined si ingresamos un string", () =>{
    //Metodo toBeUndefined
    expect(add("4", 2)).toBeUndefined();
})

//Valor falsy, la salida será un valor falsy
test("Probando que retorne un valor falsy", () =>{
    expect(add(true,4)).toBeFalsy();
})

});

//Función resta
describe("Pruebas sobre la funcion substract", () =>{
    //Resultado resta > 0
    test("Probando que una resta de numeros positivos sea mayor que 0", () =>{
        expect(substract(10,5)).toBeGreaterThan(0)
    })

    //Resultado resta < 0
    test("Probando que una resta de un numero negativo menos uno positivo sea menor que 0", () =>{
        expect(substract(-2,1)).toBeLessThan(0)
    })

        //Resultado resta < 0
    test("Probando que una resta de numeros negativos sea menor que 0", () =>{
        expect(substract(-3,-2)).toBeLessThan(0)
    })

    //Con valor flotante
        test("Probando que una resta de numero flotante menos numero entero da decimal", () =>{
        expect(substract(1.5,3)).toBeCloseTo(-1.5)
    })
});

//Función multiplicación
describe ("Pruebas sobre la funcion multiply", () =>{
test("Probando que la multiplicacion de un numero negativo y uno positivo es menor a 0", () =>{
    expect(multiply(-1.5,3)).toBeLessThan(0)
})

test("Probando que la multiplicacion de dos numeros pisitvos es mayor a 0", () =>{
    expect(multiply(3,3)).toBeGreaterThan(0)
})

test("Probando que 2*4 es igual a 8", () =>{
    expect(multiply(2,4)).toBe(8);
})
});

//Función divide
describe("Pruebas con la funcion divide", () => {
test("Probando que el resultado de dividir entre 0 es infinito", () =>{
    expect(divide(2/0)).toBe(NaN);
})

test("Probando que el resultado de dividir 6 / 3 es igual a 2", () =>{
    expect(divide(6,3)).toBe(2);
})

test("Probando que un numero dividio entre 0 es infinito", () =>{
    expect(divide(5,0)).toBeFalsy();
})
});

//Funcion modulo
describe("Probando funcion residue", () =>{
test("Probando que el resultado de 4 % 2 es 0 ", () => {
    expect(residuo(4,2)).toBe(0);
})
test("Probando que el resultado de 3 % 2 es 1", () =>{
    expect(residuo(3,2)).toBe(1);
})
test("Probando que el residuo de un numero entre 0 es falsy", () =>{
    expect(residuo(3,0)).toBeFalsy();
})

});