import { Dispatch, SetStateAction, useRef } from "react"
import styles from './InputRange.module.scss'

interface Props {
    value: string,
    setValue: Dispatch<SetStateAction<string>>
}

export default function InputRange({ value, setValue } : Props) {
    return (
        <input className={styles.range} 
            type={'range'} 
            min="0" 
            max="20" 
            step="1" 
            style={{backgroundSize: (+value - 0) * 100 / (20 - 0) + '% 100%'}}
            onChange={(e) => setValue(e.target.value)}
            value={value}
        />
    )
}