import React from "react";
import { useStepperContext } from "./StepperContext";

const PersonalDetails = () => {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Full Name
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["Fullname"] || ""}
            name="FullName"
            placeholder="Full Name"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Address
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["address"] || ""}
            name="address"
            type="text"
            placeholder="Address"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>{" "}
      <div className="flex">
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Email
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData["Email"] || ""}
              type="email"
              name="Email"
              placeholder="Email"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Phone Number
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData["password"] || ""}
              name="phonenumber"
              placeholder="Phone Number"
              type="number"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
