const question12 = require('./question-12.js');

test('question-12', () => {
    expect(question12.ValidUserInput(null)).toBe(false);
    
    expect(question12.ValidUserInput("sdaf")).toBe(true);
});