import React, { useState, useRef, useEffect } from "react";

import { Button, Img, Input, Line, Radio, RadioGroup, Text } from "components";
import { Link } from "react-router-dom";

import "reactjs-popup/dist/index.css";
const DesktopTwoPage = () => {
  const [currentTime, setCurrentTime] = useState("");

  const [tableData, setTableData] = useState([]);

  const vehicleTypeRef = useRef(null);
  const vehicleNoRef = useRef(null);
  const amountRef = useRef(null);
  const barcodeRef = useRef(null);

  useEffect(() => {
    // Update current time every second
    const interval = setInterval(() => {
      const now = new Date();
      let hours = now.getHours();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12; // Convert hours to 12-hour format
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes} ${ampm}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Run once on component mount

  useEffect(() => {
    // Fetch data from localStorage when component mounts
    const storedData = JSON.parse(localStorage.getItem("tollData")) || [];
    setTableData(storedData);
  }, []);

  const handleCompleteClick = () => {
    const now = new Date();
    let hours = now.getHours();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert hours to 12-hour format
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const currentDate = `${now.getFullYear()}-${(now.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")}`;
    const currentTime = `${hours}:${minutes} ${ampm}`;

    const data = {
      vehicleType: vehicleTypeRef.current.value,
      vehicleNo: vehicleNoRef.current.value,
      amount: amountRef.current.value,
      barcodeRef: barcodeRef.current.value,
      transactionId: Math.floor(Math.random() * 1000000),
      currentDate: currentDate,
      currentTime: currentTime,
    };

    // Update table data
    setTableData((prevData) => [...prevData, data]);

    // Store data in localStorage
    localStorage.setItem("tollData", JSON.stringify([...tableData, data]));

    alert(`Toll for vehicle is Completed ✔️.`);
    console.log("submit data");

    // Clear input fields
    vehicleTypeRef.current.value = "";
    vehicleNoRef.current.value = "";
    amountRef.current.value = "";
    barcodeRef.current.value = "";
  };

  const handleCancelClick = () => {
    // Clear input fields
    vehicleTypeRef.current.value = "";
    vehicleNoRef.current.value = "";
    amountRef.current.value = "";
    barcodeRef.current.value = "";
  };

  const renderToggleButton = (label) => (
    <Button
      className="toggle-button"
      shape="round"
      size="sm"
      onClick={() => console.log(`${label} button clicked`)}
    >
      {label}
    </Button>
  );

  return (
    <>
      <div className="bg-indigo-50 flex flex-col font-poppins items-center justify-start mx-auto pb-[5px] px-[5px] w-full">
        <div className="flex flex-col items-center justify-start max-w-[1643px] mb-4 mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-[19px] items-center justify-between w-full">
            <Img
              className="h-[92px] md:h-auto object-cover"
              src="images/img_impactlogotransparent.png"
              alt="impactlogotrans"
            />
            <div className="bg-white-A700 flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between mb-5 md:mt-0 mt-3 p-1 rounded-[15px] shadow-bs w-[82%] md:w-full">
              <Text
                className="mb-1.5 md:ml-[0] ml-[9px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                size="txtPoppinsRegular30"
              >
                <span className="text-indigo-A700_7f font-poppins text-left font-bold">
                  INFO
                </span>
                <span className="text-indigo-A700_7f font-poppins text-left font-normal">
                  {" "}
                </span>
                <span className="text-indigo-A700_7f font-poppins text-left font-bold">
                  :
                </span>
                <span className="text-white-A700 font-poppins text-left font-normal">
                  {" "}
                </span>
                <span className="text-black-900 font-poppins text-left font-medium">
                  RS01 RAJASTHAN OPERATOR C{" "}
                </span>
                <span className="text-white-A700 font-poppins text-left font-medium">
                  {" "}
                </span>
              </Text>
              <Text
                className="mr-[26px] md:mt-0 my-0.5 text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                size="txtPoppinsMedium30"
              >
                {currentTime}
              </Text>
            </div>
          </div>

          <div className="flex flex-col gap-[26px] items-center justify-start w-[99%] md:w-full">
            <div className="bg-white-A700 flex flex-row items-center justify-start p-[7px] rounded-[15px] shadow-bs w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-5 w-[98%]">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtPoppinsBold30"
                >
                  F10
                </Text>
                <div className="h-[38px] md:ml-[0] ml-[15px] relative w-[8%] md:w-full">
                  <div className="absolute bg-green-100 h-[37px] inset-[0] justify-center m-auto rounded-[18px] w-full"></div>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-green-A700 w-max"
                    size="txtPoppinsMedium25"
                  >
                    CASH
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[90px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtPoppinsBold30"
                >
                  F11
                </Text>
                <div className="h-[38px] md:ml-[0] ml-[17px] relative w-[11%] md:w-full">
                  <div className="absolute bg-red-100 h-[37px] inset-[0] justify-center m-auto rounded-[18px] w-full"></div>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-red-600 w-max"
                    size="txtPoppinsMedium25Red600"
                  >
                    EXEMPTED
                  </Text>
                </div>
                <Text
                  className="h-[45px] md:ml-[0] ml-[90px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtPoppinsBold30"
                >
                  F12
                </Text>
                <div className="h-[38px] ml-3.5 md:ml-[0] relative w-[7%] md:w-full">
                  <div className="absolute bg-red-100 h-[37px] inset-[0] justify-center m-auto rounded-[18px] w-full"></div>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-red-600 w-max"
                    size="txtPoppinsMedium25Red600"
                  >
                    PASS
                  </Text>
                </div>
                <Text
                  className="bg-gray-700_33 h-[42px] justify-center md:ml-[0] ml-[668px] sm:pl-5 pl-[26px] pr-[18px] py-0.5 rounded-[20px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900_01 w-[141px] cursor-pointer"
                  size="txtPoppinsMedium25Black90001"
                  onClick={() => {
                    alert("You've logged out");
                  }}
                >
                  LogOut
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-[49%] md:w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[2px] outline-gray-300 p-[11px] rounded-[10px] shadow-bs w-full">
                  <div className="flex flex-col items-start justify-start mb-[18px] w-[94%] md:w-full">
                    <div className="flex flex-row sm:gap-10 gap-[257px] items-start justify-start w-[79%] md:w-full">
                      <Text
                        className="mb-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtPoppinsSemiBold25"
                      >
                        VehicleNo
                      </Text>
                      <select
                        ref={vehicleTypeRef}
                        className="mt-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      >
                        <option value="">Select Vehicle Type</option>
                        <option value="Car">Car</option>
                        <option value="Jeep">Jeep</option>
                        <option value="LCV">LCV</option>
                        <option value="Bus">Bus</option>
                        <option value="Truck">Truck</option>
                        <option value="MAV">MAV</option>
                        <option value="Auto">Auto</option>
                      </select>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[3px] w-full">
                      <Input
                        ref={vehicleNoRef}
                        name="groupTwentyThree"
                        placeholder="Enter no"
                        className="font-medium leading-[normal] p-0 placeholder:text-gray-600 text-left text-xl w-full"
                        wrapClassName="md:flex-1 outline outline-[3px] outline-gray-300 md:w-full"
                        size="sm"
                        onChange={(e) => setVehicleNo(e.target.value)}
                      ></Input>
                    </div>
                    <div className="flex flex-row sm:gap-10 gap-[289px] items-center justify-start mt-[38px] w-[78%] md:w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtPoppinsSemiBold25"
                      >
                        Amount
                      </Text>
                      <Text
                        className="sm:text-[18px] md:text-[21px] text-[23px] text-black-900"
                        size="txtPoppinsSemiBold25"
                      >
                        BarcodeRef
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[5px] w-full">
                      <Input
                        ref={amountRef}
                        name="groupTwentyOne"
                        placeholder="Enter amount"
                        className="font-medium leading-[normal] p-0 placeholder:text-gray-600 text-left text-xl w-full"
                        wrapClassName="sm:flex-1 outline outline-[3px] outline-gray-300 sm:w-full"
                        onChange={(e) => setAmount(e.target.value)}
                      ></Input>
                      <Input
                        ref={barcodeRef}
                        name="groupTwentyTwo"
                        placeholder="Enter code"
                        className="font-medium leading-[normal] p-0 placeholder:text-gray-600 text-left text-xl w-full"
                        wrapClassName="sm:flex-1 outline outline-[3px] outline-gray-300 sm:w-full"
                        onChange={(e) => setBarcodeRef(e.target.value)}
                      ></Input>
                    </div>
                    <Text
                      className="mt-[45px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtPoppinsSemiBold25"
                    >
                      Select Journey
                    </Text>
                    <RadioGroup
                      className="flex mt-2.5 w-[52%]"
                      name="radiogroupsingles"
                    >
                      <Radio
                        value="SingleS"
                        className="leading-[normal] sm:pl-5 text-black-900 text-left text-xl"
                        inputClassName="bg-blue-700_cc h-[25px] mr-[5px] outline outline-[2px] outline-gray-300 w-[25px]"
                        checked={false}
                        name="radiogroupsingles"
                        label="Single S"
                        id="SingleS"
                      ></Radio>
                      <Radio
                        value="Clear"
                        className="leading-[normal] ml-[76px] sm:pl-5 text-black-900 text-left text-xl"
                        inputClassName="bg-white-A700_cc h-[25px] mr-[5px] outline outline-[2px] outline-gray-300 w-[25px]"
                        checked={false}
                        name="radiogroupsingles"
                        label="Clear "
                        id="Clear"
                      ></Radio>
                    </RadioGroup>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[45px] w-full">
                      <div className="bg-indigo-50 flex flex-row gap-[7px] items-start justify-start outline outline-[1px] outline-gray-400 p-[7px] rounded-[10px] shadow-bs">
                        <Text
                          className="ml-1.5 sm:text-[21px] md:text-[23px] text-[25px] text-blue-700"
                          size="txtPoppinsMedium25Blue700"
                        >
                          ETC TAG READ
                        </Text>
                        <Text
                          className="mt-0.5 text-blue-700 text-xl"
                          size="txtPoppinsMedium20"
                        >
                          [F9]
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[148px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                        shape="round"
                        size="sm"
                      >
                        SIREN ON
                      </Button>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[148px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                        shape="round"
                        color="red_600"
                        size="sm"
                      >
                        SIREN OFF
                      </Button>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[29px] w-full">
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[249px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                        shape="round"
                        color="blue_700"
                        onClick={handleCompleteClick}
                      >
                        COMPLETE
                      </Button>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[148px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                        shape="round"
                      >
                        WAIT
                      </Button>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[148px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                        shape="round"
                        color="red_600"
                        onClick={handleCancelClick}
                      >
                        CANCEL
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200 flex flex-col items-center justify-end p-2 rounded-[10px] w-full">
                  <Link to="/history">
                    <table className="bg-gray-200 rounded-[10px] w-full">
                      <thead>
                        <tr>
                          <th className="border border-gray-300 px-4 py-2">
                            Vehicle No
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Transaction ID
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Amount
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Car Type
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            date
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            TimeStamp
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((item, index) => (
                          <tr key={index}>
                            <td>{item.vehicleNo}</td>
                            <td>{item.transactionId}</td>
                            <td>{item.amount}</td>
                            <td>{item.vehicleType}</td>
                            <td className="text-xs px-2 py-1">
                              {item.currentDate}
                            </td>
                            <td>{item.currentTime}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Link>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[26px] items-center justify-start w-[22%] md:w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-start p-[5px] rounded-[10px] w-full">
                  <Img
                    className="h-[261px] md:h-auto object-cover rounded-[10px] w-[99%]"
                    src="images/img_b1bf7913c1524_261x338.png"
                    alt="b1bf7913c1524_One"
                  />
                </div>
                <div className="md:h-[498px] h-[501px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[9px] rounded-[10px] shadow-bs w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start mt-[51px] w-[93%] md:w-full">
                      <label class="relative inline-flex items-center justify-between cursor-pointer">
                        <span class="text-sm font-medium text-black dark:text-gray-300 mr-4">
                          CHILS
                        </span>
                        <input
                          type="checkbox"
                          value=""
                          class="sr-only peer ml-9"
                        />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:end-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                      <label class="relative inline-flex items-center justify-between cursor-pointer">
                        <span class="text-sm font-medium text-black dark:text-gray-300 mr-4">
                          VIDEO
                        </span>
                        <input
                          type="checkbox"
                          value=""
                          class="sr-only peer ml-9"
                        />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:end-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                      <label class="relative inline-flex items-center justify-between cursor-pointer">
                        <span class="text-sm font-medium text-black dark:text-gray-300 mr-4">
                          BARRIER
                        </span>
                        <input
                          type="checkbox"
                          value=""
                          class="sr-only peer ml-9"
                        />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:end-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                      <label class="relative inline-flex items-center justify-between cursor-pointer">
                        <span class="text-sm font-medium text-black dark:text-gray-300 mr-4">
                          CONTROL
                        </span>
                        <input
                          type="checkbox"
                          value=""
                          class="sr-only peer ml-9"
                        />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:end-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                      <label class="relative inline-flex items-center justify-between cursor-pointer">
                        <span class="text-sm font-medium text-black dark:text-gray-300 mr-4">
                          TRAFFIC LIGHT
                        </span>
                        <input
                          type="checkbox"
                          value=""
                          class="sr-only peer ml-9"
                        />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:end-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                      <label class="relative inline-flex items-center justify-between cursor-pointer">
                        <span class="text-sm font-medium text-black dark:text-gray-300 mr-4">
                          AVCC SENSOR
                        </span>
                        <input
                          type="checkbox"
                          value=""
                          class="sr-only peer ml-9"
                        />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:end-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>

                      <div className="h-[67px] relative w-full">
                        <div className="absolute bg-indigo-50 border border-black-900 border-solid flex flex-row h-full inset-[0] items-start justify-between m-auto p-[11px] rounded-[10px] w-full">
                          <div className="h-[23px] md:h-[43px] ml-2.5 mt-5 relative rounded-[5px] shadow-bs w-[27%]">
                            <div className="absolute bg-black-900 border border-black-900 border-solid h-[22px] inset-x-[0] mx-auto rounded-[5px] top-[0] w-full"></div>
                            <Text
                              className="absolute h-full inset-y-[0] left-[12%] my-auto text-[15px] text-white-A700_e5"
                              size="txtPoppinsMedium15"
                            >
                              LABEL 11
                            </Text>
                          </div>
                          <div className="h-[23px] md:h-[43px] mr-[9px] mt-5 relative rounded-[5px] shadow-bs w-[41%]">
                            <div className="absolute bg-green-A700 h-[22px] inset-x-[0] mx-auto rounded-[5px] top-[0] w-full"></div>
                            <Text
                              className="absolute h-full inset-[0] justify-center m-auto text-[15px] text-white-A700 w-max"
                              size="txtPoppinsMedium15WhiteA700"
                            >
                              SMART CARD
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="absolute inset-x-[0] mx-auto text-black-900 text-xl top-[0] w-max"
                          size="txtPoppinsMedium20Black900"
                        >
                          SMART CARD
                        </Text>
                      </div>
                      <div className="bg-indigo-50 border border-black-900 border-solid flex flex-col items-center justify-start pb-2 px-2 rounded-[10px] w-full">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtPoppinsMedium20Black900"
                        >
                          UFD DISPLAY
                        </Text>
                        <div className="bg-black-900_b2 border border-black-900 border-solid flex flex-col gap-[26px] items-center justify-start p-1.5 w-[73%] md:w-full">
                          <Line className="bg-red-A700 h-0.5 mt-[17px] w-full" />
                          <Line className="bg-red-A700 h-0.5 mb-[17px] w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="absolute inset-x-[0] mx-auto sm:text-[21px] md:text-[23px] text-[25px] text-black-900 top-[0] w-max"
                    size="txtPoppinsSemiBold25"
                  >
                    Device Status
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[27px] items-center justify-start w-[27%] md:w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-start p-1.5 rounded-[10px] w-full">
                  <Img
                    className="h-[338px] md:h-auto object-cover rounded-[10px] w-full"
                    src="images/img_b1bf7913c1524_338x410.png"
                    alt="b1bf7913c1524_Two"
                  />
                </div>
                <div className="bg-white-A700 flex flex-col gap-4 items-center justify-start pb-[26px] sm:px-5 px-[26px] rounded-[10px] shadow-bs w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                    size="txtPoppinsSemiBold25"
                  >
                    ETC Status
                  </Text>
                  <div className="flex flex-col gap-6 items-center justify-start mb-3.5 w-[99%] md:w-full">
                    <div className="bg-indigo-50 border border-black-900 border-solid flex flex-col items-center justify-start pb-2 px-2 rounded-[10px] w-full">
                      <div className="flex flex-col items-start justify-start w-[97%] md:w-full">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtPoppinsMedium20Black900"
                        >
                          DEVICE STATUS
                        </Text>
                        <div className="flex flex-row items-start justify-between mt-0.5 w-full">
                          <Text
                            className="text-green-A700 text-xl"
                            size="txtPoppinsMedium20GreenA700"
                          >
                            ETC Connected
                          </Text>
                          <Text
                            className="bg-white-A700 border border-blue_gray-100 border-solid h-[29px] justify-center pl-[11px] pr-2 py-0.5 rounded-[5px] text-[15px] text-blue-700 text-shadow-ts w-[123px]"
                            size="txtPoppinsMedium15Blue700"
                          >
                            TECHNOV\AA
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-indigo-50 border border-black-900 border-solid flex flex-col items-center justify-start pb-[5px] px-[5px] rounded-[10px] w-full">
                      <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtPoppinsMedium20Black900"
                        >
                          TAG STATUS
                        </Text>
                        <Text
                          className="mt-[7px] text-blue-700 text-xl"
                          size="txtPoppinsMedium20"
                        >
                          Tag Not Read
                        </Text>
                        <Text
                          className="text-blue-700 text-xl"
                          size="txtPoppinsMedium20"
                        >
                          18/12/2023 01:51
                        </Text>
                        <div className="flex flex-row items-start justify-between mt-2.5 w-full">
                          <Text
                            className="mt-1 text-blue-700 text-xl"
                            size="txtPoppinsMedium20"
                          >
                            Tag ID
                          </Text>
                          <Text
                            className="bg-white-A700 border border-blue_gray-100 border-solid h-[29px] justify-center mb-[5px] px-[5px] py-[3px] rounded-[5px] text-[15px] text-blue-700 text-shadow-ts w-[146px]"
                            size="txtPoppinsMedium15Blue700"
                          >
                            ETC Device Check
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-indigo-50 border border-black-900 border-solid flex flex-row items-center justify-between p-2.5 rounded-[10px] w-full">
                      <Text
                        className="bg-black-900 border border-black-900 border-solid h-6 justify-center my-[7px] px-[5px] rounded-[5px] text-[15px] text-white-A700_e5 w-[87px]"
                        size="txtPoppinsMedium15"
                      >
                        OR ONLINE
                      </Text>
                      <Button
                        className="border border-blue_gray-100 border-solid cursor-pointer font-medium leading-[normal] min-w-[146px] mr-1.5 my-[5px] rounded-[5px] text-[15px] text-center"
                        color="white_A700"
                      >
                        Cash Entry [S/H]
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTwoPage;
