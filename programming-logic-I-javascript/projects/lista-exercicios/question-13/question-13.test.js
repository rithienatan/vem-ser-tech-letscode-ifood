const question13 = require('./question-13.js');

test('question-13', () => {
    expect(question13.ValidUserInput(null)).toBe(false);
    expect(question13.ValidUserInput("sdaf")).toBe(false);
    expect(question13.ValidUserInput(-1)).toBe(false);

    expect(question13.ValidUserInput(1)).toBe(true);
});