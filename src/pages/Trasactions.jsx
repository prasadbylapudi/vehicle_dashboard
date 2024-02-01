import React, { useState, useEffect } from "react";

function Transactions() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Fetch data from localStorage when component mounts
    const storedData = JSON.parse(localStorage.getItem("tollData")) || [];
    setTableData(storedData);
  }, []);

  return (
    <div className="overflow-x-auto  h-full">
      <h1 className="text-center text-2xl my-4">Transaction History</h1>
      <div className="bg-gray-200 flex flex-col items-center justify-end p-2 rounded-[10px] w-full">
        <table className="table-auto min-w-max bg-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 px-2 py-1">#</th>

              <th className="border border-gray-300 px-2 py-1">Vehicle No</th>
              <th className="border border-gray-300 px-2 py-1">
                Transaction ID
              </th>
              <th className="border border-gray-300 px-2 py-1">Amount</th>
              <th className="border border-gray-300 px-2 py-1">Car Type</th>
              <th className="border border-gray-300 px-2 py-1">Date</th>
              <th className="border border-gray-300 px-2 py-1">TimeStamp</th>
            </tr>
          </thead>
          <tbody className="justify-center items-center">
            {tableData.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-2 py-1">
                  {index + 1}
                </td>

                <td className="border border-gray-300 px-2 py-1">
                  {item.vehicleNo}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {item.transactionId}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {item.amount}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {item.vehicleType}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {item.currentDate}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {item.currentTime}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactions;
