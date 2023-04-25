import { cursos } from '../api/ListCursos';

export default function Cursos(props)
{


    return(
        <div>
            <h1>{props.name}</h1>

            <ul id="cursos">
                {cursos.map((e, i) => {
                    return(
                        <li key={i}>
                            <h3>{e.name}</h3>
                            <p>{e.desc}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}//end Cursos()