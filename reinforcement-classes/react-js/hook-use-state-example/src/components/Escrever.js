import { useState } from "react";
import "./Escrever.css";

export default function Escrever()
{
    const [input, setInput] = useState("");

    return(
        <form class="myform">
            <label for="entrada">Entre com algum texto:</label><br></br>
            <input type="text" id="entrada" onChange={(e) => setInput(e.target.value)}></input>

            <br></br>
            <p>Você escreveu:</p>
            <p>{input}</p>
        </form>
    );
}//end Escrever()