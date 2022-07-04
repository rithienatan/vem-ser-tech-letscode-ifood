/**
 * @author Rithie
 * @date 04-07-2022
 */
//--------- Imports ---------
import { Request, Response, NextFunction } from "express";


//--------- Custom Imports ---------
import { LoremService } from "../../../services/LoremService";


//--------- Custom Imports ---------
interface LoremRequest
{ quantPalavras: number }


//--------- Class ---------
export class LoremController
{
    #service: LoremService;

    /**
     * Default Constructor
     */
    constructor()
    { this.#service = new LoremService(); }

    /**
     * Get Lorem words
     * 
     * @param {Request<LoremRequest>} req 
     * @param {Response} res 
     * @param {NextFunction} next 
     * @returns {Object}
     */
    getLorem = async (req: Request<LoremRequest>, res: Response, next: NextFunction) => {
        const { quantPalavras } = req.body;

        const answer = { result: await this.#service.getLorem(Number(quantPalavras)) };

        return res.status(200).json(answer);
    };
}//end class