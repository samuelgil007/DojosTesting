import Citas from "../js/classes/Citas";


describe("Pruebas para el proyecto de citas", () => {
    const citaClase = new Citas();
    const id =  909090;
    test("Agregar nueva cita", () => {

        
        const citaObj = {
            id: id,
            mascota: 'Rayo perro',
            propietario: 'Rayo dueño',
            telefono: '123',
            fecha: '10-10-2021',
            hora:'20:30',
            sintomas: 'prueba de sintomas'
        }
        citaClase.agregarCita(citaObj);

        expect(citaClase).toMatchSnapshot();
    });

    test("Actualizar cita", () => {

        
        const citaObj = {
            id: id,
            mascota: 'Rayo perro nuevo',
            propietario: 'Rayo dueño',
            telefono: '123',
            fecha: '10-10-2021',
            hora:'20:30',
            sintomas: 'prueba de sintomas'
        }
        citaClase.editarCita(citaObj);

        expect(citaClase).toMatchSnapshot();
    });

    test("Eliminar cita", () => {

        citaClase.eliminarCita(id);

        expect(citaClase).toMatchSnapshot();
    });
})