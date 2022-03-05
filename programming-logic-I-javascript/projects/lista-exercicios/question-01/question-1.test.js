const question01 = require('./question-1.js');

test('question-1', () => {
    expect(question01.ValidUserInput(null, 1)).toBe(false);
    expect(question01.ValidUserInput("sdaf", 1)).toBe(false);
    expect(question01.ValidUserInput(-1, 1)).toBe(false);

    expect(question01.ValidUserInput(1, null)).toBe(false);
    expect(question01.ValidUserInput(1, "sdf")).toBe(false);
    expect(question01.ValidUserInput(1, -1)).toBe(false);

    expect(question01.ValidUserInput(1, 1)).toBe(true);
});