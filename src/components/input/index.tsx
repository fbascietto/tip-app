import { HTMLInputTypeAttribute } from "react";
import { DollarSVG } from './../../assets/dollar';
import { UserSVG } from './../../assets/user';

import "./index.scss";

const InputField = ({
  label,
  type,
  id,
  name,
  onChange,
  icon,
}: {
  label: string;
  type: HTMLInputTypeAttribute;
  id: string;
  name: string;
  icon: 'dollar' | 'user';
  onChange?: any;
}) => {
  return (
    <div className="input">
      <label className="input-label">{label}</label>
      {icon === 'dollar' ? <DollarSVG className="icon" /> : <UserSVG className="icon"/> }
      <input
        className={"input-input"}
        placeholder="0"
        type={type}
        id={id}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export { InputField };
