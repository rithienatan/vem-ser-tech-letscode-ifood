const question04 = require('./question-4.js');

test('question-4', () => {
    expect(question04.ValidUserInput(null, 1, 1)).toBe(false);
    expect(question04.ValidUserInput("sdaf", 1, 1)).toBe(false);
    expect(question04.ValidUserInput(-1, 1, 1)).toBe(false);

    expect(question04.ValidUserInput(1, null, 1)).toBe(false);
    expect(question04.ValidUserInput(1, "asd", 1)).toBe(false);
    expect(question04.ValidUserInput(1, -1, 1)).toBe(false);

    expect(question04.ValidUserInput(1, 1, null)).toBe(false);
    expect(question04.ValidUserInput(1, 1, "dsfa")).toBe(false);
    expect(question04.ValidUserInput(1, 1, -1)).toBe(false);

    expect(question04.ValidUserInput(1, 1, 1)).toBe(true);
});