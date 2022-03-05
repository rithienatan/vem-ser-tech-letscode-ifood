const question06 = require('./question-6.js');

test('question-6', () => {
    expect(question06.ValidUserInput(null)).toBe(false);
    expect(question06.ValidUserInput("sdaf")).toBe(false);

    expect(question06.ValidUserInput(1)).toBe(true);
});