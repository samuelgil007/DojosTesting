export function suma(a, b) {
    return a + b;
}
export function resta(a, b) {
    return a - b;
}
describe("Pruebas para validar funciones", () => {

    test("Suma de 20 y 30", () => {
        expect(suma(20,30)).toBe(50);
    });

    test("resta de 20 y 30", () => {
        expect(resta(20,30)).toBe(-10);
    });

    test("Que la resta de 20 y 30 no sea 10", () => {
        expect(resta(20,30)).not.toBe(10);
    });

})