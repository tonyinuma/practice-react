import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de heroes", () => {
    test("Debe retornar un heroe por id", () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroesData = heroes.find( h => h.id === id);

        expect(heroe).toEqual(heroesData);
    });

    test("Debe retornar undefined si heroe no existe", () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    // Tarea
    test("Debe retornar un heroe por owner", () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter( h => h.owner === owner);

        expect(heroes).toEqual(heroesData);
    });
    
    test("La cantidad debe heroes de marvel debe ser 2", () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
    });
});
