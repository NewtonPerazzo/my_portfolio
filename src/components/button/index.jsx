import { Button } from './style.js';

export default function Button(props){
    return(
        <Button>
            <p>{props.title}</p>
        </Button>
    )
}