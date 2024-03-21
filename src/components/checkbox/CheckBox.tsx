import { Dispatch, SetStateAction } from "react"
import "./CheckBox.scss"

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string
  checked: boolean
  setChecked: Dispatch<SetStateAction<boolean>>
}

export default function CheckBox({
  text,
  checked,
  setChecked,
  ...rest
}: CheckBoxProps) {
  return (
    <label className="b-contain">
      <span>{text}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
        {...rest}
      />
      <div className="b-input"></div>
    </label>
  )
}
