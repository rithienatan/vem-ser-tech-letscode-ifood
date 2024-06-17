//---------- Imports ---------
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');


//---------- Custom Imports ---------
const Aluno = require("../../middleware/Aluno");


//---------- Functions -----------
/**
 * Checa as informações de login do usuário
 * 
 * @param {String} email 
 * @param {String} senha 
 * @returns {Object}
 */
async function CheckLogin({ email, senha })
{
    const answer = { };

    try
    {
        const db = getFirestore();
        const alunosRef = db.collection("aluno");
        const snapshot = await alunosRef.where("email", "==", email).where("senha", "==", senha).get();

        if(snapshot.empty)
        {
            answer.status = 404;
            answer.info = "Login ou senha incorreto!";
        }
        else
        {
            const data = snapshot.docs[0];
            const aluno = new Aluno(
                data.id, 
                data.data().nome, 
                data.data().idade, 
                data.data().cpf, 
                data.data().email, 
                data.data().senha, 
                data.data().carteira
            );

            answer.status = 200;
            answer.info = "Logado com sucesso!";
            answer.usuario = aluno.mostrar();
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
}//end CheckLogin()

//---------- Exports ----------
module.exports = CheckLogin;