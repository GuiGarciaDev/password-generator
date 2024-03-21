import { Dispatch, SetStateAction, useRef } from "react"
import styles from "./InputRange.module.scss"

interface Props {
  size: number
  setSize: Dispatch<SetStateAction<number>>
}

export default function InputRange({ size, setSize }: Props) {
  return (
    <input
      className={styles.range}
      type={"range"}
      min="0"
      max="20"
      step="1"
      style={{ backgroundSize: ((size - 0) * 100) / (20 - 0) + "% 100%" }}
      onChange={(e) => setSize(+e.target.value)}
      value={size}
    />
  )
}
