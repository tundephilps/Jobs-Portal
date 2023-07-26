import React from "react";

const Profilehero = () => {
  return (
    <div className="overflow-hidden bg-gray-900">
      <div className="px-9 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-12 lg:py-20">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Hello {""}
              <span className="text-teal-accent-400">User</span>
            </h2>
            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
              This is your profile page. You can see the progress you've made
              with your work and manage your projects or assigned tasks{" "}
            </p>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <a href="/Profile"> Edit Info</a>
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilehero;
