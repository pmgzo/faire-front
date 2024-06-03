export default function Page() {
  return (
    <div className="mt-10 w-full">
      <h1 className="font-['InterBold'] text-[#8600BD] text-xl grid justify-items-center">
        Experiences
      </h1>

      <div className="ml-20 mt-10">
        <div className="font-['InterBold'] text-[#8600BD] text-lg">
          New experiences
        </div>

        <div className="flex space-x-6">
          <div className="flex flex-col space-y-6">
            <input
              placeholder="Company name*"
              className="mt-10 p-6 rounded-t-lg bg-[#FAF9F9] w-[20rem]"
            />
            <input
              placeholder="Role*"
              className="mt-10 p-6 rounded-t-lg bg-[#FAF9F9] w-[20rem]"
            />
          </div>

          <textarea
            onResize={undefined}
            placeholder="Description*"
            className="mt-10 p-6 rounded-t-lg bg-[#FAF9F9] w-[25rem] h-[25rem]"
          />
        </div>

        {/* date */}
      </div>
    </div>
  );
}
