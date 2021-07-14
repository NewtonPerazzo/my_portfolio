import { useState } from 'react';
import './style.css';

export default function Button(props){
    const [ativo, setAtivo] = useState(false)
    return(
        <>
            <div className={"button" + ativo} id={ativo ? "animation1" : null} onMouseEnter={() => setAtivo(true)} onMouseLeave={() => setAtivo(false)}>
                <p>{props.title}</p>
            </div>
        </>
    )
}