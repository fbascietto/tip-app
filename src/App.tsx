import { useState, HTMLInputTypeAttribute, useEffect, useRef } from "react";
import { InputField } from "./components/input";
import { TipSelector } from "./components/tipSelector";
import { Results } from "./components/results";
import "./App.scss";

function App() {
  const [percentage, setPercentage] = useState(0);
  const [tip, setTip] = useState("");
  const [total, setTotal] = useState("");
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const inputRef = useRef(null);
  const peopleRef = useRef(null);

  const totalReset = () => {
    setPeople(0);
    setBill(0);
    setPercentage(0);
    setTip("");
    setTotal("");
    // @ts-ignore 
    inputRef.current.value = "";
    // @ts-ignore
    peopleRef.current.value = "";
  };

  const onChangeBill = (e: any) => {
    e.preventDefault();
    setBill(e?.target.value || 0);
  };

  const onChangePeople = (e: any) => {
    e.preventDefault();
    setPeople(e?.target.value || 0);
  };

  const calculate = () => {
    if (percentage >= 0 && people > 0 && bill != 0) {
      const totalTip = (Number(bill) * percentage) / 100;
      const totalPerPerson = Number(bill) / people;
      const tipPerPerson = totalTip / people;
      setTip(tipPerPerson.toFixed(2).toString());
      setTotal((totalPerPerson + tipPerPerson).toFixed(2).toString());
    }
  };

  useEffect(() => {
    calculate();
  }, [bill, percentage, people]);

  return (
    <div className="App">
      <div className="title">
        SPLI
        <br />
        TTER
      </div>
      <div className="card">
        <div className="input-card">
          <InputField
            inputRef={inputRef}
            label={"Bill"}
            type={"number" as HTMLInputTypeAttribute}
            id="bill"
            name="bill"
            icon="dollar"
            onChange={onChangeBill}
          />
          <TipSelector percentage={percentage} setPercentage={setPercentage} />
          <InputField
            inputRef={peopleRef}
            label={"Number of People"}
            type={"number" as HTMLInputTypeAttribute}
            id="people"
            name="people"
            icon="user"
            onChange={onChangePeople}
          />
        </div>
        <div className="result-card">
          <Results tips={tip} total={total} />
          <button className="result-card__button" onClick={() => totalReset()}>
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
