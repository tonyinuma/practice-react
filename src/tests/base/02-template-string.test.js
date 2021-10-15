import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
  test("getSaludo debe retornar Hola José", () => {
    const nombre = "José";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe(`Hola ${nombre}`);
  });

  // getSaludo() debe retornar Hola Tony por defecto, Si no tiene argumento.
  test("getSaludo debe retornar por defecto Hola Tony", () => {
    const saludo = getSaludo();

    expect(saludo).toBe(`Hola Tony`);
  });
});
