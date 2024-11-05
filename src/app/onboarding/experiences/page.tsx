"use client";

import Image from "next/image";

import ExperienceElem from "@/components/experienceElement";
import AddIcon from "@/components/icons/addIcon";

// TODO: state react hook-form
export default function Page() {
  return (
    <div className="w-full flex justify-center mt-10">
      <div>
        <h1 className="font-['InterBold'] text-violet text-lg">
          Your experiences
        </h1>
        <button className="bg-violet w-[20rem] p-3 rounded-lg mt-4">
          <div className="flex justify-center">
            <div className="flex flex-col justify-center text-white text-sm">
              Add new experience
            </div>
          </div>
        </button>
        <ul className="mt-2 space-y-2">
          {[...Array.from("0123456789").values()].map((key) => (
            <li id={key}>
              <ExperienceElem
                addedWithLinkedin={true}
                startDate={new Date("09-11-2024")}
                endDate={new Date("09-20-2024")}
                companyName="Company Name"
                roleName="Role Name"
                onRemoval={() => console.log("You've removed this item")}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
