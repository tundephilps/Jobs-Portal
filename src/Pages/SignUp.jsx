import React from "react";

const SignUp = () => {
  return (
    <div id="app" class="antialiased bg-gray-50 h-[100vh]">
      <div class="flex flex-col items-center justify-center p-2">
        <div class="p-4 grid lg:grid-cols-2 rounded-lg shadow-xl overflow-hidden bg-white">
          <div class="flex flex-col justify-center p-8 space-y-10 rounded-md bg-gradient-to-b from-purple-500 to-indigo-600 lg:px-12">
            <div class="space-y-8">
              <div
                class="p-2 inline-flex items-center rounded-full bg-white bg-opacity-25"
                style={{ backdropFilter: "blur" }}
              >
                <svg
                  class="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h2 class="text-lg font-medium text-white">
                  Quick and free sign-up
                </h2>
                <p class="mt-1 text-sm text-white">
                  Enter your email address to create an account.
                </p>
              </div>
            </div>
            <div class="space-y-3">
              <div
                class="p-2 inline-flex items-center rounded-full bg-white bg-opacity-25"
                style={{ backdropFilter: "blur" }}
              >
                <svg
                  class="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h2 class="text-lg font-medium text-white">
                  Cross-platform solution
                </h2>
                <p class="mt-1 text-sm text-white">
                  Preview your newsletters on any device before sending them
                  out.
                </p>
              </div>
            </div>
            <div class="space-y-3">
              <div
                class="p-2 inline-flex items-center rounded-full bg-white bg-opacity-25"
                style={{ backdropFilter: "blur" }}
              >
                <svg
                  class="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h2 class="text-lg font-medium text-white">
                  Start sending emails
                </h2>
                <p class="mt-1 text-sm text-white">
                  Start getting Job Notifications immediately you Sign Up.
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-center p-8 lg:p-12">
            <form>
              <h2 class="text-2xl font-medium tracking-tight text-gray-700">
                Create your account
              </h2>
              <div class="mt-4 space-y-4">
                <div>
                  <label>
                    <span class="font-medium text-gray-700 sm:text-sm">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      class="mt-1 block px-4 py-3 w-full border-gray-200 form-input sm:text-sm"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <span class="font-medium text-gray-700 sm:text-sm">
                      Full name
                    </span>
                    <input
                      type="text"
                      name="full-name"
                      placeholder="Enter your full name"
                      class="mt-1 block px-4 py-3 w-full border-gray-200 form-input sm:text-sm"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <span class="font-medium text-gray-700 sm:text-sm">
                      Password
                    </span>
                    <input
                      type="password"
                      name="password"
                      placeholder="Type to create a password"
                      class="mt-1 block px-4 py-3 w-full border-gray-200 form-input sm:text-sm"
                    />
                  </label>
                </div>
                <div>
                  <label class="flex items-center">
                    <input
                      type="checkbox"
                      name="newsletter"
                      class="w-6 h-6 border-gray-200 form-checkbox"
                    />
                    <span class="ml-2 font-medium text-gray-500 sm:text-sm">
                      Get updates and notifications about our product
                    </span>
                  </label>
                </div>
                <div>
                  <span class="rounded-md shadow-sm">
                    <button
                      type="submit"
                      class="block w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 font-medium text-white rounded-md shadow sm:text-sm focus:outline-none focus:shadow-outline-purple"
                    >
                      Create account
                    </button>
                  </span>
                </div>

                <div class="py-1 px-4 pb-1 text-center">
                  <button class="bg-red-500 text-white rounded-full h-10 w-10 m-1 transition-all hover:bg-red-600">
                    <i class="fab fa-google"></i>
                  </button>

                  <button class="bg-blue-600 text-white rounded-full h-10 w-10 m-1 transition-all hover:bg-blue-700">
                    <i class="fab fa-facebook-f"></i>
                  </button>

                  <button class="bg-gray-600 text-white rounded-full h-10 w-10 m-1 transition-all hover:bg-gray-700">
                    <i class="fab fa-github"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
