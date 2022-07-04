/**
 * @author Rithie
 * @date 04-07-2022
 */
//---------- Custom Imports ---------
import { LoremService } from "../../../src/services/LoremService";


//---------- Testes ---------
describe("Casos de teste para a classe LoremService", () => {
    let _service: LoremService;

    it("Teste de construção da classe LoremService", () => {
        _service = new LoremService();
    });


    //----------- Casos de testes de sucesso ------------
    it("O método deve retornar status = true para quantPalavras = 1", async () => {
        const result = await _service.getLorem(1);

        expect(result.status).toStrictEqual(true);
    });


    it("O método deve retornar status = true para quantPalavras = 5", async () => {
        const result = await _service.getLorem(5);

        expect(result.status).toStrictEqual(true);
    });


    //----------- Casos de testes de erros ------------
    it("O método deve retornar status = false para quantPalavras = 0", async () => {
        const result = await _service.getLorem(0);

        expect(result.status).toStrictEqual(false);
    });

    it("O método deve retornar erro para quantPalavras = -1", async () => {
        const result = await _service.getLorem(-1);

        expect(result.status).toStrictEqual(false);
    });
});