const question10 = require('./question-10.js');

test('question-10', () => {
    expect(question10.ValidUserInput(null)).toBe(false);
    expect(question10.ValidUserInput("sdaf")).toBe(false);
    expect(question10.ValidUserInput(0)).toBe(false);

    expect(question10.ValidUserInput(1)).toBe(true);
});