import {suma} from "./funciones";

describe("Pruebas para validar funciones", () => {

    test("Suma de 20 y 30", () => {
        expect(suma(20,30)).toBe(50);
    });

})