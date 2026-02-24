import type { JSX } from "react";
const TextArea = (): JSX.Element => {
  return (
    <div className="textArea-container">
      <textarea
        name="textarea"
        id="textarea"
        placeholder="Descriptiion here..."
      />
    </div>
  );
};

export default TextArea;
