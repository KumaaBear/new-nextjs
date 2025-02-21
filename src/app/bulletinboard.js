"use client"

import { IoSettingsOutline, IoFilter } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

export default function BulletinBoard() {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-[#E0F2FE] p-3 rounded-full">
              <img
                src="/bulletin-icon.png"
                alt="Bulletin Icon"
                className="w-6 h-6" />
            </div>
            <h2 className="text-s font-semibold">Bulletin Board</h2>
          </div>
          <button className="bg-[#448E4A] text-white px-4 py-1 rounded-lg font-medium hover:bg-green-600">
            View
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Type text..."/>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Applicable to what Department"/>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-[#448E4A] text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600">
              Publish
            </button>
            <button
              type="button"
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-300">
              Cancel
            </button>
          </div>
        </form>
    </div>
    );
}