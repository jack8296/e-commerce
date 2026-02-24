import type { JSX } from "react";
//types
import type { TextAreaAttributes } from "../../types/types";
const TextArea = ({
  name,
  placeHolder,
  value,
  onChange,
  ...res
}: TextAreaAttributes): JSX.Element => {
  return (
    <div className="textArea-container">
      <textarea
        id="textarea"
        name={name}
        placeholder={placeHolder}
        {...res}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
