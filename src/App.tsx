import { useState, HTMLInputTypeAttribute } from "react";
import { InputField } from "./components/input";
import { TipSelector } from "./components/tipSelector";
import "./App.scss";

function App() {
  const [percentage, setPercentage] = useState(0);
  const [result, setResult] = useState("");
  const [total, setTotal] = useState("");
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);

  const onChangeBill = (e: any) => {
    e.preventDefault();
    setBill(e?.target.value || 0);
  };

  const onChangePeople = (e: any) => {
    e.preventDefault();
    setPeople(e?.target.value || 0);
  };

  const calculate = () => {
    if (percentage != 0 && people > 0 && bill != 0) {
      const calc = (Number(bill) * percentage) / 100;
      const perPerson = calc / people;
      setResult(perPerson.toString());
      setTotal(calc.toString());
    }
  };

  return (
    <div className="App">
      <div className="title">SPLI<br/>TTER</div>
      <div className="card">
        <div className="input-card">
          <InputField
            label={"Bill"}
            type={"number" as HTMLInputTypeAttribute}
            id="bill"
            name="bill"
            icon="dollar"
            onChange={onChangeBill}
          />
          <TipSelector setPercentage={setPercentage} />
          <InputField
            label={"Number of People"}
            type={"number" as HTMLInputTypeAttribute}
            id="people"
            name="people"
            icon="user"
            onChange={onChangePeople}
          />
        </div>
        <div className="result-card">
          <p>{result}</p>
          <p>{total}</p>
          <button onClick={() => calculate()}>Calculate</button>
        </div>
      </div>
    </div>
  );
}

export default App;
