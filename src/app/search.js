"use client"

import { IoSettingsOutline, IoFilter } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";


export default function Search() {
    return (
<div className="flex items-center space-x-5">
          {/* Search Bar */}
          <div className="search-bar border-black border-solid relative">
          <input
            className="border-transparent rounded-xl p-2 pr-2 bg-[#E2E8F0]"
            type="text"
            placeholder="Search..."
          />
          <IoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

          <button>
            <img  src="/message-icon.png" 
                  alt="Message Icon" 
                  className="w-full h-full object-cover" />
          </button>
          <button>
            <img  src="/notif-bell-icon.png" 
                  alt="Notification Bell Icon" 
                  className="w-full h-full object-cover" />
          </button>
          <button className="w-8 h-8 rounded-full overflow-hidden shadow-md border-2 border-gray-300 flex items-center justify-center bg-gray-100">
            <img  src="/main-profile.png" 
                  alt="Profile Picture" 
                  className="w-full h-full object-cover" />
          </button>
          <button>
            <IoSettingsOutline />
          </button>
        </div>
    );
}