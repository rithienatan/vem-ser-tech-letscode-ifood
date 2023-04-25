import "./Box.css";

export default function Box({bgColor, cor, texto})
{
    return(
        <div class="mybox" style={{ backgroundColor: bgColor, color: cor }}>
            <p>Texto: {texto}</p>
            <p>Cor: {cor}</p>
        </div>
    );
}//end Box