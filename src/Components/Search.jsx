import React from "react";
import { IoMdSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Search = () => {
  return (
    <div className=" py-[10rem] px-4 bg-white">
      <h1 className="text-center font-bold text-3xl">
        Temukan Berbagai Vehicle disini!
      </h1>
      <div className="searchDiv grid gap-10 bg-greyIsh rounded-[20px] p-[3rem] mt-[5rem]">
        <form action="">
          <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">
            <div className="flex gap-2 items-center ">
              <IoMdSearch size={40} className="cursor-pointer text-[25px]" />
              <input
                type="text"
                className="bg-transparent text-blue-500 focus:outline-none w-[100%] "
                placeholder="Search Vehicle Here..."
              />
              <IoMdClose className="text-[30px] text-[#a5a6a6] hover:text-textColor icon " />
            </div>
            <div className="flex gap-2 items-center ">
              <IoMdHome size={40} className="cursor-pointer text-[25px]" />
              <input
                type="text"
                className="bg-transparent text-blue-500 focus:outline-none w-[100%] "
                placeholder="Search By Company..."
              />
              <IoMdClose className="text-[30px] text-[#a5a6a6] hover:text-textColor icon " />
            </div>
            <div className="flex gap-2 items-center ">
              <FaLocationDot className="cursor-pointer text-[25px]" />
              <input
                type="text"
                className="bg-transparent text-blue-500 focus:outline-none w-[100%] "
                placeholder="Search By Location..."
              />
              <IoMdClose className="text-[30px] text-[#a5a6a6] hover:text-textColor icon " />
            </div>
            <button className="bg-blueColor h-full p-3 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300">
              Search
            </button>
          </div>
        </form>

        <div className="searchDiv flex items-center gap-10 justify-center">
          <div className="singleSearch flex items-center gap-2 ">
            <label htmlFor="relevance" className="text-[#808080] font-semibold">
              Sort by:
            </label>
            <select
              name=""
              id="relevance"
              className="bg-white rounded-[3px] px-4 "
            >
              <option value="">Relevance</option>
              <option value="">Inclusive</option>
              <option value="">Starts With</option>
              <option value="">Contains</option>
            </select>
          </div>
          <div className="singleSearch flex items-center gap-2 ">
            <label htmlFor="Inclusive" className="text-[#808080] font-semibold">
              Type:
            </label>
            <select
              name=""
              id="Inclusive"
              className="bg-white rounded-[3px] px-4 "
            >
              <option value="">Relevance</option>
              <option value="">Inclusive</option>
              <option value="">Starts With</option>
              <option value="">Contains</option>
            </select>
          </div>
          <div className="singleSearch flex items-center gap-2 ">
            <label htmlFor="Beginneer" className="text-[#808080] font-semibold">
              Level:
            </label>
            <select
              name=""
              id="Beginneer"
              className="bg-white rounded-[3px] px-4 "
            >
              <option value="">Relevance</option>
              <option value="">Inclusive</option>
              <option value="">Starts With</option>
              <option value="">Contains</option>
            </select>
          </div>
          <span className="text-[#a1a1a1] cursor-pointer">Clear All</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
