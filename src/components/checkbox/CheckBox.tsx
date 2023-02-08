import { Dispatch, SetStateAction, useRef } from "react"
import './CheckBox.scss'

interface Props {
    text: string,
    checked: boolean,
    setChecked: Dispatch<SetStateAction<boolean>>
}

export default function CheckBox({ text, checked, setChecked } : Props) {
    return (
        <label className="b-contain">
            <span>{text}</span>
            <input type="checkbox" checked={checked} onChange={() => setChecked(prev => !prev)}/>
            <div className="b-input"></div>
        </label>
    )
}