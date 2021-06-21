const array = [1,2,3];

describe("Pruebas para validar array", () => {

    test("Que tenga 3 elementos el array", () => {
        expect(array).toHaveLength(3);
    });

    test("Que no este vacio el password", () => {
        expect(array).not.toHaveLength(0);
    });

})