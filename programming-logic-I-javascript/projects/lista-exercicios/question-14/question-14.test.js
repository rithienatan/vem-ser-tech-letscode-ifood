const question14 = require('./question-14.js');

test('question-14', () => {
    expect(question14.ValidUserInput(null)).toBe(false);
    expect(question14.ValidUserInput("sdaf")).toBe(false);

    expect(question14.ValidUserInput(0)).toBe(true);
});