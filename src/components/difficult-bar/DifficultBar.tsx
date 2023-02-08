import Rectangle from "../rectangle/Rectangle";

interface Props {
    charStrenght: number
    length: number
}

export default function DifficultBar({ charStrenght, length } : Props) {
    let text;
    let value = 0;
    let passwordStrenght = charStrenght * length;

    // VERY WEAK: 0 <= X <= 10 | WEAK: 10 <= X <= 20 | MEDIUM: 20 <= X <= 30 | STRONG: 30 <= X 

    if (passwordStrenght > 0 && passwordStrenght <= 10) {
        text = 'VERY WEAK'
        value = 1
    }
    if (passwordStrenght > 10 && passwordStrenght <= 20) {
        text = 'WEAK'
        value = 2
    }
    if (passwordStrenght > 20 && passwordStrenght <= 30) {
        text = 'MEDIUM'
        value = 3
    }
    if (passwordStrenght > 30) {
        text = 'STRONG'
        value = 4
    }

    return (
        <div>
            {text}
            <Rectangle active={value >= 1}/>
            <Rectangle active={value >= 2}/>
            <Rectangle active={value >= 3}/>
            <Rectangle active={value >= 4}/>
        </div>
        
    )
}