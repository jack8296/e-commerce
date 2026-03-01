import type { JSX } from "react";
//types
import { type SelectProps } from "../../types/types";

const Select = ({
  name,
  data,
  onChange,
  placeHolder,
  ...res
}: SelectProps): JSX.Element => {
  return (
    <div className="select-container">
      <select
        className="select-container__select"
        onChange={onChange}
        name={name}
        id="select"
        {...res}
      >
        <option value="">{placeHolder}</option>
        {data.map((data) => {
          return (
            <option className="select-container__option" value={data}>
              {data}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
