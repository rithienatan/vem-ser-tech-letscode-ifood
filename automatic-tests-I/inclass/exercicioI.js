/**
 * @author Rithie
 * @date 27-06-2022
 * @version 0.1.0
 */
//---------- functions ----------
/**
 * Phrase with semicolon
 * 
 * @param {String} phrase 
 */
function PhraseWithSemicolon(phrase)
{
    let answer = {
        "resp": null,
        "phraseInOrder": null
    };

    if(phrase.includes(";") === true)
    {
        answer.resp = true; 

        const words = phrase.split(";").sort();
        answer.phraseInOrder = words.join(";");
    }
    else
    { answer.resp = false; }

    return(answer);
}//end WordWithSemicolon()

//---------- exports ---------
module.exports = PhraseWithSemicolon;