const password = "123456";

describe("Pruebas para validar password", () => {

    test("Que tenga 6 caracteres el password", () => {
        expect(password).toHaveLength(6);
    });

    test("Que no este vacio el password", () => {
        expect(password).not.toHaveLength(0);
    });
})