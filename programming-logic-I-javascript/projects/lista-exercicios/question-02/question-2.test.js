const question02 = require('./question-2.js');

test('question-2', () => {
    expect(question02.ValidUserInput(null, 1)).toBe(false);
    expect(question02.ValidUserInput("sdaf", 1)).toBe(false);
    expect(question02.ValidUserInput(-1, 1)).toBe(false);

    expect(question02.ValidUserInput(1, null)).toBe(false);
    expect(question02.ValidUserInput(1, "sdf")).toBe(false);
    expect(question02.ValidUserInput(1, -1)).toBe(false);

    expect(question02.ValidUserInput(1, 1)).toBe(true);
});