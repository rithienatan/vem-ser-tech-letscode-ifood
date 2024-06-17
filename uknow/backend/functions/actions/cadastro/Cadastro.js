//---------- Imports ---------
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');


//---------- Custom Imports ---------
//const CriarCarteira = require("./CriarCarteira");


//---------- Functions -----------
/**
 * Cadastro de usuário
 * 
 * @param {Object} data 
 * @returns {Object}
 */
async function Cadastro(data)
{
    const answer = { };

    try
    {
        const db = getFirestore();

        const alunosRef = db.collection("aluno");
        const newAluno = data;
        const snapshot = await alunosRef.where("cpf", "==", newAluno.cpf).get();

        if(snapshot.empty)
        {
            //------ Create new Wallet --------
            const carteiraRef = db.collection("carteira");
            const newWallet = {
                saldo: 0,
                knowToken: 0,
                transactionHistoric: []
            };
            const resWallet = await carteiraRef.add(newWallet);


            //------ Create new User -------- 
            newAluno.carteira = db.doc("carteira/" + resWallet.id);
            
            const resAluno = await alunosRef.add(newAluno);


            answer.status = 201;
            answer.log = "Usuário criado com sucesso!";
            answer.userId = resAluno.id;
            answer.data = { ...newAluno };
        }
        else
        {
            answer.status = 409;
            answer.info = "Usuário já existente!";
        }//end if
        
        return(answer);
    }
    catch(e)
    {
        answer.status = 500;
        answer.error = true;
        answer.message = "Internal Error!"
        answer.log = e;

        return(answer);
    }//end try/catch
}//end Cadastro()

//---------- Exports ----------
module.exports = Cadastro;