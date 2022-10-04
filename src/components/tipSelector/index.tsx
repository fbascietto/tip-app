import "./index.scss";

const TipSelector = ({
  setPercentage,
}: {
  setPercentage: (p: number) => void;
}) => {
  const onChangeInput = (e: any) => {
    e.preventDefault();
    setPercentage(e?.target.value || 0);
  };
  return (<>
    <label className="tip-label">{"Select Tip %"}</label>
    <div className="tip-container">
      <button className="tip-button" onClick={() => setPercentage(5)}>
        5%
      </button>
      <button className="tip-button" onClick={() => setPercentage(10)}>
        10%
      </button>
      <button className="tip-button" onClick={() => setPercentage(15)}>
        15%
      </button>
      <button className="tip-button" onClick={() => setPercentage(20)}>
        20%
      </button>
      <button className="tip-button" onClick={() => setPercentage(25)}>
        25%
      </button>
      <input
        className="tip-input"
        placeholder="Custom"
        onChange={onChangeInput}
      ></input>
    </div>
    </>
  );
};

export { TipSelector };
