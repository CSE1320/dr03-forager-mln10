"use client";
import { useState } from "react";
import {comparisonData} from '@/data/development.jsx'
import '../styles/globals.css';
const Table = () => {
  const [tableData, setTableData] = useState(comparisonData);


  const handleInputChange = (id, value) => {
    const temp = tableData.map((row)=>
      (row.id === id)?({...row, editable: value}):row
    )
    setTableData(temp)
  };

  return (
    <div >
      <table className="w-full table-fixed bg-white shadow-md ">
        <thead>
          <tr className="customGreen text-white">
            <th className="w-1/3  px-4 py-2">Your Mushroom</th>
            <th className="w-1/3 px-4 py-2">Property</th>
            <th className="w-1/3  px-4 py-2">Death Cap</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100">
              <td className="w-1/3 border-l border-r px-4 py-2">
                <input
                  value={row.editable}
                  onChange={(e) => handleInputChange(row.id, e.target.value)}
                  className="w-full p-1 border border-gray-300 rounded-md"
                />
              </td>
              <td className="w-1/3 border-l border-r px-4 py-2">{row.col2}</td>
              <td className="w-1/3 border-l border-r px-4 py-2">{row.col3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
