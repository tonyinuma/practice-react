import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../base/05-funciones";

describe("Prueba en 05-funciones", () => {
    test("getUser debe retornar un objeto", () => {
        const userTest = {
            uid: "ABC123",
            username: "El_Papi1502",
        };

        const user = getUser();

        expect(user).toEqual(userTest);
    });

    // getUsuarioActivo debe retornar un objeto
    test("getUsuarioActivo debe retornar un objeto", () => {
        const userActivo = {
            uid: "ABC567",
            username: 'Tony',
        };

        const user = getUsuarioActivo();

        expect(user).toEqual(userActivo);
    });

});
