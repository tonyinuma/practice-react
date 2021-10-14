describe("Pruebas en demo.test.js", () => {
  test("debe ser un true", () => {
    // 1. Inicializacion
    const mesagge = "Hola Mundo";

    // 2. Estímulo
    const mesagge2 = `Hola Mundo`;

    // 3. Observar Comportamiento
    expect(mesagge).toBe(mesagge2);
  });
});
