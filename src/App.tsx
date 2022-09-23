import { useState, HTMLInputTypeAttribute } from 'react'
import { InputField } from './components/input'
import './App.scss'

function App() {
  const [percentage, setPercentage] = useState(0)
  const [result, setResult] = useState("")
  const [total, setTotal] = useState("")
  const [bill, setBill] = useState(0)
  const [people, setPeople] = useState(0)

  const onChangeBill = (e: any) => {
    e.preventDefault();
    setBill(e?.target.value || 0);
  }

  const onChangePeople = (e: any) => {
    e.preventDefault();
    setPeople(e?.target.value || 0);
  }

  const calculate = () => {
    console.log("coso")
    console.log(percentage)
    console.log(people)
    console.log(bill)

    if (percentage != 0 && people > 0 && bill != 0) {
      const calc = (Number(bill) * percentage) / 100
      const perPerson = calc / people;
      setResult(perPerson.toString())
      setTotal(calc.toString())
    }
  }

  return (
    <div className="App">
      <div className="title">Tip Spli | tter</div>
      <div className="card">
        <InputField label={"Bill"} type={"text" as HTMLInputTypeAttribute} id="bill" name="bill" onChange={onChangeBill}/>
        <button onClick={() => setPercentage(5)}>5%</button>
        <button onClick={() => setPercentage(10)}>10%</button>
        <button onClick={() => setPercentage(15)}>15%</button>
        <button onClick={() => setPercentage(20)}>20%</button>
        <button onClick={() => setPercentage(25)}>25%</button>
        <InputField label={"Number of People"} type={"number" as HTMLInputTypeAttribute} id="people" name="people" onChange={onChangePeople}/>

        <button onClick={() => calculate()}>Calculate</button>

        <p>{result}</p>
        <p>{total}</p>
      </div>
    </div>
  )
}

export default App
