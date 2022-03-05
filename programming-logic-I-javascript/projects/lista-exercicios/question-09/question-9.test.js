const question09 = require('./question-9.js');

test('question-9', () => {
    expect(question09.ValidUserInput(null, 1)).toBe(false);
    expect(question09.ValidUserInput("sdaf", 1)).toBe(false);
    expect(question09.ValidUserInput(-1, 1)).toBe(false);

    expect(question09.ValidUserInput(1, null)).toBe(false);
    expect(question09.ValidUserInput(1, "sdaf")).toBe(false);
    expect(question09.ValidUserInput(1, -1)).toBe(false);

    expect(question09.ValidUserInput(1, 2)).toBe(true);
});