/**
 * @author Rithie
 * @date 04-07-2022
 */
//--------- Imports ----------
import fetch from "node-fetch";


//--------- Class ---------
export class LoremService
{
    /**
     * Get Lorem words
     * 
     * @param {Number} quantPalavras
     * @returns {Object}
     */
    getLorem = async (quantPalavras: number) => {
        let answer = {
            "content": null,
            "message": "Fail. Quantity words invalid!", 
            "status": false 
        };

        const url = "http://asdfast.beobit.net/api/";

        if(quantPalavras > 0)
        {
            if(quantPalavras === 1)
            {
                const response = await fetch(`${url}?type=word&length=${2}&startLorem=true`);
                const data = await response.json();

                const oneWord = data.text.split(" ", 1)[0];
                
                answer.content = oneWord;
                answer.message = "success";
                answer.status = true;
            }
            else
            {
                const response = await fetch(`${url}?type=word&length=${quantPalavras}&startLorem=true`);
                const data = await response.json();

                answer.content = data;
                answer.message = "success";
                answer.status = true;
            }//end if
        }//end if

        return(answer);
    };
}//end class