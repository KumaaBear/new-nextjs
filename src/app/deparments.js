"use client"

import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSettingsOutline, IoFilter } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Departments() {
    return (
<div className="bg-white shadow-md rounded-lg p-0">
<div className="flex items-center justify-between mb-4 p-4">
  <div className="flex items-center space-x-3">
    <div className="bg-[#FDECC8] p-3 rounded-full">
      <img
        src="/department-icon.png"
        alt="Department Icon"
        className="w-6 h-6"
      />
    </div>
    <h2 className="text-s font-semibold">Departments</h2>
  </div>
  <h3 className="text-sm text-black font-semibold font-medium">
    Employees without department
  </h3>
</div>

{/* Table */}
<div className="overflow-x-auto">
  <table className="min-w-full border-collapse border border-gray-200">
    <thead>
      <tr className="bg-transparent">
        <th className="text-left px-4 py-2 text-sm font-medium text-gray-600">
          Employee name
        </th>
        <th className="text-right px-4 py-2 text-sm font-medium text-gray-600">
          Position
        </th>
      </tr>
    </thead>
    <tbody>
      {["John", "Miguel", "Rhegz"].map((employee, index) => (
        <tr key={index} className="border-t">
          <td className="px-4 py-2 flex items-center space-x-3">
            <img
              src="/profile.png"
              alt="Avatar"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-medium">{employee}</p>
              <p className="text-sm text-[#45CDAC]">UI Designer 
                <span className="text-sm text-black p-1"># En-101-11</span>
              </p>
            </div>
          </td>
          <td className="px-4 py-2 text-black text-right text-sm">
            Sales Associate
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

{/* Assign Department Button */}
<div className="mt-4">
  <button className="flex items-center text-[#448E4A] font-medium hover:underline p-4">
    Assign Department{" "}
    <IoIosArrowRoundForward />
    {/* <span className="ml-1 text-lg font-semibold">&#8594;</span> */}
  </button>
</div>
</div>
    );
}