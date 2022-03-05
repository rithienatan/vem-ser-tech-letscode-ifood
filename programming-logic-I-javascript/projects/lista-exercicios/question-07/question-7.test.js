const question07 = require('./question-7.js');

test('question-7', () => {
    expect(question07.ValidUserInput(null)).toBe(false);
    expect(question07.ValidUserInput("sdaf")).toBe(false);
    expect(question07.ValidUserInput(-1)).toBe(false);

    expect(question07.ValidUserInput(1)).toBe(true);
});