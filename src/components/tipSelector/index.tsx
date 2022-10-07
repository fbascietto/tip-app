import { useRef } from "react";
import "./index.scss";

const TipSelector = ({
  percentage,
  setPercentage,
}: {
  percentage: number;
  setPercentage: (p: number) => void;
}) => {
  const inputRef = useRef(null);
  const onChangeInput = (e: any) => {
    e.preventDefault();
    setPercentage(e?.target.value || 0);
  };

  const setClassName = (percentage: number, buttonValue: number) => {
    return `tip-button ${
      percentage == buttonValue ? "tip-button--selected" : ""
    }`;
  };

  const changePercentage = (perc: number) => {
    // @ts-ignore (us this comment if typescript raises an error)
    inputRef.current.value = "";
    setPercentage(perc);
  };

  const DisplayButtons = () => (
    <>
      {[5, 10, 15, 20, 25].map((index) => (
        <button
          key={`button-${index}`}
          className={setClassName(percentage, index)}
          onClick={() => changePercentage(index)}
        >
          {`${index}%`}
        </button>
      ))}
    </>
  );

  return (
    <>
      <label className="tip-label">{"Select Tip %"}</label>
      <div className="tip-container">
        <DisplayButtons />
        <input
          ref={inputRef}
          className="tip-input"
          type="number"
          placeholder="Custom"
          onChange={onChangeInput}
        />
      </div>
    </>
  );
};

export { TipSelector };
