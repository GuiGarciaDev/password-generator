import styles from './styles/App.module.scss'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { FaRegCopy } from 'react-icons/fa'
import { useState, useEffect } from 'react';
import InputRange from './components/input-range/InputRange';
import CheckBox from './components/checkbox/CheckBox';
import DifficultBar from './components/difficult-bar/DifficultBar';
import { UPPERCASE, LOWERCASE, NUMBERS, SYMBOLS } from './chars';

function App() {
  const [charLenght, setCharLenght] = useState<string>('6');
  const [password, setPassword] = useState<string>('P4$5W0rD!');

  const [uppercase, setUppercase] = useState<boolean>(false);
  const [lowercase, setLowercase] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<boolean>(false);
  const [symbols, setSymbols] = useState<boolean>(false);

  const [strenght, setStrenght] = useState<Array<boolean>>([uppercase, lowercase, numbers, symbols])

  useEffect(() => {
    setStrenght([uppercase, lowercase, numbers, symbols])
  }, [uppercase, lowercase, numbers, symbols])

  function handleGenerate() {
    let chars = ''

    if (uppercase) {
      chars += UPPERCASE
    }
    if (lowercase) {
      chars += LOWERCASE
    }
    if (numbers) {
      chars += NUMBERS
    }
    if (symbols) {
      chars += SYMBOLS
    }

    let password = ''

    for(let i = 0; i < +charLenght; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber +1);
    }

    if (password.length === 0) {
      alert('Password too short')
    } else {
      setPassword(password)
    }
  }

  function copyPassword() {
    navigator.clipboard.writeText(password)
  }

  return (
    <div className={styles.App}>
      <span>Password Generator</span>
      <div className={styles.password}>
        <span>{password}</span>
        <button onClick={() => copyPassword()}>
          <FaRegCopy fontSize={30}/>
        </button>
      </div>
      <div className={styles.settings}>
        <div className={styles.inputRangeHolder}>
          <div className={styles.stats}>
            <span>Character Lenght</span>
            <p>{charLenght}</p>
          </div>
          <InputRange value={charLenght} setValue={setCharLenght}/>
        </div>

        <div className={styles.checkboxes}>
          <CheckBox text='Include Uppercase Letters' checked={uppercase} setChecked={setUppercase}/>
          <CheckBox text='Include Lowercase Letters' checked={lowercase} setChecked={setLowercase}/>
          <CheckBox text='Include Numbers' checked={numbers} setChecked={setNumbers}/>
          <CheckBox text='Include Symbols' checked={symbols} setChecked={setSymbols}/>
        </div>

        <div className={styles.strenght}>
          <span>STRENGTH</span>
          <DifficultBar charStrenght={strenght.filter(Boolean).length} length={+charLenght}/>
        </div>

        <button className={styles.submitButton} onClick={() => handleGenerate()}>
          GENERATE
          <AiOutlineArrowRight fontSize={12}/>
        </button>
      </div>
    </div>
  )
}

export default App
