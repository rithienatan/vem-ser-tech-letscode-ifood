const question05 = require('./question-5.js');

test('question-5', () => {
    expect(question05.ValidUserInput(null)).toBe(false);
    expect(question05.ValidUserInput("sdaf")).toBe(false);

    expect(question05.ValidUserInput(1)).toBe(true);
});