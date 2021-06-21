const cliente = {
    nombre:"samuel",
    dinero:  100,
    tipo: "premium"
};

describe("tests al ciente", () => {

    test("Que sea igual con snapshot", () => {
        expect(cliente).toMatchSnapshot();
    });

})