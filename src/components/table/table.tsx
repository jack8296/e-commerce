//types
import { type TableProps } from "../../types/types";
//helpers
import { isValidUrl } from "../../helpers/urlCheck";

function Table<T extends object>({ data }: TableProps<T>) {
  if (!data || data.length === 0) {
    return <p>No data found</p>;
  }
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, idx) => {
                  if (typeof value === "object" && value !== null) {
                    return <td key={idx}>{value?.rate}</td>;
                  } else if (isValidUrl(value)) {
                    return (
                      <td key={idx}>
                        <img src={value} alt="Image" />
                      </td>
                    );
                  } else {
                    return <td key={idx}>{value}</td>;
                  }
                })}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
