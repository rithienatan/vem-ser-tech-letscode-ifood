const PhraseWithSemicolon = require("./exercicioI");

test("If phrase is invalid", () => {
    expect(PhraseWithSemicolon("palavras apenas").resp).toBe(false);
});


test("If phrase is valid", () => {
    expect(PhraseWithSemicolon("palavras;apenas").resp).toBe(true);
});