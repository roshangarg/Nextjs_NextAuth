import React from "react";
import { RiDashboard3Line } from "react-icons/ri";
import { CiPen } from "react-icons/ci";
import { AiOutlineSchedule, AiFillSetting } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
const Sidebar = () => {
  return (
    <div class="hidden md:flex flex-col h-100vh bg-black p-5 px-6 rounded-xl w-60 m-2 mr-5 text-white ">
      <div class="">
        <h1 class="font-sans text-white text-3xl font-bold leading-11 tracking-normal text-left text-left mt-5">
          Board.
        </h1>
      </div>
      <div class="flex-grow text-white">
        <ul class="flex flex-col mt-8">
          <li class="py-2 ">
            <a
              href="#"
              class="flex items-center text-white font-sans text-md font-bold leading-5 tracking-normal text-left"
            >
              <svg
                class="w-6 h-6 mr-2 mt-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <RiDashboard3Line />
              </svg>
              Dashboard
            </a>
          </li>
          <li class="py-2">
            <a
              href="#"
              class="flex items-center font-sans text-md font-bold leading-5 tracking-normal text-left text-white"
            >
              <svg
                class="w-6 h-6 mr-2 mt-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <CiPen />
              </svg>
              Transaction
            </a>
          </li>
          <li class="py-2">
            <a
              href="#"
              class="flex items-center font-sans text-md font-bold leading-5 tracking-normal text-left text-white"
            >
              <svg
                class="w-6 h-6 mr-2 mt-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <AiOutlineSchedule />
              </svg>
              Schedules
            </a>
          </li>
          <li class="py-2">
            <a
              href="#"
              class="flex items-center font-sans text-md font-bold leading-5 tracking-normal text-left text-white"
            >
              <svg
                class="w-6 h-6 mr-2 mt-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <BiUserCircle />
              </svg>
              User
            </a>
          </li>
          <li class="py-2 ">
            <a
              href="#"
              class="flex items-center font-sans text-md font-bold leading-5 tracking-normal text-left text-white"
            >
              <svg
                class="w-6 h-6 mr-2 mt-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <AiFillSetting />
              </svg>
              Settings
            </a>
          </li>
        </ul>
      </div>
      <div class="p-4 mt-auto">
        <ul class="flex flex-col">
          <li class="py-2 ">
            <a
              href="#"
              class="flex items-center font-sans text-md font-bold leading-5 tracking-normal text-left text-white"
            >
              Help
            </a>
          </li>
          <li class="py-2 ">
            <a
              href="#"
              class="flex items-center font-sans text-md font-bold leading-5 tracking-normal text-left text-white"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
