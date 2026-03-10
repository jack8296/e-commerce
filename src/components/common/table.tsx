import type { JSX } from "react";

const Table = ({
  headers,
  children,
}: {
  headers: string[];
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className="table-container" style={{ overflowX: "auto" }}>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
