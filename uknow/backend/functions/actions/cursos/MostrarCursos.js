//---------- Imports ---------
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');


//---------- Custom Imports ---------
const Aluno = require("../../middleware/Aluno");


//---------- Functions -----------
async function GetCursos()
{
    const answer = { };

    try
    {
        const db = getFirestore();
        const cursosRef = db.collection("cursos");
        const snapshot = await cursosRef.get();

        if(snapshot.empty)
        {
            answer.status = 404;
            answer.info = "Não há nenhum curso cadastrado!";
        }
        else
        {
            const data = snapshot.docs.map(doc => doc.data());

            answer.status = 200;
            answer.info = "Cursos retornados com sucesso!";
            answer.cursos = data;
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
}//end MostrarCursos()

//---------- Exports ----------
module.exports = GetCursos;