const question08 = require('./question-8.js');

test('question-8', () => {
    expect(question08.ValidUserInput(null, 1)).toBe(false);
    expect(question08.ValidUserInput("sdaf", 1)).toBe(false);
    
    expect(question08.ValidUserInput(1, null)).toBe(false);
    expect(question08.ValidUserInput(1, "sdaf")).toBe(false);

    expect(question08.ValidUserInput(1, 1)).toBe(false);

    expect(question08.ValidUserInput(1, 2)).toBe(true);
});