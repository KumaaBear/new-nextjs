"use client"

import { useState } from "react";
import DateInput from "./date";

// icons
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const departments = [
  { name: "Sales", present: "10/10", late: 0, ut: 0, absent: 0, leave: 1 },
  { name: "Operations", present: "8/10", late: 1, ut: 1, absent: 1, leave: 0 },
  { name: "Accounting", present: "4/5", late: 0, ut: 0, absent: 0, leave: 0 },
  { name: "Customer Support", present: "7/9", late: 1, ut: 1, absent: 1, leave: 0 },
  { name: "IT", present: "7/9", late: 1, ut: 0, absent: 0, leave: 0 },
  { name: "C&C", present: "7/9", late: 0, ut: 0, absent: 0, leave: 0 },
  { name: "Sample Department 1", present: "56", late: 0, ut: 0, absent: 2, leave: 2 },
  { name: "Sample Department 2", present: "56", late: 0, ut: 0, absent: 2, leave: 2 },
  { name: "Sample Department 3", present: "56", late: 0, ut: 0, absent: 2, leave: 2 },
  { name: "Sample Department 4", present: "56", late: 0, ut: 0, absent: 2, leave: 2 },
  { name: "Sample Department 5", present: "56", late: 0, ut: 0, absent: 2, leave: 2 },
  { name: "Sample Department 6", present: "56", late: 0, ut: 0, absent: 2, leave: 2 },
  { name: "Sample Department 7", present: "56", late: 0, ut: 0, absent: 2, leave: 2 },
  { name: "Sample Department 8", present: "56", late: 0, ut: 0, absent: 2, leave: 2 },
  { name: "Sample Department 9", present: "56", late: 0, ut: 0, absent: 2, leave: 2 },
  { name: "Sample Department 10", present: "56", late: 0, ut: 0, absent: 2, leave: 2 },
  { name: "Sample Department 11", present: "56", late: 0, ut: 0, absent: 2, leave: 2 },
  { name: "Sample Department 12", present: "56", late: 0, ut: 0, absent: 2, leave: 2 },
];

export default function AttendanceReport() {
  const [currentPage, setCurrentPage] = useState(1);
// count kung ilang lang ang lalabas sa per row
  const rowsPerPage = 6;

  const totalPages = Math.ceil(departments.length / rowsPerPage);
  const currentData = departments.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-0">
        <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3 p-4">
            <div className="bg-[#E4F4D8] p-3 rounded-full">
                <img
                src="/attendance-report-icon.png"
                alt="Bulletin Icon"
                className="w-6 h-6" />
            </div>
            <h2 className="text-s font-semibold">Attendance Report</h2>
        </div>
          <div className="p-4 flex justify-content">
                <DateInput />
            <button className="bg-[#448E4A] h-10.5 mt-1 text-white px-5 py-2 rounded-md hover:bg-green-600">
                Generate Report
            </button>
          </div>
        </div>
        <table className="w-full mt-4 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-transparent">
              <th className="border-b-2 px-4 py-2">Departments</th>
              <th className="border-b-2 px-4 py-2">Total Present</th>
              <th className="border-b-2 px-4 py-2">Total Late</th>
              <th className="border-b-2 px-4 py-2">Total UT</th>
              <th className="border-b-2 px-4 py-2">Total Absent</th>
              <th className="border-b-2 px-4 py-2">Total On Leave</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((dept, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border-b-2 px-4 py-2">{dept.name}</td>
                <td className="border-b-2 px-4 py-2">{dept.present}</td>
                <td className="border-b-2 px-4 py-2">{dept.late}</td>
                <td className="border-b-2 px-4 py-2">{dept.ut}</td>
                <td className="border-b-2 px-4 py-2">{dept.absent}</td>
                <td className="border-b-2 px-4 py-2">{dept.leave}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4 p-4">
          <div className="flex items-center space-x-2">
            {/* Prev button */}
            <button
              className={`px-1 py-1 rounded-md border ${currentPage === 1 ? "text-gray-300 border-gray-300 cursor-not-allowed" : "text-gray-700 border-gray-700 hover:bg-gray-100"}`}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)} >
              <GrFormPrevious />
            </button>
            {[...Array(totalPages)].map((_, index) => (
              // Numbers show in pagination
              <button
                key={index}
                className={`px-3 py-1 rounded-md ${currentPage === index + 1 ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"}`}
                onClick={() => setCurrentPage(index + 1)} >
                {index + 1}
              </button> 
            ))}
            {/* Next button */}
            <button
              className={`px-1 py-1 rounded-md border ${currentPage === totalPages ? "text-gray-300 border-gray-300 cursor-not-allowed" : "text-gray-700 border-gray-700 hover:bg-gray-100"}`}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)} >
              <GrFormNext />
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Showing page {currentPage} of {totalPages}
          </p>
        </div>
      </div>
    </div>
  );
}
