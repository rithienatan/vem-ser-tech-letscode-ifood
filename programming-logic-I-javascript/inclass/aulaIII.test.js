const aulaIII = require('./aulaIII.js');

test('Aula III - Testes', () => {
    expect(aulaIII.alunos).toBeDefined();
    expect(aulaIII.mediaDosAlunos).toBeDefined();
    
    expect(aulaIII.alunosII).toBeDefined();

    expect(aulaIII.notaAluno).toBe(10);

    expect(aulaIII.array).toBeDefined();

    expect(aulaIII.nota).toBe(8);

    expect(aulaIII.alunosIII).toBeDefined();
});