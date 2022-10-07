import { ReactElement } from "react";
import { Item } from "./components/item";
import "./index.scss";

const Results = ({
  tips,
  total,
}: {
  tips: string;
  total: string;
}): ReactElement => {
  return (
    <div className="results">
      <Item label="Tip Amount" amount={tips} />
      <Item label="Total" amount={total} />
    </div>
  );
};

export { Results };
