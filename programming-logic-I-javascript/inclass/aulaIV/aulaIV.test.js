const aulaIV = require('./aulaIV.js');

test('Aula IV - Testes', () => {
    expect(aulaIV.multiplica(1, 1)).toBe(1);
    expect(aulaIV.arrowMultiplica(1, 1)).toBe(1);
    expect(aulaIV.squares(1, 1)).toBeUndefined();
    expect(aulaIV.funcaoRecursiva(0)).toBeUndefined();
    expect(aulaIV.listaAlunos).toBeDefined();

    expect(aulaIV.json).toBeDefined();
    expect(aulaIV.cachorro).toBeDefined();
    expect(aulaIV.cachorro.latir()).toBe('auauau');
    expect(aulaIV.alunos).toBeDefined();
    expect(aulaIV.notas).toBeDefined();
    expect(aulaIV.calcularMediaDeTodosAlunos(aulaIV.listaAlunos)).toBeUndefined();
    expect(aulaIV.buscaMelhorMedia(aulaIV.listaAlunos)).toBeDefined();
    expect(aulaIV.buscaMenorMedia(aulaIV.listaAlunos)).toBeDefined();

    expect(aulaIV.obj).toBeDefined();
    expect(aulaIV.fn()).toBeDefined();
    expect(aulaIV.globalObj).toBeDefined();
    expect(aulaIV.arrow()).toBeDefined();
});