const IMC = require('./aulaI');

test('Test IMC', () => {
    expect(IMC('x', 'y')).toBe("Altura e Peso devem ser números!");
    expect(IMC(-1, -2)).toBe("Altura e Peso devem ser maior que 0!");
    expect(IMC(1.8, 59)).toBe("Abaixo do Peso");

    expect(IMC(1.8, 60)).toBe("Peso Normal");
    expect(IMC(1.8, 80)).toBe("Peso Normal");

    expect(IMC(1.8, 81)).toBe("Sobrepeso");
    expect(IMC(1.8, 96)).toBe("Sobrepeso");

    expect(IMC(1.8, 98)).toBe("Obesidade de Grau I");
    expect(IMC(1.8, 113)).toBe("Obesidade de Grau I");

    expect(IMC(1.8, 114)).toBe("Obesidade de Grau II");
    expect(IMC(1.8, 129)).toBe("Obesidade de Grau II");

    expect(IMC(1.8, 130)).toBe("Obesidade de Grau III ou Mórbida");
});