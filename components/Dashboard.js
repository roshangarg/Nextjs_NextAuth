import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { MdOutlineNotifications } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import { BsCamera } from "react-icons/bs";
import { CiPen } from "react-icons/ci";
import { FiThumbsUp } from "react-icons/fi";
import { TbUsers } from "react-icons/tb";
import { Chart } from "react-chartjs-2";
import chartImg from "../public/chartImg.png";
import {
  Chart as ChartJS,
  LineElement,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Image from "next/image";

ChartJS.register(
  LineElement,
  CategoryScale,
  LineController,
  LinearScale,
  PointElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const { data: session } = useSession();
  // const [chartData, setChartData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("YOUR_API_URL");
  //       const data = await response.json();
  //       setChartData(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const cards = [
    {
      icon: <BsCamera class="text-black font-bold" />,
      background: "bg-green-100",
      text: "Total Revenues",
      charges: "$2,129,430",
    },
    {
      icon: <CiPen class="text-black font-bold" />,
      text: "Total Transaction",
      background: "bg-yellow-50",
      charges: "1,520",
    },
    {
      icon: <FiThumbsUp class="text-black font-bold" />,
      text: "Total Likes",
      background: "bg-red-50",
      charges: "7,232",
    },
    {
      icon: <TbUsers class="text-black font-bold" />,
      text: "Total Users",
      background: "bg-indigo-100",
      charges: "890",
    },
  ];

  const data = {
    labels: ["Week 1", "week 2", "week 3", "week 4"],
    datasets: [
      {
        label: "Users",
        data: [50, 20, 199, 200, 400, 500, 33, 232, 433, 150],
        // backgroundColor: "rgba(52, 122, 226,0.1)",
        borderColor: "#9BDD7C",
      },
      {
        label: "Guest",
        data: [100, 150, 50, 250],
        borderColor: "#E9A0A0",
      },
    ],
  };

  const option = {
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
      axis: "x",
    },

    plugins: {
      legend: false,
    },
    scales: {
      y: {
        ticks: {
          padding: 10,
        },
      },
      x: {
        gridLines: {
          drawBorder: false,
        },
        grid: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 0, // Remove dots at intersection points
      },
    },
  };
  return (
    <div class="w-full h-100vh ">
      <div class="mx-5">
        <div class="flex flex-col sm:flex-row items-center mt-5">
          <div class="flex-1 mb-4 sm:mb-0">
            <h5 class="font-sans text-black text-2xl font-bold leading-7 tracking-normal text-left">
              <span class="hidden sm:inline">Dashboard</span>
            </h5>
          </div>
          <div class="flex items-center">
            <div class="relative">
              <input
                type="text"
                placeholder="Search"
                class="pl-4 pr-10 py-2 bg-white border-none rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 md:w-60 sm:w-40"
              />
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <RiSearchLine class="text-gray-400" />
              </div>
            </div>
            <MdOutlineNotifications class="text-xl text-black mx-4 sm:mx-2" />
            <img
              width="30px"
              height="22px"
              class="rounded-full"
              src={session.user.image}
              onClick={() => signOut()}
            />
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 my-3">
          {cards.map((item, i) => (
            <div
              key={i}
              class={`${item.background} p-4 shadow rounded-lg text-black`}
            >
              <div class="flex justify-end">{item.icon}</div>
              <p class="font-sans1 text-base font-normal leading-17 tracking-normal text-left">
                {item.text}
              </p>
              <p class="font-open-sans text-2xl font-bold leading-33 tracking-normal text-left">
                {item.charges}
              </p>
            </div>
          ))}
        </div>
        <div class=" flex flex-col w-full  rounded-lg bg-white p-3">
          <div class="flex text-center ">
            <div class="flex-1">
              <h6 class=" font-sans text-black font-bold leading-22 tracking-normal text-left">
                Activities
              </h6>
              <p class="font-sans text-gray-500 text-sm font-normal leading-17 tracking-normal text-left">
                May - June 2021
              </p>
            </div>
            <div class="flex">
              <p class="w-2 h-2 rounded-full bg-pink-300 mr-2 mt-1.5 "></p>
              <h1 class="font-sans1 text-black text-sm font-normal leading-17 tracking-normal text-left">
                Guest
              </h1>
              <p class="w-2 h-2 rounded-full bg-green-300 mr-2 mt-1.5 ml-2 "></p>
              <h1 class="font-sans1 text-black text-sm font-normal leading-17 tracking-normal text-left">
                User
              </h1>
            </div>
          </div>
          <div class="flex-1">
            <Chart type="line" data={data} options={option} />
          </div>
        </div>
        <div class=" grid grid-cols-1 sm:grid-cols-2 gap-8 my-3">
          <div class="  w-full  rounded-lg bg-white p-3">
            <div class="flex">
              <div class="flex-1">
                <h6 class="font-sans  text-black font-bold leading-6 tracking-normal text-left">
                  {" "}
                  Top Products
                </h6>
              </div>
              <div class="font-sans text-gray-500 text-xs font-normal leading-4 tracking-normal text-left ">
                May - June 2021
              </div>
            </div>
            <div class="flex">
              <div class="mr-10">
                <Image src={chartImg} alt="chart" />
              </div>
              <div>
                <div class="flex ">
                  <p class="w-2 h-2 rounded-full bg-green-300 mr-2 mt-1.5 "></p>
                  <div>
                    <h1 class="font-sans  text-black font-bold leading-6 tracking-normal text-left">
                      Basic Tees
                    </h1>
                    <p class="font-sans text-gray-500 text-xs font-normal leading-4 tracking-normal text-left ">
                      55%
                    </p>
                  </div>
                </div>
                <div class="flex ">
                  <p class="w-2 h-2 rounded-full bg-pink-300 mr-2 mt-1.5 "></p>
                  <div>
                    <h1 class="font-sans  text-black font-bold leading-6 tracking-normal text-left">
                      Custom Short Pants
                    </h1>
                    <p class="font-sans text-gray-500 text-xs font-normal leading-4 tracking-normal text-left ">
                      13%
                    </p>
                  </div>
                </div>
                <div class="flex ">
                  <p class="w-2 h-2 rounded-full bg-yellow-200 mr-2 mt-1.5 "></p>
                  <div>
                    <h1 class="font-sans  text-black font-bold leading-6 tracking-normal text-left">
                      Super Hoodies
                    </h1>
                    <p class="font-sans text-gray-500 text-xs font-normal leading-4 tracking-normal text-left ">
                      31%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=" w-full  rounded-lg bg-white p-3">
            <div class="flex">
              <div class="flex-1">
                <h6 class="font-sans  text-black font-bold leading-6 tracking-normal text-left">
                  {" "}
                  Today’s schedule
                </h6>
              </div>
              <div class="font-sans text-gray-500 text-xs font-normal leading-4 tracking-normal text-left ">
                See All
              </div>
            </div>
            <div>
              <div class="flex ">
                <p class="w-1  rounded-full bg-green-300 mr-2 mt-1.5 "></p>
                <div>
                  <p class="font-sans1  text-gray-400 font-bold text-xs leading-6 tracking-normal text-left">
                    Meeting with suppliers from Kuta Bali
                  </p>
                  <p class="font-sans1 text-gray-500 text-xs font-normal leading-5 tracking-normal text-left ">
                    14:00 - 15:00
                  </p>
                  <p class="font-sans1 text-gray-500 text-xs font-normal leading-5 tracking-normal text-left ">
                    at Sunset Road, Kuta, Bali
                  </p>
                </div>
              </div>
              <div class="flex ">
                <p class="w-1  rounded-full bg-pink-300 mr-2 mt-1.5 "></p>
                <div>
                  <p class="font-sans1  text-gray-400 font-bold text-xs leading-6 tracking-normal text-left">
                    Meeting with suppliers from Kuta Bali
                  </p>
                  <p class="font-sans1 text-gray-500 text-xs font-normal leading-5 tracking-normal text-left ">
                    14:00 - 15:00
                  </p>
                  <p class="font-sans1 text-gray-500 text-xs font-normal leading-5 tracking-normal text-left ">
                    at Sunset Road, Kuta, Bali
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
