import React from "react";
import ProfileCard from "./ProfileCard";
import Profilehero from "./Profilehero";

const PersonalProfile = () => {
  return (
    <>
      <div class="relative main-content bg-[#adb5bd]  ">
        <Profilehero />

        <div class=" md:grid grid-cols-3  gap-8 h-[100%] sm:relative px-8 lg:mt-7 pb-8 bg-[#c7cbcf] flex flex-col-reverse ">
          <div class=" col-span-2   ">
            <form
              novalidate=""
              action=""
              className="container flex flex-col mx-auto   ng-untouched ng-pristine ng-valid "
            >
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-[#5e72e4]">
                <div className="space-y-2 col-span-full lg:col-span-1">
                  <p className="font-medium">User Inormation</p>
                  <p className="text-xs">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Adipisci fuga autem eum!
                  </p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label for="firstname" className="text-sm">
                      First name
                    </label>

                    <input
                      type="text"
                      id="disabled-input-2"
                      aria-label="disabled input 2"
                      class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed  dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value="Tunde"
                      disabled
                      readonly
                    ></input>
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label for="lastname" className="text-sm">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="disabled-input-2"
                      aria-label="disabled input 2"
                      class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed  dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value="Philps"
                      disabled
                      readonly
                    ></input>
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label for="email" className="text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      id="disabled-input-2"
                      aria-label="disabled input 2"
                      class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed  dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value="tundephilps@gmail.com"
                      disabled
                      readonly
                    ></input>
                  </div>
                  <div className="col-span-full">
                    <label for="address" className="text-sm">
                      Address
                    </label>
                    <input
                      type="text"
                      id="disabled-input-2"
                      aria-label="disabled input 2"
                      class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed  dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value="Lagos, Nigeria"
                      disabled
                      readonly
                    ></input>
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label for="city" className="text-sm">
                      City
                    </label>
                    <input
                      type="text"
                      id="disabled-input-2"
                      aria-label="disabled input 2"
                      class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed  dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value="Lagos"
                      disabled
                      readonly
                    ></input>
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label for="state" className="text-sm">
                      Country
                    </label>
                    <input
                      type="text"
                      id="disabled-input-2"
                      aria-label="disabled input 2"
                      class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed  dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value="Nigeria"
                      disabled
                      readonly
                    ></input>
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label for="zip" className="text-sm">
                      ZIP / Postal
                    </label>
                    <input
                      type="number"
                      id="disabled-input-2"
                      aria-label="disabled input 2"
                      class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed  dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value="234"
                      disabled
                      readonly
                    ></input>
                  </div>
                </div>
              </fieldset>
              <fieldset
                className="grid grid-cols-4  p-6  shadow-lg  bg-[#5e72e4]"
                style={{ borderRadius: "0, 0, 10px, 10px" }}
              >
                <div className="space-y-2 col-span-full lg:col-span-1">
                  <p className="font-medium">Contact Details</p>
                  <p className="text-xs">Adipisci fuga autem eum!</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label for="username" className="text-sm">
                      Username
                    </label>
                    <input
                      id="username"
                      type="text"
                      placeholder="Username"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label for="website" className="text-sm">
                      Website
                    </label>
                    <input
                      id="website"
                      type="text"
                      disabled
                      placeholder="https://portfolio-tundephilps.vercel.app"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full">
                    <label for="bio" className="text-sm">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                    ></textarea>
                  </div>
                  <div className="col-span-full">
                    <label for="bio" className="text-sm">
                      Photo
                    </label>
                    <div className="flex items-center space-x-2">
                      <img
                        src="https://source.unsplash.com/30x30/?random"
                        alt=""
                        className="w-10 h-10 rounded-full dark:bg-gray-500"
                      />
                      <button
                        type="button"
                        className="px-4 py-2 border rounded-md dark:border-gray-100"
                      >
                        Change
                      </button>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>

          <div>
            <ProfileCard />
          </div>
        </div>
      </div>
      <footer>
        <p>@ Copyright. Creative Agency</p>
      </footer>
    </>
  );
};

export default PersonalProfile;
