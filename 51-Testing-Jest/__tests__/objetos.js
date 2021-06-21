const objeto = {
    nombre:"samuel",
    edad:24
};

describe("Pruebas para validar objeto", () => {

    test("Que sea mayor a 20", () => {
        expect(objeto.edad).toBeGreaterThan(20);
    });

    test("Que se llame samuel", () => {
        expect(objeto.nombre).toBe("samuel");
    });

    test("Que no se llame samuel", () => {
        expect(objeto.nombre).not.toBe("otro");
    });
})