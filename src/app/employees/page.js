"use client"

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

export default function AddEmployeeForm() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Link href="/"> Home </Link>
      {/* Container */}
      <div className="bg-white shadow-md rounded-xl p-6">
        {/* Header Section */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-[#FFEEE0] p-3 rounded-full">
            <img
              src="/view-add-employee-icon.png"
              alt="Icon"
              className="w-6 h-6"
            />
          </div>
          <h1 className="text-xl font-bold">View & Add Employees</h1>
        </div>

        {/* Alert Section */}
        {showAlert && (
          <div className="bg-[#D1E7DD] border border-[#A3CFBB] text-[#0A3622] rounded-lg p-4 mb-6 relative">
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold">Title</h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-sm mt-2">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <button
                onClick={() => setShowAlert(false)}
                className="text-[#0A3622] text-xl"
              >
                <IoClose />
              </button>
            </div>
          </div>
        )}

        {/* Step 1 Section */}
        <div className="bg-white shadow-sm rounded-lg border border-gray-300 p-5">
          <h2 className="text-lg font-semibold mb-4">Step 1</h2>

          {/* Note Section */}
          <div className="bg-[#F3E8FF] border border-purple-300 text-black rounded-lg p-3 text-sm mb-6">
          <b>Note:</b> If employee has existing tubo app, we will extract employee data and autofill fields in step 2, otherwise you need to fill in all the information below.
          </div>

          {/* Form Section */}
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Middle Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Middle Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Suffix
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Suffix"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Employee Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Employee Number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Position <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Position"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date Joined
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Salary <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Salary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Allowance 1
              </label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Allowance 1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Allowance 2
              </label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Allowance 2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>-- Select Company --</option>
                <option>Company A</option>
                <option>Company B</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Agency
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>-- Select Agency --</option>
                <option>Agency A</option>
                <option>Agency B</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Payroll Period
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>

            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Department
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Department"
              />
            </div>
          </form>
        </div>
























        {/* Step 2 Section */}
        <div className="bg-white shadow-sm rounded-lg border border-gray-300 p-5 mt-10">
          <h2 className="text-lg font-semibold mb-4">Step 2</h2>

          {/* Note Section */}
          <div className="bg-[#F3E8FF] border border-purple-300 text-black rounded-lg p-3 text-sm mb-6">
            <b>Note:</b> If employee has existing tubo app , We will extract employee data and autofill fields in step 2, otherwise you need fill in all the information below
          </div>

          {/* Form Section */}
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mibile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Mobile Number"
                maxLength={11}
                pattern="09[0-9]{9}"
                required />

            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email Address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Birth Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div></div>

            <label className="font-bold">Home Address:</label> <br />
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Province
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Province" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City 
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="City" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Barangay
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Barangay" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Street
              </label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Street" />
            </div>
          </form>
        </div>




      </div>
    </div>
  );
}
