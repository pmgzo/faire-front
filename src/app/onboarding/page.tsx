//import { RedirectType, redirect } from 'next/navigation';

export default function Page() {
  return (
    <div className="">
      <div className="flex flex-start h-[24rem]">
        <ul className="mt-24 mr-10 flex flex-col space-y-4 ">
          <li className="font-['InterBold'] text-[#8600BD]">1- Upload CV</li>
          <li className="font-['InterBold'] text-[#8600BD] opacity-50">
            2- Experiences
          </li>
          <li className="font-['InterBold'] text-[#8600BD] opacity-50">
            3- Criterias
          </li>
          <li className="font-['InterBold'] text-[#8600BD] opacity-50">
            4- Location
          </li>
          <li className="font-['InterBold'] text-[#8600BD] opacity-50">
            4- Interest / Passion
          </li>
        </ul>

        <div className="mt-20 w-[2px] h-full bg-[#D2D2D2]"></div>
      </div>
    </div>
  );
}
