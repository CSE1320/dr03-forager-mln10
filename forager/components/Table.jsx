"use client";
import { useState } from "react";
import {comparisonData} from '@/data/development.jsx'
import { IoTabletLandscapeOutline } from "react-icons/io5";
const Table = () => {
  const [tableData, setTableData] = useState(comparisonData);


  const handleInputChange = (id, value) => {
    const temp = tableData.map((row)=>
      (row.id === id)?({...row, editable: value}):row
    )
    setTableData(temp)
  };

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full table-fixed border border-gray-300 bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="w-1/3 border px-4 py-2">Your Mushroom</th>
            <th className="w-1/3 border px-4 py-2">Property</th>
            <th className="w-1/3 border px-4 py-2">Column 3</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100">
              <td className="w-1/3 border px-4 py-2">
                <input
                  type="text"
                  value={row.editable}
                  onChange={(e) => handleInputChange(row.id, e.target.value)}
                  className="w-full p-1 border border-gray-300 rounded-md"
                />
              </td>
              <td className="w-1/3 border px-4 py-2">{row.col2}</td>
              <td className="w-1/3 border px-4 py-2">{row.col3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
