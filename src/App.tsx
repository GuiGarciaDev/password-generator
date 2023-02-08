import styles from './styles/App.module.scss'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { FaRegCopy } from 'react-icons/fa'
import Rectangle from './components/rectangle/Rectangle'
import { useState, useEffect } from 'react';
import InputRange from './components/input-range/InputRange';
import CheckBox from './components/checkbox/CheckBox';
import DifficultBar from './components/difficult-bar/DifficultBar';

function App() {
  const [charLenght, setCharLenght] = useState<string>('6');

  const [uppercase, setUppercase] = useState<boolean>(false);
  const [lowercase, setLowercase] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<boolean>(false);
  const [symbols, setSymbols] = useState<boolean>(false);

  const [strenght, setStrenght] = useState<Array<boolean>>([uppercase, lowercase, numbers, symbols])

  useEffect(() => {
    setStrenght([uppercase, lowercase, numbers, symbols])
  }, [uppercase, lowercase, numbers, symbols])

  return (
    <div className={styles.App}>
      <span>Password Generator</span>
      <div className={styles.password}>
        P4$5W0rD!
        <button>
          <FaRegCopy fontSize={30}/>
        </button>
      </div>
      <div className={styles.settings}>
        <form>
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
        </form>

        <div className={styles.strenght}>
          <span>STRENGTH</span>
          <DifficultBar value={strenght.filter(Boolean).length}/>
        </div>

        <button className={styles.submitButton}>
          GENERATE
          <AiOutlineArrowRight fontSize={12}/>
        </button>
      </div>
    </div>
  )
}

export default App
