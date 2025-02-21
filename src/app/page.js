import Image from "next/image";
import AttendanceReport from ".";
import Search from "./search";
import BulletinBoard from "./bulletinboard";
import Departments from "./deparments";

import Link from "next/link";

// Icons
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSettingsOutline, IoFilter } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";


export default function Home() {
  return (
    <div className="p-2 bg-[#F8F8F8]">
      <nav className="flex justify-between p-5 shadow-md rounded-xl m-5 bg-white">
        <div>
          {/* <Image src="/logos.png" width={100} height={100} alt="Logo" /> */}
          Logo
        </div>

        <div className="space-x-3 flex items-center">
          <a href="#dashboard" className="flex items-center">
            Dashboard
          </a>
          <Link href="./employees" className="flex items-center">
            <span>Attendance</span> <RiArrowDropDownLine />
          </Link>
          
          <a href="#organization" className="flex items-center">
            Organization <RiArrowDropDownLine />
          </a>
          <a href="#leaves" className="flex items-center">
            Leaves <RiArrowDropDownLine />
          </a>
          <a href="#payroll" className="flex items-center">
            Payroll <RiArrowDropDownLine />
          </a>
        </div>

        <Search />
        
      </nav>

      {/* Notification Section */}
      <div className="grid grid-cols-[1fr_2.5fr] gap-0.5">
        {/* Left Side */}
        <div className="flex justify-between p-5 shadow-md rounded-l-xl m-5 border bg-white h-[90px]">
        </div>

        {/* Right Side */}
        <div className="content">
          <div className="flex justify-between p-5 shadow-md rounded-t-xl m-5 border bg-white">
            <div className="flex items-center space-x-1 font-bold">
              <div className="bg-transparent">
                <img  src="/notif-icon.png" 
                      alt="notification-icon" 
                      className="w-full h-full object-cover" />
              </div>
              <h1 className="text-[#7C5252]">Notification</h1>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-2">
                <span>Filter</span>
                <IoFilter />
              </div>
              
              <Link href="/employees"><button className="px-4 py-2 bg-[#448E4A] text-white rounded-md hover:bg-green-600 transition duration-300">View Notification Inbox
              </button></Link>
                
            </div>
          </div>

          {/* Second Content */}
          <div className="p-5 shadow-md mt-[-20px] mx-5 mb-5 rounded-b-xl bg-white">
            <div className="flex items-center p-5 m-1 my-2 rounded-xl bg-[#FFEEE0]">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-md border-2 border-gray-300 bg-gray-100">
                  <img  src="/profile.png" 
                        alt="Profile Picture" 
                        className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold">Grace</p>
                  <p className="font-medium">
                    <span className="text-[#45CDAC]">UI Designer</span> # En-101-11
                  </p>
                </div>
                <div className="flex items-center justify-center h-full p-2">
                  <p className="text-center">is having their 6 month anniversary.</p>
                </div>
              </div>

              {/* Icons View and Delete */}
              <div className="flex space-x-2 ml-auto">
                <button className="text-gray-500 hover:text-green-500 transition duration-300">
                  <IoEyeSharp />
                </button>
                <button className="text-gray-500 hover:text-red-500 transition duration-300">
                  <FaTrashAlt />
                </button>
              </div>
            </div>

            <div className="flex items-center p-5 m-1 my-2 rounded-md text-[#7C5252] bg-[#E9F0FF]">
              System has just added fresh annual leave credits.

              {/* Icons View and Delete */}
              <div className="flex space-x-2 ml-auto">
                <button className="text-gray-500 hover:text-green-500 transition duration-300">
                  <IoEyeSharp />
                </button>
                <button className="text-gray-500 hover:text-red-500 transition duration-300">
                  <FaTrashAlt />
                </button>
              </div>
            </div>

            <div className="flex items-center p-5 m-1 my-2 rounded-md text-[#7C5252] bg-[#E4F4D8]">
              Nico has just been added to the system. Assign a department, approver, and schedule now.

              {/* Icons View and Delete */}
              <div className="flex space-x-2 ml-auto">
                <button className="text-gray-500 hover:text-green-500 transition duration-300">
                  <IoEyeSharp />
                </button>
                <button className="text-gray-500 hover:text-red-500 transition duration-300">
                  <FaTrashAlt />
                </button>
              </div>
            </div>

            <div className="flex items-center p-5 m-1 my-2 rounded-md text-[#7C5252] bg-[#ECE9FF]">
              <span>Assigned schedule is about to end.</span>

              {/* Icons View and Delete */}
              <div className="flex space-x-2 ml-auto">
                <button className="text-gray-500 hover:text-green-500 transition duration-300">
                  <IoEyeSharp />
                </button>
                <button className="text-gray-500 hover:text-red-500 transition duration-300">
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <BulletinBoard />
              <Departments /> 

              
            </div>

          {/* Employee Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white shadow-md rounded-lg p-0 mb-3">
              <div className="flex items-center justify-between mb-4 p-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#E4F4D8] p-3 rounded-full">
                    <img
                      src="/employee-icon.png"
                      alt="Department Icon"
                      className="w-6 h-6"
                    />
                  </div>
                  <h2 className="text-s font-semibold">Employees</h2>
                </div>
                <h3 className="text-sm text-black font-semibold font-medium">
                  Pending Linking with Company
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
                <Link href="/employees">
                <button className="flex items-center text-[#448E4A] font-medium hover:underline p-4">
                  Assign Department{" "}
                  <IoIosArrowRoundForward />
                  {/* <span className="ml-1 text-lg font-semibold">&#8594;</span> */}
                </button>
                </Link>
              </div>
            </div>

            {/* Employees without approvers */}
              <div className="bg-white shadow-md rounded-lg p-0 mb-3">
                <div className="flex items-center justify-between mb-4 p-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#E4ECFD] p-3 rounded-full">
                      <img
                        src="/employee-w-approved-icon.png"
                        alt="Department Icon"
                        className="w-6 h-6"
                      />
                    </div>
                    <h2 className="text-s font-semibold">Employees without approvers</h2>
                  </div>
                  <h3 className="text-sm text-black font-semibold font-medium">
                    No Approved Assigned
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
          </div>

          {/* Employee Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white shadow-md rounded-lg p-0 mb-3">
              <div className="flex items-center justify-between mb-4 p-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#ECE9FF] p-3 rounded-full">
                    <img
                      src="/leaves-icon.png"
                      alt="Department Icon"
                      className="w-6 h-6"
                    />
                  </div>
                  <h2 className="text-s font-semibold">Employees</h2>
                </div>
                <h3 className="text-sm text-black font-semibold font-medium w-2/4">
                  Employees who serve more than 1 year without Leaves
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
                        Served
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
                          7 months
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Assign Department Button */}
              <div className="mt-4">
                <button className="flex items-center text-[#448E4A] font-medium hover:underline p-4">
                  Allocate Leaves{" "}
                  <IoIosArrowRoundForward />
                  {/* <span className="ml-1 text-lg font-semibold">&#8594;</span> */}
                </button>
              </div>
            </div>

            {/* Employees without approvers */}
              <div className="bg-white shadow-md rounded-lg p-0 mb-3">
                <div className="flex items-center justify-between mb-4 p-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#FFEEE0] p-3 rounded-full">
                      <img
                        src="/no-schedule-icon.png"
                        alt="Department Icon"
                        className="w-6 h-6"
                      />
                    </div>
                    <h2 className="text-s font-semibold">No Assigned Schedule</h2>
                  </div>
                  <h3 className="text-sm text-black font-semibold font-medium">
                    Employees without Schedule
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
                              className="w-12 h-12 rounded-full" />
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
                    Assign Schedule{" "}
                    <IoIosArrowRoundForward />
                    {/* <span className="ml-1 text-lg font-semibold">&#8594;</span> */}
                  </button>
                </div>
              </div>
          </div>
            <AttendanceReport />

          </div>
        </div>
      </div>
    </div>
  );
}
