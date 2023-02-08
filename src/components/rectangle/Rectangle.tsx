interface Props {
    active: boolean
}

export default function Rectangle({ active }: Props) {
    return (
        <div style={ !active ? {
            border: '1px solid white',
            width: '10px',
            height: '25px'
        } : {width: '10px', height: '25px', backgroundColor: 'var(--icons-color)'}}/>
    )
}