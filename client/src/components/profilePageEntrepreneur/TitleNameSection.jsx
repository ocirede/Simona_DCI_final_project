import { useFormVisibility } from "./customHook/FormVisibility";

export default function TitleNameSection() {
  const { formVisibility, toggleFormVisibility } = useFormVisibility();

  return (
    <div className="text-center mb-4 mt-4 lg:text-left lg:mt-10 mt-10">
      {formVisibility.name ? (
        <div className="flex">
          <div className="h-[90px] bg-transparent w-1/2"></div>
          <form className="h-[90px] bg-gray-500 rounded-[15px] w-1/2 text-[12px] pt-2 pr-4 pl-4">
            <input
              type="text"
              className="mt-2 bg-transparent border-b border-gray-300 focus:outline-none w-full"
              placeholder="User's Name or Title"
            />
            <div className="flex mt-2">
              <button className="mr-2 bg-gray-400 text-white rounded-md py-1 px-4">Save</button>
              <button className="bg-gray-400 text-white rounded-md py-1 px-4" onClick={() => toggleFormVisibility('name')}>Delete</button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex">
          <div className="h-[50px] bg-transparent w-1/2"></div>
          <div className="h-[50px] bg-gray-500 rounded-[15px] w-1/2 text-[12px] pt-2">
            <h1
              className="text-[20px] font-bold cursor-pointer text-center"
              onClick={() => toggleFormVisibility('name')}
            >
              Name / Title
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
