import Rectangle from "../rectangle/Rectangle";

interface Props {
    value: number
}

export default function DifficultBar({ value } : Props) {
    let text;
    switch (value) {
        case 1:
            text = 'WEAK'
            break;
        case 2:
            text = 'WEAK'
            break;
        case 3:
            text = 'MEDIUM'
            break;
        case 4:
            text = 'STRONG'
            break;
    
        default:
            text = 'WEAK'
            break;
    }

    return (
        <div>
            {text}
            <Rectangle active={value > 0}/>
            <Rectangle active={value > 1}/>
            <Rectangle active={value > 2}/>
            <Rectangle active={value > 3}/>
        </div>
        
    )
}