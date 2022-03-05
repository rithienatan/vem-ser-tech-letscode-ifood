const question03 = require('./question-3.js');

test('question-3', () => {
    expect(question03.ValidUserInput(null)).toBe(false);
    expect(question03.ValidUserInput("sdaf")).toBe(false);
    expect(question03.ValidUserInput(-1)).toBe(false);

    expect(question03.ValidUserInput(1)).toBe(true);
});