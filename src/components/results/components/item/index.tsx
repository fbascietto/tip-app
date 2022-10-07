import { ReactElement } from "react";

import "./index.scss";

const ItemLabel = ({ title, detail }: { title: string; detail: string }): ReactElement => {
  return (
    <div className="item__label">
      <div className="item__label--title">{title}</div>
      <div className="item__label--detail">{detail}</div>
    </div>
  );
};

const ItemAmount = ({ amount }: { amount: string; }): ReactElement => {
  return (
    <div className="item__amount">
      {`$${amount}`}
    </div>
  );
};

const Item = ({
  label,
  amount,
}: {
  label: string;
  amount: string;
}) => {

  return (
    <div className="item">
      <ItemLabel title={label} detail="/ person"/>
      <ItemAmount amount={amount || "0.00"}/>
    </div>
  );
};

export { Item };
