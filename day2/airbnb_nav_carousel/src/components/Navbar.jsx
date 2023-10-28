import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between px-8 pt-4 pb-6 border-b-gray-400 border">
        <div className="w-28 h-9">
          <img src="src\assets\longlogo.png" alt="LOGO" />
        </div>
        <div className="flex justify-around px-4 py-2 w-96 h-min border border-gray-400 rounded-3xl shadow-sm shadow-gray-500">
          <div className="mr-2">Anywhere</div>
          <div>|</div>
          <div>Any Week</div>
          <div>|</div>
          <div className="text-gray-400">Add Guests</div>
          <button className="w-8 h-8 rounded-full bg-[#ff385c] items-center justify-center p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="4"
              stroke="white"
              class="w-3 h-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        <div className="flex px-4 w-96 justify-evenly items-center h-max">
          <div className="font-bold mt-3">Airbnb your home</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 mt-4 mr-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </div>
          <div className="px-3 flex justify-evenly h-6 w-6">
            <button className="flex border border-gray-400 rounded-3xl h-12 p-4 justify-between items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <div className="rounded-full bg-black text-white font-light h-8 w-8 ml-2 flex justify-center items-center">D</div>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
