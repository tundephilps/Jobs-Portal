import { useStepperContext } from "./StepperContext";

export default function Details() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          College/University
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["address"] || ""}
            name="address"
            placeholder="College / University Name"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Degree
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["city"] || ""}
            name="city"
            placeholder="Degree and Coure of Study"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>

        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Highest Qualifications
        </div>
        <select
          id="countries"
          class="outline-none   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-white dark:border-gray-100 dark:placeholder-gray-900 dark:text-black "
        >
          <option>Masters</option>
          <option>BSC</option>
          <option>HND</option>
          <option>High School Diploma</option>
          <option>Others </option>
        </select>
      </div>
    </div>
  );
}
