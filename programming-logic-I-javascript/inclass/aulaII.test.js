const aulaII = require('./aulaII');

test('Aula II - Testes', () => {
    expect(typeof aulaII.variavelI).toBe("number");
    expect(typeof aulaII.variavelII).toBe("number");
    expect(typeof aulaII.variavelIII).toBe("number");

    expect(aulaII.soma).toBe(4);
    expect(aulaII.sub).toBe(2);
    expect(aulaII.mult).toBe(6);
    expect(aulaII.div).toBe(5);
    expect(aulaII.mod).toBe(1);

    expect(aulaII.maiorTrue).toBe(true);
    expect(aulaII.maiorFalse).toBe(false);
    expect(aulaII.maiorIgualTrue).toBe(true);
    expect(aulaII.menorIgualTrue).toBe(true);
    expect(aulaII.menorFalse).toBe(false);
    expect(aulaII.diferenteTrue).toBe(true);
    expect(aulaII.diferenteFalse).toBe(false);
    expect(aulaII.igualTrue).toBe(true);
    expect(aulaII.igualWithTypeFalse).toBe(false);
});