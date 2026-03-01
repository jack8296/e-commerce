import { type JSX } from "react";
//types
import { type TableProps } from "../../types/types";

const Table = ({ header, data }: TableProps): JSX.Element => {
  return (
    <div className="table-container" style={{ overflow: "auto" }}>
      <table>
        <thead>
          {header.map((data) => (
            <tr>
              <th>Nabaraj</th>
              <th>Nabaraj</th>
              <th>Nabaraj</th>
            </tr>
          ))}
        </thead>
        <tbody>
          <td>akk</td>
          <td>akk</td>
          <td>akk</td>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
