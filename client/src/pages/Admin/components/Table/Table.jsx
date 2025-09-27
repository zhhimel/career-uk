import React from "react";
import "./Table.css";

const Table = ({ columns, data, onRowClick }) => {
  return (
    <table className="admin-table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((row, i) => (
            <tr key={i} onClick={() => onRowClick && onRowClick(row)}>
              {columns.map((col) => (
                <td key={col}>{row[col]}</td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length} className="no-data">
              No records found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
