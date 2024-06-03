import Image from "next/image";

import Upload from "@/images/download.svg";

export default function Page() {
  return (
    <div className="mt-10 flex w-full h-full">
      <div className="w-2/3">
        <h1 className="font-['InterBold'] text-[#8600BD] text-xl grid justify-items-center">
          Upload your CV
        </h1>

        <div className="mt-20 flex justify-center">
          <div className="border-3 rounded-xl border-dashed border-[#D5D5D5] w-[25rem] h-[18rem]">
            <div className="h-full flex flex-col justify-center">
              <div className="flex justify-center">
                <Image width={70} src={Upload} alt="Upload document" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <div className="mt-10 h-full w-full">
          <div className="flex w-full h-full">
            <div className="w-[1px] h-full bg-[#D2D2D2]" />

            <div className="ml-10 text-[#6E6E6E] font-['Inter']">
              No document uploaded
            </div>
          </div>
        </div>

        {/* <div className="w-[2px] h-full bg-[#D2D2D2]"/> */}
      </div>
    </div>
  );
}
