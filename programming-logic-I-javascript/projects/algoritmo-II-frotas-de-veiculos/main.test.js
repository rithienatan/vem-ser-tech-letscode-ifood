const main = require('./main.js');

test('ValidacaoInfoMotorista', () => {
    expect(main.ValidacaoInfoMotorista("Rithie", "123456")).toBe(true);
    expect(main.ValidacaoInfoMotorista("", "")).toBe(false);
    expect(main.ValidacaoInfoMotorista("", null)).toBe(false);
    expect(main.ValidacaoInfoMotorista(null, "")).toBe(false);
    expect(main.ValidacaoInfoMotorista(null, null)).toBe(false);
});

test('ValidacaoInfoCarro', () => {
    expect(main.ValidacaoInfoCarro("ABC-7894", 90000)).toBe(true);
    expect(main.ValidacaoInfoCarro("ABC-7894", -1)).toBe(false);
    expect(main.ValidacaoInfoCarro("ABC-7894", "90000")).toBe(true);
    expect(main.ValidacaoInfoCarro("ABC-7894", "")).toBe(false);
    expect(main.ValidacaoInfoCarro("ABC-7894", null)).toBe(false);
    expect(main.ValidacaoInfoCarro("ABC-7894", "9l")).toBe(false);

    expect(main.ValidacaoInfoCarro("", 90000)).toBe(false);
    expect(main.ValidacaoInfoCarro(null, 90000)).toBe(false);
});

test('ValidacaoStateCarro', () => {
    expect(main.ValidacaoStateCarro(null, 0, 0, 1)).toBe(false);
    expect(main.ValidacaoStateCarro(-1, 0, 0, 1)).toBe(false);
    expect(main.ValidacaoStateCarro(2, 0, 0, 1)).toBe(false);
    expect(main.ValidacaoStateCarro("x", 0, 0, 1)).toBe(false);

    expect(main.ValidacaoStateCarro(1, null, 0, 1)).toBe(false);
    expect(main.ValidacaoStateCarro(0, -1, 0, 1)).toBe(false);
    expect(main.ValidacaoStateCarro(1, 2, 0, 1)).toBe(false);
    expect(main.ValidacaoStateCarro(1, "1a", 0, 1)).toBe(false);

    expect(main.ValidacaoStateCarro(1, 0, null, 1)).toBe(false);
    expect(main.ValidacaoStateCarro(0, 0, -1, 1)).toBe(false);
    expect(main.ValidacaoStateCarro(1, 0, 2, 1)).toBe(false);
    expect(main.ValidacaoStateCarro(0, 0, ".", 1)).toBe(false);

    expect(main.ValidacaoStateCarro(1, 0, 0, null)).toBe(false);
    expect(main.ValidacaoStateCarro(0, 0, 0, -1)).toBe(false);
    expect(main.ValidacaoStateCarro(1, 0, 0, 2)).toBe(false);
    expect(main.ValidacaoStateCarro(1, 0, 0, ",")).toBe(false);

    expect(main.ValidacaoStateCarro(1, 1, 1, 1)).toBe(true);
});